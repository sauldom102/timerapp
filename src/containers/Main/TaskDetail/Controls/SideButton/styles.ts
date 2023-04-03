import {View} from 'react-native';
import styled from 'styled-components/native';
import {Icons} from 'components';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled(View)`
  border-radius: 28px;
  overflow: hidden;
`;

export const Pressable = styled(RectButton)`
  height: 56px;
  aspect-ratio: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.greyscale[100]};
`;

export const Icon = styled(Icons).attrs(({theme}) => ({
  size: 24,
  color: theme.colors.greyscale[400],
}))``;
