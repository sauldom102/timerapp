import {useCallback} from 'react';
import {useUserServicePutUser} from 'api/openapi/queries';
import type {UpdateUserBody} from 'api/openapi/requests';
import {setOnboarded} from 'storage';
import useUserCacheActions from './useUserCacheActions';

const useUserActions = () => {
  const {updateCachedMe} = useUserCacheActions();

  const {mutateAsync: mutateUpdateUser} = useUserServicePutUser();

  const updateUser = useCallback(
    async (requestBody: UpdateUserBody) => {
      const res = await mutateUpdateUser({
        requestBody,
      });

      const user = res.data;

      if (user) {
        updateCachedMe(user);
        setOnboarded();
      }
    },
    [mutateUpdateUser, updateCachedMe],
  );

  return {
    updateUser,
  };
};

export default useUserActions;
