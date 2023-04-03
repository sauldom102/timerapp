import {useCallback} from 'react';
import {useQueryClient} from '@tanstack/react-query';
import {
  useAuthServicePostAuthLogin,
  useAuthServicePostAuthSignUp,
} from 'api/openapi/queries';
import type {LoginRequest, SignUpRequest} from 'api/openapi/requests';
import {OpenAPI} from 'api/openapi/requests';
import {clearToken, setToken} from 'storage';
import storage from 'storage/base';
import usePrefetch from './usePrefetch';

const useAuth = () => {
  const {prefetchAfterLogin} = usePrefetch();

  const queryClient = useQueryClient();

  const {mutateAsync: mutateSignUp} = useAuthServicePostAuthSignUp();

  const authenticate = useCallback(
    async (accessToken: string) => {
      OpenAPI.TOKEN = accessToken;
      await prefetchAfterLogin();
      setToken(accessToken);
    },
    [prefetchAfterLogin],
  );

  const signUp = useCallback(
    async (requestBody: SignUpRequest) => {
      const res = await mutateSignUp({
        requestBody,
      });

      const accessToken = res.data;

      if (accessToken) {
        authenticate(accessToken);
      }
    },
    [mutateSignUp, authenticate],
  );

  const {mutateAsync: mutationLogin} = useAuthServicePostAuthLogin();

  const login = useCallback(
    async (requestBody: LoginRequest) => {
      const res = await mutationLogin({
        requestBody,
      });

      const accessToken = res.data;

      if (accessToken) {
        authenticate(accessToken);
      }
    },
    [mutationLogin, authenticate],
  );

  const logout = useCallback(() => {
    clearToken();
    queryClient.clear();
    storage.clearAll();
  }, [queryClient]);

  return {
    signUp,
    login,
    logout,
  };
};

export default useAuth;
