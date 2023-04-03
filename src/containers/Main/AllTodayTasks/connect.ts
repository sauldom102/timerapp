import {useCallback, useMemo} from 'react';
import {useTodayTasks} from 'api/hooks';
import groupBy from 'lodash/groupBy';
import {BottomSheetName, setShownBottomSheet, setTaskToDelete} from 'storage';
import {useNavigation} from 'utils/hooks';

const useConnect = () => {
  const {navigate, goBack} = useNavigation();

  const {tasks, refetch: refetchTodayTasks} = useTodayTasks();

  const handleRefresh = useCallback(async () => {
    await refetchTodayTasks();
  }, [refetchTodayTasks]);

  const sectionedTasks = useMemo(() => {
    const grouped = groupBy(tasks, task => task.category.title);
    return Object.entries(grouped).map(([categoryTitle, items], i) => ({
      index: i,
      canViewAll: false,
      data: items,
      title: categoryTitle,
    }));
  }, [tasks]);

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

  return {
    sectionedTasks,
    goBack,
    handlePressTask,
    handlePressDeleteTask,
    handleRefresh,
  };
};

export default useConnect;
