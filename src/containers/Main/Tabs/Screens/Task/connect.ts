import {useMemo} from 'react';
import {useTasks} from 'api/hooks';
import {groupTasksByDate} from 'models';
import {useRefreshTaskList} from 'storage/taskChange/hooks';

const useConnect = () => {
  const {tasks, getNextPage, hasNextPage, refresh} = useTasks();

  const sectionedTasks = useMemo(() => groupTasksByDate(tasks), [tasks]);

  useRefreshTaskList({refresh});

  return {
    sectionedTasks,
    getNextPage,
    hasNextPage,
    refresh,
  };
};

export default useConnect;
