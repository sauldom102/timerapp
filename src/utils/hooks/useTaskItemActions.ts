import {useCallback} from 'react';
import {useTaskActions} from 'api/hooks';
import {clearPlayingTask, setPlayingTask} from 'storage/timer/playing';
import {usePlayingTask} from 'storage/timer/playing/hooks';
import {
  addQueuedTaskRegistry,
  clearQueuedTaskRegistries,
} from 'storage/timer/registries';

const useTaskItemActions = (taskId: string) => {
  const playingTask = usePlayingTask();

  const {resetTask, updateTask} = useTaskActions();

  const playing = playingTask === taskId;

  const handlePressPlayPause = useCallback(() => {
    addQueuedTaskRegistry({
      taskId,
      play: !playing,
    });

    if (playing) {
      clearPlayingTask();
    } else {
      setPlayingTask(taskId);
    }
  }, [playing, taskId]);

  const handlePressReset = useCallback(() => {
    clearPlayingTask();

    resetTask(taskId);
    clearQueuedTaskRegistries(taskId);
  }, [resetTask, taskId]);

  const handlePressCheck = useCallback(() => {
    updateTask(taskId, {
      completed: true,
    });

    if (playing) {
      handlePressPlayPause();
    }
  }, [playing, handlePressPlayPause, updateTask, taskId]);

  const handlePressResume = useCallback(() => {
    handlePressPlayPause();

    updateTask(taskId, {
      completed: false,
    });
  }, [handlePressPlayPause, updateTask, taskId]);

  return {
    handlePressPlayPause,
    handlePressReset,
    handlePressCheck,
    handlePressResume,
  };
};

export default useTaskItemActions;
