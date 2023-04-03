import type {FC} from 'react';
import React, {memo} from 'react';
import theme from 'theme';
import {Container, Value, BaseBar, Gradient, Label} from './styles';
import type {Props} from './types';

const Bar: FC<Props> = ({height, gradient, label, value}) => (
  <Container>
    <Value>{value}</Value>
    <BaseBar height={height}>
      <Gradient colors={theme.gradients[gradient]} />
    </BaseBar>
    <Label>{label}</Label>
  </Container>
);

export default memo(Bar);
