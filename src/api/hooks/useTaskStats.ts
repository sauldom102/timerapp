import {useMemo} from 'react';
import {useTasksServiceGetTasksStats} from 'api/openapi/queries';

const useTaskStats = () => {
  const {data, refetch} = useTasksServiceGetTasksStats();

  const weeklyMinutes = useMemo(
    () => data?.data?.weeklyMinutes ?? new Array(7).fill(0),
    [data],
  );

  return {
    weeklyMinutes,
    refetch,
  };
};

export default useTaskStats;
