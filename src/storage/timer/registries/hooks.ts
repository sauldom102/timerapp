import {useEffect, useMemo, useRef, useState} from 'react';
import {useMMKVString} from 'react-native-mmkv';
import {getSecondsBetweenDates} from 'utils';
import {usePlayingTask} from '../playing/hooks';
import {KEY_QUEUED_TASK_REGISTRIES} from './constants';
import {parseQueuedTaskRegistries} from './utils';

export const useQueuedTaskRegistries = (taskId?: string) => {
  const [taskRegistriesValue] = useMMKVString(KEY_QUEUED_TASK_REGISTRIES);

  const taskRegistries = parseQueuedTaskRegistries(taskRegistriesValue);

  return taskId
    ? taskRegistries.filter(t => t.taskId === taskId)
    : taskRegistries;
};

export const useTaskStoredSeconds = (taskId: string) => {
  const taskRegistries = useQueuedTaskRegistries(taskId);

  const storedSeconds = useMemo(
    () =>
      taskRegistries.reduce((acc, r) => {
        if (r.to) {
          return acc + r.seconds;
        }

        return acc + getSecondsBetweenDates(r.from, new Date());
      }, 0),
    [taskRegistries],
  );

  return storedSeconds;
};

type UseDisplayStoredSecondsInTaskItemParams = {
  taskId: string;
  totalTime: number;
  intervalValue: number; // in seconds
  displayFunc: (seconds: number) => string;
  enabled?: boolean;
};

export const useDisplayTaskSeconds = ({
  taskId,
  totalTime,
  intervalValue = 1,
  displayFunc,
  enabled = true,
}: UseDisplayStoredSecondsInTaskItemParams) => {
  const playingTask = usePlayingTask();

  const interval = useRef<ReturnType<typeof setInterval> | null>(null);

  const playing = playingTask === taskId;

  const [, setSeconds] = useState(0);

  const storedSeconds = useTaskStoredSeconds(taskId);

  const totalSeconds = storedSeconds + totalTime;

  useEffect(() => {
    if (interval.current) {
      clearInterval(interval.current);
      interval.current = null;
    }

    if (playing && enabled) {
      interval.current = setInterval(() => {
        setSeconds(secs => secs + 1);
      }, intervalValue * 1000);
    }

    return () => {
      if (interval.current) {
        clearInterval(interval.current);
        interval.current = null;
      }
    };
  }, [intervalValue, playing, enabled]);

  const timeToDisplay = useMemo(
    () => displayFunc(totalSeconds),
    [displayFunc, totalSeconds],
  );

  return timeToDisplay;
};
