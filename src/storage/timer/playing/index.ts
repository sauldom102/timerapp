import storage from 'storage/base';
import {KEY_PLAYING_TASK} from './constants';

export const setPlayingTask = (taskId: string) => {
  storage.set(KEY_PLAYING_TASK, taskId);
};

export const clearPlayingTask = () => {
  storage.delete(KEY_PLAYING_TASK);
};
