import type {FC} from 'react';
import React, {memo} from 'react';
import Icon from 'components/Icons';
import useLogic from './logic';
import PasswordButton from './PasswordButton';
import {
  Container,
  Button,
  Label,
  InputContainer,
  Input,
  ErrorText,
  HelpText,
  RightIcon,
  LeftIcon,
} from './styles';
import type {Props} from './types';

const TextInput: FC<Props> = ({
  name,
  disabled,
  error,
  hideCharacterLenght = false,
  innerRef,
  keyboardType,
  label,
  collapsedMultiline,
  maxLength,
  multiline,
  onPress,
  nextFieldRef,
  helpText,
  minValue,
  maxValue,
  onBlur,
  onChangeText,
  onSubmitEditing,
  placeholder,
  returnKeyType,
  style,
  type,
  value: val,
  onPressInto,
  editable = !disabled,
  onFocus,
  autoFocus,
}) => {
  const {
    focused,
    handleBlur,
    handlePasswordVisibility,
    handleSubmitEditing,
    inputExtraProps,
    isPasswordVisible,
    handleFocus,
    placeholderValue,
    value,
    handleChangeText,
    pointerEvents,
    rightIcon,
    leftIcon,
    iconColor,
  } = useLogic({
    type,
    onBlur,
    onSubmitEditing,
    nextFieldRef,
    placeholder,
    onChangeText,
    value: val,
    hideCharacterLenght,
    multiline,
    onPress,
    disabled,
    maxLength,
    minValue,
    maxValue,
    error,
    onFocus,
  });

  const testID = name ? `${name}-input` : 'input';

  return (
    <Container style={style} pointerEvents={pointerEvents}>
      {!!label && (
        <Label disabled={disabled} hasError={!!error} focused={focused}>
          {label}
        </Label>
      )}
      <Button onPress={onPressInto} enabled={!!onPressInto}>
        <InputContainer
          disabled={disabled}
          error={!!error}
          type={type}
          focused={focused}>
          {!!leftIcon && (
            <LeftIcon>
              <Icon name={leftIcon} size={20} color={iconColor} />
            </LeftIcon>
          )}
          <Input
            ref={innerRef}
            onBlur={handleBlur}
            onFocus={handleFocus}
            value={value}
            onChangeText={handleChangeText}
            onSubmitEditing={handleSubmitEditing}
            placeholder={placeholderValue}
            returnKeyType={returnKeyType}
            editable={editable}
            maxLength={maxLength}
            type={type}
            textAlignVertical={multiline ? 'top' : 'center'}
            multiline={multiline}
            collapsedMultiline={collapsedMultiline}
            keyboardType={keyboardType}
            onPressIn={onPressInto}
            autoFocus={autoFocus}
            testID={testID}
            {...inputExtraProps}
          />
          {(type === 'password' || !!rightIcon) && (
            <RightIcon>
              {type === 'password' && (
                <PasswordButton
                  visible={isPasswordVisible}
                  color={iconColor}
                  onPress={handlePasswordVisibility}
                />
              )}
              {!!rightIcon && (
                <Icon name={rightIcon} size={20} color={iconColor} />
              )}
            </RightIcon>
          )}
        </InputContainer>
      </Button>
      {!!helpText && <HelpText>{helpText}</HelpText>}
      {!!error && <ErrorText>{error}</ErrorText>}
    </Container>
  );
};

export default memo(TextInput);
