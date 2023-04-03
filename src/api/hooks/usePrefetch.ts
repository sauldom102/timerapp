import {useCallback} from 'react';
import {useQueryClient} from '@tanstack/react-query';
import {
  useCategoriesServiceGetCategoriesKey,
  useTasksServiceGetTasksTodayKey,
  useUserServiceGetUserKey,
} from 'api/openapi/queries';
import {
  CategoriesService,
  TasksService,
  UserService,
} from 'api/openapi/requests';
import {setOnboarded} from 'storage';

const usePrefetch = () => {
  const queryClient = useQueryClient();

  const prefetchAfterLogin = useCallback(async () => {
    // Prefetch me
    const prefetchMe = queryClient.fetchQuery({
      queryKey: [useUserServiceGetUserKey],
      queryFn: () => UserService.getUser(),
    });

    const prefetchCategories = queryClient.fetchQuery({
      queryKey: [useCategoriesServiceGetCategoriesKey],
      queryFn: () => CategoriesService.getCategories(),
    });

    const prefetchTodayTasks = queryClient.fetchQuery({
      queryKey: [useTasksServiceGetTasksTodayKey],
      queryFn: () => TasksService.getTasksToday(),
    });

    const [meRes] = await Promise.all([
      prefetchMe,
      prefetchCategories,
      prefetchTodayTasks,
    ]);

    const me = meRes.data;

    if (me?.onboarded) {
      setOnboarded();
    }
  }, [queryClient]);

  return {
    prefetchAfterLogin,
  };
};

export default usePrefetch;
