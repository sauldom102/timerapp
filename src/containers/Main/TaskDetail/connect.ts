import {useRoute} from '@react-navigation/native';
import {useTask} from 'api/hooks';
import useTaskRegistrySync from 'api/hooks/useTaskRegistrySync';
import {useNavigation} from 'utils/hooks';
import useLogic from './logic';
import type {Props} from './types';

const useConnect = () => {
  const {goBack} = useNavigation();
  const {
    params: {taskId},
  } = useRoute<Props['route']>();

  useTaskRegistrySync(taskId);

  const {task} = useTask(taskId);

  const {
    progress,
    timeToDisplay,
    playing,
    handlePressPlayPause,
    handlePressReset,
    handlePressCheck,
    handlePressResume,
  } = useLogic({
    taskId,
    expectedDuration: task?.expectedDuration ?? 0,
    totalTime: task?.totalTime ?? 0,
  });

  return {
    goBack,
    progress,
    task,
    timeToDisplay,
    playing,
    handlePressPlayPause,
    handlePressReset,
    handlePressCheck,
    handlePressResume,
  };
};

export default useConnect;
