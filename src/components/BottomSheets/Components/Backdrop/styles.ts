import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

export const Container = Animated.createAnimatedComponent(styled(
  RectButton,
).attrs(({theme}) => ({
  activeOpacity: 0,
  rippleColor: theme.colors.transparent,
}))`
  background-color: #09101d;
`);
