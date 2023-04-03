import {useCallback} from 'react';
import {useQueryClient} from '@tanstack/react-query';
import {useUserServiceGetUserKey} from 'api/openapi/queries';
import type {User} from 'api/openapi/requests';

const useUserCacheActions = () => {
  const queryClient = useQueryClient();

  const updateCachedMe = useCallback(
    (user: User) => {
      queryClient.setQueryData([useUserServiceGetUserKey], user);
    },
    [queryClient],
  );

  return {
    updateCachedMe,
  };
};

export default useUserCacheActions;
