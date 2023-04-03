import type {FC} from 'react';
import React, {memo} from 'react';
import {Container, Image} from './styles';
import type {Props} from './types';

const PlayPause: FC<Props> = ({bgColor, image}) => (
  <Container bgColor={bgColor}>
    <Image source={image} />
  </Container>
);

export default memo(PlayPause);
