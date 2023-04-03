import type {UseQueryOptions, UseMutationOptions} from '@tanstack/react-query';
import {useQuery, useMutation} from '@tanstack/react-query';
import type {CreateTaskBody} from '../requests/models/CreateTaskBody';
import type {LoginRequest} from '../requests/models/LoginRequest';
import type {SignUpRequest} from '../requests/models/SignUpRequest';
import type {UpdateTaskBody} from '../requests/models/UpdateTaskBody';
import type {UpdateUserBody} from '../requests/models/UpdateUserBody';
import {AuthService} from '../requests/services/AuthService';
import {CategoriesService} from '../requests/services/CategoriesService';
import {TasksService} from '../requests/services/TasksService';
import {UserService} from '../requests/services/UserService';
export const useUserServiceGetUserKey = 'UserServiceGetUser';
export const useUserServiceGetUser = <
  TQueryKey extends Array<unknown> = unknown[],
>(
  queryKey?: TQueryKey,
  options?: Omit<
    UseQueryOptions<
      Awaited<ReturnType<typeof UserService.getUser>>,
      unknown,
      Awaited<ReturnType<typeof UserService.getUser>>,
      unknown[]
    >,
    'queryKey' | 'queryFn' | 'initialData'
  >,
) =>
  useQuery(
    [useUserServiceGetUserKey, ...(queryKey ?? [])],
    () => UserService.getUser(),
    options,
  );
export const useUserServicePutUser = (
  options?: Omit<
    UseMutationOptions<
      Awaited<ReturnType<typeof UserService.putUser>>,
      unknown,
      {
        requestBody: UpdateUserBody;
      },
      unknown
    >,
    'mutationFn'
  >,
) => useMutation(({requestBody}) => UserService.putUser(requestBody), options);
export const useTasksServiceGetTasksKey = 'TasksServiceGetTasks';
export const useTasksServiceGetTasks = <
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    page,
  }: {
    page?: number;
  },
  queryKey?: TQueryKey,
  options?: Omit<
    UseQueryOptions<
      Awaited<ReturnType<typeof TasksService.getTasks>>,
      unknown,
      Awaited<ReturnType<typeof TasksService.getTasks>>,
      unknown[]
    >,
    'queryKey' | 'queryFn' | 'initialData'
  >,
) =>
  useQuery(
    [useTasksServiceGetTasksKey, ...(queryKey ?? [{page}])],
    () => TasksService.getTasks(page),
    options,
  );
export const useTasksServicePostTasks = (
  options?: Omit<
    UseMutationOptions<
      Awaited<ReturnType<typeof TasksService.postTasks>>,
      unknown,
      {
        requestBody: CreateTaskBody;
      },
      unknown
    >,
    'mutationFn'
  >,
) =>
  useMutation(({requestBody}) => TasksService.postTasks(requestBody), options);
export const useTasksServiceGetTasks1Key = 'TasksServiceGetTasks1';
export const useTasksServiceGetTasks1 = <
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    taskId,
  }: {
    taskId: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<
    UseQueryOptions<
      Awaited<ReturnType<typeof TasksService.getTasks1>>,
      unknown,
      Awaited<ReturnType<typeof TasksService.getTasks1>>,
      unknown[]
    >,
    'queryKey' | 'queryFn' | 'initialData'
  >,
) =>
  useQuery(
    [useTasksServiceGetTasks1Key, ...(queryKey ?? [{taskId}])],
    () => TasksService.getTasks1(taskId),
    options,
  );
export const useTasksServiceDeleteTasks = (
  options?: Omit<
    UseMutationOptions<
      Awaited<ReturnType<typeof TasksService.deleteTasks>>,
      unknown,
      {
        taskId: string;
      },
      unknown
    >,
    'mutationFn'
  >,
) => useMutation(({taskId}) => TasksService.deleteTasks(taskId), options);
export const useTasksServicePutTasks = (
  options?: Omit<
    UseMutationOptions<
      Awaited<ReturnType<typeof TasksService.putTasks>>,
      unknown,
      {
        taskId: string;
        requestBody: UpdateTaskBody;
      },
      unknown
    >,
    'mutationFn'
  >,
) =>
  useMutation(
    ({taskId, requestBody}) => TasksService.putTasks(taskId, requestBody),
    options,
  );
export const useTasksServiceGetTasksTodayKey = 'TasksServiceGetTasksToday';
export const useTasksServiceGetTasksToday = <
  TQueryKey extends Array<unknown> = unknown[],
>(
  queryKey?: TQueryKey,
  options?: Omit<
    UseQueryOptions<
      Awaited<ReturnType<typeof TasksService.getTasksToday>>,
      unknown,
      Awaited<ReturnType<typeof TasksService.getTasksToday>>,
      unknown[]
    >,
    'queryKey' | 'queryFn' | 'initialData'
  >,
) =>
  useQuery(
    [useTasksServiceGetTasksTodayKey, ...(queryKey ?? [])],
    () => TasksService.getTasksToday(),
    options,
  );
export const useTasksServicePostTasksReset = (
  options?: Omit<
    UseMutationOptions<
      Awaited<ReturnType<typeof TasksService.postTasksReset>>,
      unknown,
      {
        taskId: string;
      },
      unknown
    >,
    'mutationFn'
  >,
) => useMutation(({taskId}) => TasksService.postTasksReset(taskId), options);
export const useTasksServiceGetTasksStatsKey = 'TasksServiceGetTasksStats';
export const useTasksServiceGetTasksStats = <
  TQueryKey extends Array<unknown> = unknown[],
>(
  queryKey?: TQueryKey,
  options?: Omit<
    UseQueryOptions<
      Awaited<ReturnType<typeof TasksService.getTasksStats>>,
      unknown,
      Awaited<ReturnType<typeof TasksService.getTasksStats>>,
      unknown[]
    >,
    'queryKey' | 'queryFn' | 'initialData'
  >,
) =>
  useQuery(
    [useTasksServiceGetTasksStatsKey, ...(queryKey ?? [])],
    () => TasksService.getTasksStats(),
    options,
  );
export const useTasksServicePostTasksRegistries = (
  options?: Omit<
    UseMutationOptions<
      Awaited<ReturnType<typeof TasksService.postTasksRegistries>>,
      unknown,
      {
        taskId: string;
        requestBody: Array<{
          from: string;
          to: string;
          seconds: number;
        }>;
      },
      unknown
    >,
    'mutationFn'
  >,
) =>
  useMutation(
    ({taskId, requestBody}) =>
      TasksService.postTasksRegistries(taskId, requestBody),
    options,
  );
export const useCategoriesServiceGetCategoriesKey =
  'CategoriesServiceGetCategories';
export const useCategoriesServiceGetCategories = <
  TQueryKey extends Array<unknown> = unknown[],
>(
  queryKey?: TQueryKey,
  options?: Omit<
    UseQueryOptions<
      Awaited<ReturnType<typeof CategoriesService.getCategories>>,
      unknown,
      Awaited<ReturnType<typeof CategoriesService.getCategories>>,
      unknown[]
    >,
    'queryKey' | 'queryFn' | 'initialData'
  >,
) =>
  useQuery(
    [useCategoriesServiceGetCategoriesKey, ...(queryKey ?? [])],
    () => CategoriesService.getCategories(),
    options,
  );
export const useAuthServicePostAuthSignUp = (
  options?: Omit<
    UseMutationOptions<
      Awaited<ReturnType<typeof AuthService.postAuthSignUp>>,
      unknown,
      {
        requestBody: SignUpRequest;
      },
      unknown
    >,
    'mutationFn'
  >,
) =>
  useMutation(
    ({requestBody}) => AuthService.postAuthSignUp(requestBody),
    options,
  );
export const useAuthServicePostAuthLogin = (
  options?: Omit<
    UseMutationOptions<
      Awaited<ReturnType<typeof AuthService.postAuthLogin>>,
      unknown,
      {
        requestBody: LoginRequest;
      },
      unknown
    >,
    'mutationFn'
  >,
) =>
  useMutation(
    ({requestBody}) => AuthService.postAuthLogin(requestBody),
    options,
  );
