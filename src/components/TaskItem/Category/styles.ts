import {View} from 'react-native';
import styled from 'styled-components/native';
import {Image as BaseImage} from 'expo-image';
import type {ContainerProps} from './types';

export const Container = styled(View)<ContainerProps>`
  height: 60px;
  aspect-ratio: 1;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background-color: ${({bgColor}) => bgColor};
`;

export const Image = styled(BaseImage)`
  width: 28px;
  aspect-ratio: 1;
`;
