import {useCallback, useMemo, useRef} from 'react';
import {useController} from 'react-hook-form';
import type RNPickerSelect from 'react-native-picker-select';
import type {UseLogicParams} from './types';

const useLogic = ({name, control, options}: UseLogicParams) => {
  const pickerRef = useRef<RNPickerSelect>(null);

  const {
    field: {value, onChange},
    fieldState: {error},
    formState: {touchedFields},
  } = useController({
    name,
    control,
  });

  const touched = Object.keys(touchedFields).includes(name);

  const handlePressInto = useCallback(() => {
    pickerRef.current?.togglePicker();
  }, []);

  const displayValue = useMemo(() => {
    if (!value) {
      return '';
    }

    return options.find(option => option.value === value)?.label;
  }, [value, options]);

  return {
    pickerRef,
    error: touched ? error?.message : undefined,
    value,
    displayValue,
    handlePressInto,
    onChange,
  };
};

export default useLogic;
