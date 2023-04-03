import type {FC} from 'react';
import React, {memo} from 'react';
import Icons from 'components/Icons';
import {Container, Pressable} from './styles';
import type {Props} from './types';

const SideButton: FC<Props> = ({color, iconName, isLeft = false, onPress}) => (
  <Container
    isLeft={isLeft}
    testID={`task-${isLeft ? 'left' : 'right'}-side-button`}
    color={color}>
    <Pressable onPress={onPress}>
      <Icons name={iconName} color={color} />
    </Pressable>
  </Container>
);

export default memo(SideButton);
