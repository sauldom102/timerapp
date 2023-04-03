import type {FC} from 'react';
import React, {memo} from 'react';
import {useIdCallback} from 'utils';
import {Container, Pressable, Icon, Title} from './styles';
import type {Props} from './types';

const MenuItem: FC<Props> = ({id, title, icon, onPress}) => {
  const handlePress = useIdCallback(onPress, id);

  return (
    <Container>
      <Pressable onPress={handlePress}>
        <Icon name={icon} />
        <Title>{title}</Title>
      </Pressable>
    </Container>
  );
};

export default memo(MenuItem);
