import type {RefObject} from 'react';
import type {TextInputProps, ViewStyle, TextInput} from 'react-native';

export type InputType =
  | 'date'
  | 'email'
  | 'number'
  | 'username'
  | 'password'
  | 'search'
  | 'select';

export type Props = Omit<TextInputProps, 'ref' | 'style'> & {
  name?: string;
  disabled?: boolean;
  innerRef?: RefObject<TextInput>;
  nextFieldRef?: RefObject<TextInput>;
  helpText?: string;
  minValue?: number;
  maxValue?: number;
  onBlur?: () => void;
  style?: ViewStyle;
  type?: InputType;
  hideCharacterLenght?: boolean;
  error?: string;
  label?: string;
  collapsedMultiline?: boolean;
  onPressInto?: () => void;
  onPress?: () => void;
  editable?: boolean;
};

export type LabelProps = {
  focused?: boolean;
  disabled?: boolean;
  hasError?: boolean;
};

export type InputContainerProps = {
  disabled?: boolean;
  focused?: boolean;
  error?: boolean;
  type?: Props['type'];
};

export type InputProps = {
  type?: Props['type'];
  collapsedMultiline?: boolean;
};

export type LogicParams = Pick<
  Props,
  | 'nextFieldRef'
  | 'onBlur'
  | 'onSubmitEditing'
  | 'placeholder'
  | 'value'
  | 'type'
  | 'onChangeText'
  | 'hideCharacterLenght'
  | 'multiline'
  | 'disabled'
  | 'maxLength'
  | 'onPress'
  | 'error'
  | 'onFocus'
  | 'minValue'
  | 'maxValue'
>;
