import type {FC} from 'react';
import React, {memo} from 'react';
import RNPickerSelect from 'react-native-picker-select';
import Input from '../Input';
import useLogic from './logic';
import {Container, pickerStyle} from './styles';
import type {Props} from './types';

const SelectInput: FC<Props> = ({
  name,
  label,
  placeholder,
  control,
  options,
  style,
}) => {
  const {pickerRef, value, displayValue, handlePressInto, onChange, error} =
    useLogic({
      name,
      control,
      options,
    });

  return (
    <Container style={style}>
      <Input
        label={label}
        placeholder={placeholder}
        onPressInto={handlePressInto}
        value={displayValue}
        type="select"
        error={error}
      />
      <RNPickerSelect
        ref={pickerRef}
        onValueChange={onChange}
        value={value}
        items={options}
        style={pickerStyle}
      />
    </Container>
  );
};

export default memo(SelectInput);
