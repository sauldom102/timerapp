import {KeyboardAvoidingView} from 'react-native';
import styled from 'styled-components/native';
import {FormInput, Text, Button as BaseButton} from 'components';

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

export const Body = styled.ScrollView.attrs(({theme}) => ({
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingTop: 48 + theme.device.safeTop,
    paddingBottom: 24,
  },
  alwaysBounceVertical: false,
}))``;

export const Info = styled.View`
  gap: 19px;
  margin-bottom: 24px;
`;

export const Title = styled(Text).attrs({
  variant: 'h3',
})`
  text-align: center;
`;

export const Description = styled(Text).attrs({
  variant: 'body-xlarge-regular',
})`
  text-align: center;
`;

export const Inputs = styled.View`
  flex: 1;
  justify-content: center;
  gap: 24px;
`;

export const Input = styled(FormInput)``;

export const Bottom = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 12px 24px;
  gap: 12px;
`;

export const Button = styled(BaseButton)`
  flex: 1;
`;
