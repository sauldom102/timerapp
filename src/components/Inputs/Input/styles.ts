import type {ColorValue} from 'react-native';
import {TextInput, View} from 'react-native';
import styled, {css} from 'styled-components/native';
import Text from 'components/Text';
import {RectButton} from 'react-native-gesture-handler';
import type {LabelProps, InputContainerProps, InputProps} from './types';

export const Container = styled(View)``;

const focusedContainerStyles = css`
  border-color: ${({theme}) => theme.colors.primary[500]};
  background-color: ${({theme}) => `${theme.colors.primary[500]}14`};
`;

const errorContainerStyles = css`
  border-width: 2px;
  border-color: ${({theme}) => theme.colors.alertsAndStatus.error};
`;

const disabledLabel = css`
  color: ${({theme}) => theme.colors.greyscale[50]};
`;

const labelWithError = css`
  color: ${({theme}) => theme.colors.alertsAndStatus.error};
`;

export const Button = styled(RectButton)`
  border-radius: 12px;
`;

export const Label = styled(Text).attrs<LabelProps>({
  variant: 'body-xlarge-semibold',
})<LabelProps>`
  color: ${({theme}) => theme.colors.greyscale[900]};
  ${({hasError}) => hasError && labelWithError};
  ${({disabled}) => disabled && disabledLabel};
  margin-bottom: 10px;
`;

const disabledInputContainer = css`
  border-color: ${({theme}) => theme.colors.greyscale[50]};
`;

const numericInputContainer = css`
  flex-direction: row;
`;

export const InputContainer = styled.View<InputContainerProps>`
  flex-direction: row;
  z-index: -1;
  background-color: ${({theme, disabled}) =>
    disabled ? theme.colors.greyscale[50] : theme.colors.greyscale[50]};
  border-color: ${({theme}) => theme.colors.greyscale[50]};
  border-width: 1px;
  border-radius: 12px;
  ${({focused}) => focused && focusedContainerStyles};
  ${({error}) => error && errorContainerStyles};
  ${({disabled}) => disabled && disabledInputContainer};
  ${({type}) => type === 'number' && numericInputContainer};
`;

const numericInput = css`
  flex: 1;
  text-align: center;
`;

export const Input = styled(TextInput).attrs<InputProps>(({theme}) => ({
  placeholderTextColor: theme.colors.greyscale[500] as ColorValue,
  selectionColor: theme.colors.primary[500] as ColorValue,
}))<InputProps>`
  flex: 1;
  min-height: 56px;
  padding: 18px;
  color: ${({theme, editable}) =>
    editable ? theme.colors.greyscale[900] : theme.colors.greyscale[900]};
  font-size: 14px;
  font-family: ${({value}) => (value ? 'Urbanist-Medium' : 'Urbanist-Regular')};
  ${({multiline, collapsedMultiline}) =>
    multiline &&
    collapsedMultiline &&
    css`
      max-height: 136px;
    `};
  ${({multiline, collapsedMultiline}) =>
    multiline &&
    !collapsedMultiline &&
    css`
      height: 136px;
      line-height: 24px;
    `};
  ${({type}) => type === 'number' && numericInput};
`;

export const ErrorText = styled(Text).attrs({
  variant: 'body-medium-semibold',
})`
  color: ${({theme}) => theme.colors.alertsAndStatus.error};
  margin-top: 8px;
  margin-left: 16px;
`;

export const HelpText = styled(ErrorText).attrs({
  variant: 'body-medium-semibold',
})`
  color: ${({theme}) => theme.colors.greyscale[500]};
  margin-top: 8px;
`;

export const RightIcon = styled.View.attrs({
  pointerEvents: 'box-none',
})`
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

export const LeftIcon = styled.View.attrs({
  pointerEvents: 'box-none',
})`
  justify-content: center;
  align-items: center;
  margin-left: 20px;
`;
