import {useCallback, useMemo} from 'react';
import {useCategories, useTaskActions} from 'api/hooks';
import {showSnackbar} from 'components/Snackbar/utils';
import {useTranslation} from 'react-i18next';
import {getSecondsFromDate, useCustomForm} from 'utils';
import {useInputRefs, useNavigation} from 'utils/hooks';
import type {Values} from './constants';
import {validationSchema} from './constants';

const useConnect = () => {
  const {goBack} = useNavigation();

  const {categories} = useCategories();

  const {createTask} = useTaskActions();

  const categoryOptions = useMemo(
    () =>
      categories.map(cat => ({
        label: cat.title,
        value: cat.id,
      })),
    [categories],
  );

  const inputRefs = useInputRefs(['description']);

  const {t} = useTranslation();

  const handleSubmit = useCallback(
    async (values: Values) => {
      try {
        await createTask({
          title: values.title,
          description: values.description,
          date: values.date.toISOString(),
          categoryId: values.category,
          estimatedDuration: getSecondsFromDate(values.expectedDuration),
        });

        showSnackbar({
          title: t('messages.task-created-success'),
          type: 'success',
        });

        goBack();
      } catch (e) {}
    },
    [createTask, goBack, t],
  );

  const {control, submit, isValid} = useCustomForm({
    validationSchema,
    onSubmit: handleSubmit,
  });

  return {
    goBack,
    control,
    submit,
    isValid,
    inputRefs,
    categoryOptions,
  };
};

export default useConnect;
