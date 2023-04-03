import {useCallback, useMemo, useState} from 'react';
import {format, isToday, isTomorrow} from 'date-fns';
import {useController} from 'react-hook-form';
import {displayDurationFromDate} from 'utils';
import type {UseLogicParams} from './types';

const useLogic = ({name, control, mode}: UseLogicParams) => {
  const {
    field: {value, onChange},
    fieldState: {error},
    formState: {touchedFields},
  } = useController({
    name,
    control,
  });

  const touched = Object.keys(touchedFields).includes(name);

  const [showPicker, setShowPicker] = useState(false);

  const handlePressInto = useCallback(() => {
    setShowPicker(true);
  }, []);

  const handleCancel = useCallback(() => {
    setShowPicker(false);
  }, []);

  const handleConfirm = useCallback(
    (date: Date) => {
      setShowPicker(false);
      onChange(date);
    },
    [onChange],
  );

  const displayValue = useMemo(() => {
    if (!value) {
      return '';
    }

    if (mode === 'time') {
      return displayDurationFromDate(value, '');
    }

    if (isToday(value)) {
      return 'Today';
    }

    if (isTomorrow(value)) {
      return 'Tomorrow';
    }

    return format(value, 'P');
  }, [value, mode]);

  const defaultDateToShowOnPicker = useMemo(() => {
    if (value) {
      return value;
    }

    if (mode === 'time') {
      const date = new Date();
      date.setHours(1, 0);
      return date;
    }

    return new Date();
  }, [value, mode]);

  return {
    error: touched ? error?.message : undefined,
    displayValue,
    showPicker,
    handlePressInto,
    handleCancel,
    handleConfirm,
    defaultDateToShowOnPicker,
  };
};

export default useLogic;
