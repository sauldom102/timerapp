import {useMMKVString} from 'react-native-mmkv';
import storage from 'storage/base';

export const KEY_TASK_TO_DELETE = 'onboarding-passed';

export const setTaskToDelete = (taskId: string) => {
  storage.set(KEY_TASK_TO_DELETE, taskId);
};

export const useTaskToDelete = () => {
  const [taskToDelete] = useMMKVString(KEY_TASK_TO_DELETE);

  return taskToDelete;
};
