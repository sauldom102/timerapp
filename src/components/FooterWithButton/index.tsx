import type {FC} from 'react';
import React, {memo} from 'react';
import {Container, Title, TextButton} from './styles';
import type {Props} from './types';

const FooterWithButton: FC<Props> = ({
  title,
  buttonTitle,
  onPressButton,
  style,
}) => (
  <Container style={style}>
    <Title>{title}</Title>
    <TextButton title={buttonTitle} onPress={onPressButton} />
  </Container>
);

export default memo(FooterWithButton);
