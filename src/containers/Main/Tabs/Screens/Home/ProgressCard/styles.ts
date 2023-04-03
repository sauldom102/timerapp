import {View} from 'react-native';
import styled from 'styled-components/native';
import {Text} from 'components';
import {shadows} from 'theme/shadows';

export const Container = styled(View)`
  padding: 20px 24px;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  background-color: ${({theme}) => theme.colors.white};
  border-radius: 32px;
  ${shadows[2]};
`;

export const Main = styled.View`
  flex: 1;
  gap: 16px;
`;

export const Title = styled(Text).attrs({
  variant: 'h5',
})``;

export const Subtitle = styled(Text).attrs({
  variant: 'body-large-medium',
})`
  color: ${({theme}) => theme.colors.greyscale[700]};
`;
