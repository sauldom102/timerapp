import {useMemo} from 'react';
import {zodResolver} from '@hookform/resolvers/zod';
import {showSnackbar} from 'components/Snackbar/utils';
import type {
  DeepPartial,
  FieldValues,
  Path,
  SubmitErrorHandler,
  SubmitHandler,
} from 'react-hook-form';
import {useForm} from 'react-hook-form';
import type {ZodType} from 'zod';

type LogicParams<T extends FieldValues> = {
  defaultValues?: DeepPartial<T>;
  onSubmit?: SubmitHandler<T>;
  onError?: SubmitErrorHandler<T>;
  validationSchema?: ZodType<any, any, any>;
  resetOnSubmit?: boolean;
  handleServerError?: boolean;
};

export const useCustomForm = <T extends FieldValues>({
  defaultValues,
  onSubmit,
  onError,
  validationSchema,
  resetOnSubmit = false,
  handleServerError = true,
}: LogicParams<T>) => {
  const formMethods = useForm<T>({
    defaultValues,
    resolver: validationSchema ? zodResolver(validationSchema) : undefined,
    mode: 'all',
  });
  const {handleSubmit, reset, setError} = formMethods;

  const submit = useMemo(
    () =>
      handleSubmit(async (onValid, onInvalid) => {
        try {
          if (onSubmit) {
            await onSubmit(onValid, onInvalid);
            if (resetOnSubmit) {
              reset();
            }
          }
        } catch (err: any) {
          const error = err?.body?.error;
          if (handleServerError && error) {
            showSnackbar({
              title: error,
              type: 'error',
            });
            setError('serverError' as Path<T>, {
              message: error,
            });
            return;
          }
          throw err;
        }
      }, onError),
    [
      handleSubmit,
      onError,
      onSubmit,
      resetOnSubmit,
      reset,
      handleServerError,
      setError,
    ],
  );

  return {
    ...formMethods,
    formMethods,
    submit,
    isValid: formMethods.formState.isValid,
  };
};
