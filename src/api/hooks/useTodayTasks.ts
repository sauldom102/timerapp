import {useMemo} from 'react';
import {useTasksServiceGetTasksToday} from 'api/openapi/queries';
import {normalizeTasks} from 'models';

const useTodayTasks = () => {
  const {data, refetch} = useTasksServiceGetTasksToday();

  const tasks = useMemo(() => normalizeTasks(data?.data ?? []), [data]);

  return {
    tasks,
    refetch,
  };
};

export default useTodayTasks;
