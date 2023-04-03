import {useCallback} from 'react';
import {usePlayingTask} from 'storage/timer/playing/hooks';
import {useDisplayTaskSeconds} from 'storage/timer/registries/hooks';
import {displayDurationFromSeconds} from 'utils';
import useTaskItemActions from 'utils/hooks/useTaskItemActions';
import type {UseLogicParams} from './types';

const useLogic = ({id, totalTime, tickEnabled}: UseLogicParams) => {
  const playingTask = usePlayingTask();

  const {handlePressPlayPause, handlePressCheck} = useTaskItemActions(id);

  const playing = playingTask === id;

  const displayFunc = useCallback(
    (secs: number) => displayDurationFromSeconds(secs, 'Not started'),
    [],
  );

  const timeToDisplay = useDisplayTaskSeconds({
    intervalValue: 60, // it gets updated every minute
    taskId: id,
    totalTime,
    displayFunc,
    enabled: tickEnabled,
  });

  return {
    playing,
    timeToDisplay,
    handlePressPlayPause,
    handlePressCheck,
  };
};

export default useLogic;
