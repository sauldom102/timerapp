import type {FC} from 'react';
import React, {memo} from 'react';
import {interpolate, useAnimatedStyle} from 'react-native-reanimated';
import {Container} from './styles';
import type {Props} from './types';

const Backdrop: FC<Props> = ({animatedIndex, onPress, style}) => {
  const animatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(animatedIndex.value, [0, -1], [0.7, 0]);
    return {
      display: opacity === 0 ? 'none' : 'flex',
      opacity,
    };
  }, []);

  return <Container onPress={onPress} style={[animatedStyle, style]} />;
};

export default memo(Backdrop);
