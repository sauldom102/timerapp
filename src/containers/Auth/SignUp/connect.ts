import {useCallback} from 'react';
import {useAuth} from 'api/hooks';
import {useCustomForm} from 'utils';
import {useInputRefs, useNavigation} from 'utils/hooks';
import type {Values} from './constants';
import {validationSchema} from './constants';

const useConnect = () => {
  const {signUp} = useAuth();

  const inputRefs = useInputRefs(['password', 'repeatPassword']);

  const {navigate, goBack} = useNavigation();

  const handleSubmit = useCallback(
    async (values: Values) => {
      await signUp({
        email: values.email,
        password: values.password,
      });
    },
    [signUp],
  );

  const handlePressSignIn = useCallback(() => {
    navigate('Login');
  }, [navigate]);

  const {control, submit, isValid} = useCustomForm({
    validationSchema,
    onSubmit: handleSubmit,
  });

  return {
    inputRefs,
    goBack,
    control,
    submit,
    isValid,
    handlePressSignIn,
  };
};

export default useConnect;
