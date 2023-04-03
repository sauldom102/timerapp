import type {FC} from 'react';
import React, {memo} from 'react';
import Icons from 'components/Icons';
import {ICON_SIZE_VALUES} from './constants';
import {Container, Gradient, Pressable} from './styles';
import type {Props} from './types';

const PlayPause: FC<Props> = ({playing = false, size = 'regular', onPress}) => (
  <Container testID={`${playing ? 'pause' : 'play'}-button`}>
    <Gradient playing={playing} colors={[]} />
    <Pressable size={size} onPress={onPress}>
      <Icons name={playing ? 'pause' : 'play'} size={ICON_SIZE_VALUES[size]} />
    </Pressable>
  </Container>
);

export default memo(PlayPause);
