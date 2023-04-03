import type {FC} from 'react';
import React, {memo} from 'react';
import Icon from 'components/Icons';
import {Container} from './styles';
import type {Props} from './types';

const PasswordButton: FC<Props> = ({visible, color, onPress, style}) => (
  <Container onPress={onPress} style={style}>
    <Icon name={visible ? 'boldHide' : 'boldShow'} size={20} color={color} />
  </Container>
);

export default memo(PasswordButton);
