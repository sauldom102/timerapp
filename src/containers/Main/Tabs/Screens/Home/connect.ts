import {useCallback, useMemo} from 'react';
import {useMe, useTodayTasks} from 'api/hooks';
import {useTranslation} from 'react-i18next';
import {BottomSheetName, setShownBottomSheet, setTaskToDelete} from 'storage';
import {displayGreeting} from 'utils';
import {useNavigation} from 'utils/hooks';
import type {Props} from './types';

const useConnect = () => {
  const {tasks, refetch: refetchTodayTasks} = useTodayTasks();

  const handleRefresh = useCallback(async () => {
    await refetchTodayTasks();
  }, [refetchTodayTasks]);

  const {me} = useMe();

  const firstName = me?.firstName;

  const title = useMemo(() => displayGreeting(firstName), [firstName]);

  const tasksToShow = useMemo(() => tasks.slice(0, 4), [tasks]);

  const totalTasks = tasks.length;

  const {navigate} = useNavigation<Props['navigation']>();

  const handlePressTask = useCallback(
    (taskId: string) => {
      navigate('TaskDetail', {
        taskId,
      });
    },
    [navigate],
  );

  const handlePressDeleteTask = useCallback((taskId: string) => {
    setTaskToDelete(taskId);
    setShownBottomSheet(BottomSheetName.DELETE_TASK);
  }, []);

  const handlePressViewAll = useCallback(() => {
    navigate('AllTodayTasks');
  }, [navigate]);

  const handlePressNotifications = useCallback(() => {}, []);

  const sectionedTasks = useMemo(
    () => [
      {
        index: 0,
        title: `Today Tasks (${totalTasks})`,
        data: tasksToShow,
        canViewAll: totalTasks > 4,
      },
    ],
    [tasksToShow, totalTasks],
  );

  // task completition

  const {t} = useTranslation();

  const completedTasksTotal = useMemo(
    () => tasks.reduce((acc, task) => acc + (task.completed ? 1 : 0), 0),
    [tasks],
  );

  const taskCompletitionProgress = completedTasksTotal / totalTasks;

  const taskCompletitionProgressTitle = useMemo(() => {
    if (taskCompletitionProgress === 0) {
      return t('misc.task-progress.1');
    }
    if (taskCompletitionProgress < 0.6) {
      return t('misc.task-progress.2');
    }
    if (taskCompletitionProgress !== 1) {
      return t('misc.task-progress.3');
    }
    return t('misc.task-progress.4');
  }, [taskCompletitionProgress, t]);

  const taskCompletitionProgressSubtitle = useMemo(() => {
    if (totalTasks === 0) {
      return undefined;
    }
    return `${completedTasksTotal} of ${totalTasks} completed!`;
  }, [completedTasksTotal, totalTasks]);

  const showProgressCard = tasks.length >= 3;

  return {
    sectionedTasks,
    title,
    handlePressTask,
    handlePressDeleteTask,
    handlePressViewAll,
    handlePressNotifications,
    taskCompletitionProgress,
    taskCompletitionProgressTitle,
    taskCompletitionProgressSubtitle,
    showProgressCard,
    handleRefresh,
  };
};

export default useConnect;
