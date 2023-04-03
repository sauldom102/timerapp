import {View} from 'react-native';
import styled from 'styled-components/native';
import {LinearGradient} from 'expo-linear-gradient';
import {RectButton} from 'react-native-gesture-handler';
import {absoluteFill} from 'theme/snippets';
import {SIZE_VALUES} from './constants';
import type {GradientProps, PressableProps} from './types';

export const Container = styled(View)`
  border-radius: 50px;
  overflow: hidden;
`;

export const Gradient = styled(LinearGradient).attrs<GradientProps>(
  ({playing, theme}) => ({
    start: {
      x: -1,
      y: 0.5,
    },
    end: {
      x: 1,
      y: 0.5,
    },
    colors: playing ? theme.gradients.sunsetOrange : theme.gradients.green,
  }),
)<GradientProps>`
  ${absoluteFill};
`;

export const Pressable = styled(RectButton)<PressableProps>`
  height: ${({size}) => SIZE_VALUES[size]}px;
  aspect-ratio: 1;
  justify-content: center;
  align-items: center;
`;
