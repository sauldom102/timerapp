import {useCallback} from 'react';
import {useQueryClient} from '@tanstack/react-query';
import {
  useTasksServiceGetTasks1Key,
  useTasksServiceGetTasksTodayKey,
} from 'api/openapi/queries';
import type {Task as ApiTask, TasksService} from 'api/openapi/requests';
import {normalizeTask} from 'models';

const useTaskCacheActions = () => {
  const queryClient = useQueryClient();

  const addTaskToTodayList = useCallback(
    (task: ApiTask) => {
      queryClient.setQueryData<
        Awaited<ReturnType<typeof TasksService.getTasksToday>>
      >([useTasksServiceGetTasksTodayKey], data => ({
        status: 'ok',
        data: [task, ...(data?.data ?? [])],
      }));
    },
    [queryClient],
  );

  const getTaskFromToday = useCallback(
    (taskId: string) => {
      const data = queryClient.getQueryData<
        Awaited<ReturnType<typeof TasksService.getTasksToday>>
      >([useTasksServiceGetTasksTodayKey]);

      const tasks = data?.data;
      const task = tasks?.find(t => t.id === taskId);

      const normalizedTask = task ? normalizeTask(task) : undefined;
      return normalizedTask;
    },
    [queryClient],
  );

  const deleteTaskFromCache = useCallback(
    (taskId: string) => {
      queryClient.setQueryData<
        Awaited<ReturnType<typeof TasksService.getTasksToday>>
      >([useTasksServiceGetTasksTodayKey], data => ({
        status: 'ok',
        data: data?.data?.filter(task => task.id !== taskId),
      }));
    },
    [queryClient],
  );

  const updateCachedTask = useCallback(
    (newTask: ApiTask) => {
      queryClient.setQueryData<
        Awaited<ReturnType<typeof TasksService.getTasks1>>
      >([useTasksServiceGetTasks1Key, {taskId: newTask.id}], () => ({
        status: 'ok',
        data: newTask,
      }));
      queryClient.setQueryData<
        Awaited<ReturnType<typeof TasksService.getTasksToday>>
      >([useTasksServiceGetTasksTodayKey], data => ({
        status: 'ok',
        data: data?.data?.map(task =>
          task.id === newTask.id ? newTask : task,
        ),
      }));
    },
    [queryClient],
  );

  return {
    addTaskToTodayList,
    getTaskFromToday,
    deleteTaskFromCache,
    updateCachedTask,
  };
};

export default useTaskCacheActions;
