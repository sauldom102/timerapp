import {useCallback} from 'react';
import {useUserActions} from 'api/hooks';
import {setOnboarded} from 'storage';
import {useCustomForm} from 'utils';
import {useInputRefs} from 'utils/hooks';
import type {Values} from './constants';
import {validationSchema} from './constants';

const useConnect = () => {
  const {updateUser} = useUserActions();

  const inputRefs = useInputRefs(['lastName', 'username']);

  const handleSubmit = useCallback(
    async (values: Values) => {
      try {
        await updateUser({
          firstName: values.firstName,
          lastName: values.lastName,
          username: values.username,
        });
      } catch (e) {}
    },
    [updateUser],
  );

  const handlePressSkip = useCallback(() => {
    // needed to be called to set the user as onboarded on the backend
    updateUser({});
    setOnboarded();
  }, [updateUser]);

  const {control, submit, isValid} = useCustomForm({
    validationSchema,
    onSubmit: handleSubmit,
  });

  return {
    control,
    submit,
    isValid,
    inputRefs,
    handlePressSkip,
  };
};

export default useConnect;
