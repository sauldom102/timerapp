import {View} from 'react-native';
import styled from 'styled-components/native';
import Text from 'components/Text';
import {CircleFade} from 'react-native-animated-spinkit';
import {RectButton} from 'react-native-gesture-handler';
import {shadows} from 'theme/shadows';
import {backgroundColor, textColor} from './constants';
import type {ContainerProps, PressableProps, TitleProps} from './types';

export const Container = styled(View)<ContainerProps>`
  background-color: ${({theme, variant, enabled}) =>
    enabled
      ? backgroundColor[variant]
      : theme.colors.alertsAndStatus.buttonDisabled};
  border-radius: ${({rounded}) => (rounded ? 100 : 16)}px;
  ${({withShadow}) => withShadow && shadows.buttonShadow1};
`;

export const Pressable = styled(RectButton)<PressableProps>`
  border-radius: ${({rounded}) => (rounded ? 100 : 16)}px;
  height: 58px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled(Text).attrs<TitleProps>({
  variant: 'body-large-bold',
})<TitleProps>`
  color: ${({buttonVariant}) => textColor[buttonVariant]};
`;

export const Loader = styled(CircleFade).attrs(({theme}) => ({
  color: theme.colors.white,
  size: 28,
}))``;
