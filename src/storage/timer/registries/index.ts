import storage from 'storage/base';
import {getSecondsBetweenDates} from 'utils';
import {KEY_QUEUED_TASK_REGISTRIES} from './constants';
import type {AddQueuedTaskRegistry} from './types';
import {parseQueuedTaskRegistries} from './utils';

export const getQueuedTaskRegistries = () => {
  const value = storage.getString(KEY_QUEUED_TASK_REGISTRIES);
  return parseQueuedTaskRegistries(value);
};

export const addQueuedTaskRegistry = ({
  taskId,
  play,
}: AddQueuedTaskRegistry) => {
  let registries = getQueuedTaskRegistries();

  if (play) {
    registries = [
      ...registries.map(registry => {
        if (!registry.to) {
          const to = new Date();
          return {
            ...registry,
            to,
            seconds: getSecondsBetweenDates(registry.from, to),
          };
        }

        return registry;
      }),
      {
        taskId,
        from: new Date(),
        seconds: 0,
      },
    ];
  } else {
    registries = registries.map(registry => {
      if (registry.taskId === taskId && !registry.to) {
        const to = new Date();
        return {
          ...registry,
          to,
          seconds: getSecondsBetweenDates(registry.from, to),
        };
      }
      return registry;
    });
  }

  storage.set(KEY_QUEUED_TASK_REGISTRIES, JSON.stringify(registries));
};

export const clearQueuedTaskRegistries = (taskId: string) => {
  const registries = getQueuedTaskRegistries();
  storage.set(
    KEY_QUEUED_TASK_REGISTRIES,
    JSON.stringify(registries.filter(r => r.taskId !== taskId)),
  );
};
