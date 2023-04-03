import styled from 'styled-components/native';
import {Icons} from 'components';
import {RectButton} from 'react-native-gesture-handler';

export const Content = styled(RectButton).attrs({
  activeOpacity: 0.1,
})`
  justify-content: center;
  align-items: center;
  width: 40px;
  aspect-ratio: 1;
  border-radius: 20px;
  background-color: ${({theme}) => theme.colors.primary[500]};
  margin: 0 8px;
`;

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  overflow: visible;
`;

export const Icon = styled(Icons).attrs({
  name: 'curvedPlus',
})``;
