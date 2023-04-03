import {KeyboardAvoidingView} from 'react-native';
import styled from 'styled-components/native';
import {
  Button as BaseButton,
  FormInput,
  Text,
  FooterWithButton as BaseFooterWithButton,
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
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  alwaysBounceVertical: false,
})``;

export const Title = styled(Text).attrs({
  variant: 'h1',
})`
  padding: 64px 0;
`;

export const Inputs = styled.View`
  gap: 20px;
`;

export const Input = styled(FormInput)``;

export const Button = styled(BaseButton)`
  margin-top: 20px;
`;

export const FooterWithButton = styled(BaseFooterWithButton)`
  position: absolute;
  bottom: ${({theme}) => theme.device.safeBottom + 24}px;
`;
