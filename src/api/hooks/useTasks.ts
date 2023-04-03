import {useState, useCallback, useMemo} from 'react';
import {useTasksServiceGetTasks} from 'api/openapi/queries';
import type {TasksService} from 'api/openapi/requests';
import {isThisWeek, parseISO} from 'date-fns';
import {flatten} from 'lodash';
import type {Task} from 'models';
import {normalizeTasks} from 'models';

type Params = {
  thisWeekOnly?: boolean;
};

type PaginatedTasks = {
  page: number;
  tasks: Task[];
};

const useTasks = ({thisWeekOnly}: Params = {}) => {
  const [page, setPage] = useState(1);
  const [paginatedTasks, setPaginatedTasks] = useState<PaginatedTasks[]>([]);
  const [canFetchMore, setCanFetchMore] = useState(true);

  const handleSuccess = useCallback(
    (res: Awaited<ReturnType<typeof TasksService.getTasks>>) => {
      const items = res.data?.items ?? [];
      let normalizedItems: Task[] = [];

      if (thisWeekOnly) {
        const finalItems = items.filter(item =>
          isThisWeek(parseISO(item.date), {
            weekStartsOn: 2,
          }),
        );

        // means we already have some items from previous week
        if (finalItems.length !== items.length) {
          setCanFetchMore(false);
        }

        normalizedItems = normalizeTasks(finalItems);
      } else {
        normalizedItems = normalizeTasks(items);
      }

      setPaginatedTasks(prevPages => [
        ...prevPages.filter(p => p.page !== page),
        {
          page,
          tasks: normalizedItems,
        },
      ]);
    },
    [thisWeekOnly, page],
  );

  const {data, refetch, isLoading} = useTasksServiceGetTasks(
    {
      page,
    },
    [{page}],
    {
      onSuccess: handleSuccess,
    },
  );

  const nextPage = data?.data?.nextPage;
  const getNextPage = useCallback(() => {
    if (nextPage && canFetchMore) {
      setPage(nextPage);
    }
  }, [nextPage, canFetchMore]);

  const allTasks = useMemo(
    () => flatten(paginatedTasks.map(p => p.tasks)),
    [paginatedTasks],
  );

  const refresh = useCallback(async () => {
    setPaginatedTasks(prevPages => prevPages.filter(p => p.page === 1));
    setPage(1);
    await refetch();
  }, [refetch]);

  const hasNextPage = !!data?.data?.nextPage;

  return {
    tasks: allTasks,
    isLoading,
    getNextPage,
    hasNextPage,
    refresh,
  };
};

export default useTasks;
