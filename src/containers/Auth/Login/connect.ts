import {useCallback} from 'react';
import {useAuth} from 'api/hooks';
import {useCustomForm} from 'utils';
import {useInputRefs, useNavigation} from 'utils/hooks';
import type {Values} from './constants';
import {validationSchema} from './constants';

const useConnect = () => {
  const {login} = useAuth();

  const inputRefs = useInputRefs(['password']);

  const {navigate, goBack} = useNavigation();

  const handleSubmit = useCallback(
    async (values: Values) => {
      await login({
        email: values.email,
        password: values.password,
      });
    },
    [login],
  );

  const handlePressSignUp = useCallback(() => {
    navigate('SignUp');
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
    handlePressSignUp,
  };
};

export default useConnect;
