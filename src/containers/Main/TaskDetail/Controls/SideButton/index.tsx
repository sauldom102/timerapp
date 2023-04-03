import type {FC} from 'react';
import React, {memo} from 'react';
import {Container, Pressable, Icon} from './styles';
import type {Props} from './types';

const SideButton: FC<Props> = ({icon, onPress}) => (
  <Container>
    <Pressable onPress={onPress}>
      <Icon name={icon} />
    </Pressable>
  </Container>
);

export default memo(SideButton);
