import {useMMKVString} from 'react-native-mmkv';
import {KEY_PLAYING_TASK} from './constants';

export const usePlayingTask = () => {
  const [playingTask] = useMMKVString(KEY_PLAYING_TASK);

  return playingTask;
};
