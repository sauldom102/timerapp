import {View} from 'react-native';
import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import type {ContainerProps} from './types';

export const Container = styled(View)<ContainerProps>`
  background-color: ${({color}) => `${color}14`};
  border-radius: 20px;
  margin-right: ${({isLeft}) => (isLeft ? 0 : 24)}px;
  margin-left: ${({isLeft}) => (isLeft ? 24 : 0)}px;
`;

export const Pressable = styled(RectButton)`
  border-radius: 20px;
  width: 56px;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
