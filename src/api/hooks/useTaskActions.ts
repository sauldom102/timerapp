import {useCallback} from 'react';
import {
  useTasksServicePostTasksReset,
  useTasksServicePostTasks,
  useTasksServicePutTasks,
} from 'api/openapi/queries';
import {useTasksServiceDeleteTasks} from 'api/openapi/queries';
import type {CreateTaskBody, UpdateTaskBody} from 'api/openapi/requests';
import {normalizeTask} from 'models';
import {setTaskChange} from 'storage';
import useTaskCacheActions from './useTaskCacheActions';

const useTaskActions = () => {
  const {addTaskToTodayList, deleteTaskFromCache, updateCachedTask} =
    useTaskCacheActions();

  const {mutateAsync: mutateCreateTask} = useTasksServicePostTasks();

  const createTask = useCallback(
    async (requestBody: CreateTaskBody) => {
      const res = await mutateCreateTask({
        requestBody,
      });

      const task = res.data;

      if (task) {
        const normalizedTask = normalizeTask(task);

        if (normalizedTask.fromToday) {
          addTaskToTodayList(task);
        }

        setTaskChange(true);

        return normalizedTask;
      }
    },
    [mutateCreateTask, addTaskToTodayList],
  );

  const {mutateAsync: mutateUpdateTask} = useTasksServicePutTasks();

  const updateTask = useCallback(
    async (taskId: string, requestBody: UpdateTaskBody) => {
      const res = await mutateUpdateTask({
        taskId,
        requestBody,
      });

      const task = res.data;

      if (task) {
        updateCachedTask(task);
      }
    },
    [mutateUpdateTask, updateCachedTask],
  );

  const {mutateAsync: mutateDeleteTask} = useTasksServiceDeleteTasks();

  const deleteTask = useCallback(
    async (taskId: string) => {
      await mutateDeleteTask({
        taskId,
      });

      setTaskChange(true);

      deleteTaskFromCache(taskId);
    },
    [mutateDeleteTask, deleteTaskFromCache],
  );

  const {mutateAsync: mutateResetTask} = useTasksServicePostTasksReset();

  const resetTask = useCallback(
    async (taskId: string) => {
      const res = await mutateResetTask({
        taskId,
      });

      const task = res.data;
      if (task) {
        updateCachedTask(task);
      }
    },
    [mutateResetTask, updateCachedTask],
  );

  return {
    createTask,
    updateTask,
    deleteTask,
    resetTask,
  };
};

export default useTaskActions;
