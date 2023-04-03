import type {FC} from 'react';
import React, {memo} from 'react';
import Icon from 'components/Icons';
import {Container} from './styles';
import type {Props} from './types';

const SimpleIconButton: FC<Props> = ({
  iconName,
  iconSize = 28,
  onPress,
  style,
}) => (
  <Container onPress={onPress} testID={`icon-button-${iconName}`} style={style}>
    <Icon name={iconName} size={iconSize} />
  </Container>
);

export default memo(SimpleIconButton);
