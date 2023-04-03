import {useController} from 'react-hook-form';
import type {Props} from './types';

const useLogic = ({control, name}: Props) => {
  const {
    field: {value, onChange, onBlur},
    fieldState: {error, invalid},
    formState: {touchedFields},
  } = useController({
    name,
    control,
  });

  const touched = Object.keys(touchedFields).includes(name);

  return {
    error: touched ? error?.message : undefined,
    onChangeText: onChange,
    onBlur,
    value,
    invalid,
  };
};

export default useLogic;
