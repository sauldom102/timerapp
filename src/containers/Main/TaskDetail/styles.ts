import styled from 'styled-components/native';
import {Button, Text} from 'components';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.white};
  padding-bottom: ${({theme}) => theme.device.safeBottom}px;
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

export const Description = styled(Text).attrs({
  variant: 'body-large-medium',
})`
  color: ${({theme}) => theme.colors.greyscale[800]};
`;

export const TimerSection = styled.View`
  flex: 1;
  gap: 32px;
  padding: 0 40px;
  justify-content: center;
  align-items: center;
`;

export const Message = styled(Text).attrs({
  variant: 'body-large-medium',
})`
  color: ${({theme}) => theme.colors.greyscale[800]};
`;

export const Bottom = styled.View`
  min-height: 100px;
  justify-content: center;
`;

export const ResumeButton = styled(Button).attrs({
  variant: 'secondary',
  rounded: true,
})`
  width: 248px;
`;
