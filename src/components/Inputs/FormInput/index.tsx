import type {FC} from 'react';
import React, {memo} from 'react';
import Input from 'components/Inputs/Input';
import useLogic from './logic';
import type {Props} from './types';

const FormInput: FC<Props> = ({name, control, ...extraProps}) => {
  const {onChangeText, onBlur, value, error} = useLogic({
    name,
    control,
  });

  return (
    <Input
      name={name}
      value={value}
      onChangeText={onChangeText}
      onBlur={onBlur}
      error={error}
      {...extraProps}
    />
  );
};

export default memo(FormInput);
