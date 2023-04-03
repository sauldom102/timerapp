import storage from 'storage/base';

export const KEY_TASK_CHANGE = 'task-change';

export const setTaskChange = (change = true) => {
  storage.set(KEY_TASK_CHANGE, change);
};

export const getTaskChange = () => storage.getBoolean(KEY_TASK_CHANGE);
