import {KeyboardAvoidingView} from 'react-native';
import styled from 'styled-components/native';
import {
  FormInput,
  Button as BaseButton,
  DateInput as BaseDateInput,
  SelectInput as BaseSelectInput,
} from 'components';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.white};
  padding-bottom: ${({theme}) => theme.device.safeBottom}px;
`;

export const AvoidingView = styled(KeyboardAvoidingView).attrs({
  behavior: 'padding',
})`
  flex: 1;
`;

export const Body = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingVertical: 24,
    gap: 24,
  },
  alwaysBounceVertical: false,
})``;

export const Input = styled(FormInput)``;

export const DateInput = styled(BaseDateInput)``;

export const SelectInput = styled(BaseSelectInput)``;

export const Button = styled(BaseButton)`
  margin: 12px 24px;
`;
