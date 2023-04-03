import type {FC} from 'react';
import React, {memo} from 'react';
import DatePicker from 'react-native-date-picker';
import Input from '../Input';
import useLogic from './logic';
import {Container} from './styles';
import type {Props} from './types';

const DateInput: FC<Props> = ({
  name,
  label,
  placeholder,
  control,
  mode = 'date',
  title,
  futureOnly = true,
  style,
}) => {
  const {
    showPicker,
    displayValue,
    handlePressInto,
    handleCancel,
    handleConfirm,
    error,
    defaultDateToShowOnPicker,
  } = useLogic({
    name,
    control,
    mode,
  });

  return (
    <Container style={style}>
      <Input
        label={label}
        placeholder={placeholder}
        onPressInto={handlePressInto}
        value={displayValue}
        type="date"
        error={error}
      />
      <DatePicker
        modal
        open={showPicker}
        date={defaultDateToShowOnPicker}
        mode={mode}
        locale="en_GB"
        title={title}
        minimumDate={futureOnly && mode !== 'time' ? new Date() : undefined}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </Container>
  );
};

export default memo(DateInput);
