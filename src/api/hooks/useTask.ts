import {useCallback, useMemo, useState} from 'react';
import {useTasksServiceGetTasks1} from 'api/openapi/queries';
import type {Task} from 'models';
import {normalizeTask} from 'models';
import useTaskCacheActions from './useTaskCacheActions';

const useTask = (taskId?: string) => {
  const [cachedTask, setCachedTask] = useState<Task>();

  const {getTaskFromToday} = useTaskCacheActions();

  const handleError = useCallback(() => {
    if (!taskId) {
      return;
    }

    const taskFound = getTaskFromToday(taskId);

    if (taskFound) {
      setCachedTask(taskFound);
    }
  }, [getTaskFromToday, taskId]);

  const {data} = useTasksServiceGetTasks1(
    {
      taskId: taskId ?? '',
    },
    [{taskId: taskId ?? ''}],
    {
      enabled: !!taskId,
      onError: handleError,
    },
  );

  const task = useMemo(
    () => (data?.data ? normalizeTask(data.data) : undefined),
    [data?.data],
  );

  return {
    task: task ?? cachedTask,
  };
};

export default useTask;
