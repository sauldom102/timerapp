import {usePlayingTask} from 'storage/timer/playing/hooks';
import {
  useDisplayTaskSeconds,
  useTaskStoredSeconds,
} from 'storage/timer/registries/hooks';
import {displayTimerFromSeconds} from 'utils';
import useTaskItemActions from 'utils/hooks/useTaskItemActions';
import type {UseLogicParams} from './types';

const useLogic = ({taskId, totalTime, expectedDuration}: UseLogicParams) => {
  const {
    handlePressPlayPause,
    handlePressReset,
    handlePressCheck,
    handlePressResume,
  } = useTaskItemActions(taskId);

  const playingTask = usePlayingTask();

  const playing = playingTask === taskId;

  const storedSeconds = useTaskStoredSeconds(taskId);

  const totalSeconds = storedSeconds + totalTime;

  const timeToDisplay = useDisplayTaskSeconds({
    intervalValue: 1,
    taskId,
    totalTime,
    displayFunc: displayTimerFromSeconds,
  });

  const progress = totalSeconds / expectedDuration;

  return {
    timeToDisplay,
    progress,
    playing,
    handlePressPlayPause,
    handlePressReset,
    handlePressCheck,
    handlePressResume,
  };
};

export default useLogic;
