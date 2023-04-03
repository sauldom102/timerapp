import type {FC} from 'react';
import React, {memo} from 'react';
import {Container, Pressable, Title} from './styles';
import type {Props} from './types';

const TextButton: FC<Props> = ({title, onPress, style}) => (
  <Container style={style}>
    <Pressable onPress={onPress}>
      <Title>{title}</Title>
    </Pressable>
  </Container>
);

export default memo(TextButton);
