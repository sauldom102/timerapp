import {useCallback, useMemo} from 'react';
import {useTasks, useTaskStats} from 'api/hooks';
import {groupTasksByDate} from 'models';
import {useRefreshTaskList} from 'storage/taskChange/hooks';

const useConnect = () => {
  const {
    tasks,
    getNextPage,
    hasNextPage,
    refresh: refreshTasks,
  } = useTasks({
    thisWeekOnly: true,
  });

  const {weeklyMinutes, refetch: refetchTaskStats} = useTaskStats();

  const handleRefresh = useCallback(async () => {
    await Promise.all([refreshTasks(), refetchTaskStats()]);
  }, [refreshTasks, refetchTaskStats]);

  const sectionedTasks = useMemo(() => groupTasksByDate(tasks), [tasks]);

  useRefreshTaskList({
    refresh: refreshTasks,
  });

  return {
    sectionedTasks,
    getNextPage,
    hasNextPage,
    weeklyMinutes,
    handleRefresh,
  };
};

export default useConnect;
