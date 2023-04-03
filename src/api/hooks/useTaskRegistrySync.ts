import {useCallback, useEffect, useMemo} from 'react';
import {useTasksServicePostTasksRegistries} from 'api/openapi/queries';
import {clearQueuedTaskRegistries} from 'storage/timer/registries';
import {useQueuedTaskRegistries} from 'storage/timer/registries/hooks';
import usePrevious from 'utils/hooks/usePrevious';
import useTaskCacheActions from './useTaskCacheActions';

const useTaskRegistrySync = (taskId: string) => {
  const registries = useQueuedTaskRegistries(taskId);

  const {updateCachedTask} = useTaskCacheActions();

  const {mutateAsync: mutateSendRegistries} =
    useTasksServicePostTasksRegistries();

  const registriesToSend = useMemo(
    () => registries.filter(registry => !!registry.to),
    [registries],
  );

  const prevRegistriesCount = usePrevious(registriesToSend.length);

  const syncRegistries = useCallback(async () => {
    if (
      !registriesToSend.length ||
      prevRegistriesCount === registriesToSend.length
    ) {
      return;
    }

    const res = await mutateSendRegistries({
      taskId,
      requestBody: registriesToSend.map(registry => ({
        ...registry,
        from: registry.from.toISOString(),
        to: registry.to!.toISOString(),
      })),
    });

    const task = res.data;

    if (task) {
      updateCachedTask(task);
      clearQueuedTaskRegistries(taskId);
    }
  }, [
    registriesToSend,
    mutateSendRegistries,
    taskId,
    prevRegistriesCount,
    updateCachedTask,
  ]);

  useEffect(() => {
    syncRegistries();
  }, [syncRegistries]);

  return {
    noRegistriesToSend: registriesToSend.length === 0,
  };
};

export default useTaskRegistrySync;
