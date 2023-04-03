import type {FC} from 'react';
import React, {memo} from 'react';
import Chart from './Chart';
import {Container, Main, Title, Subtitle} from './styles';
import type {Props} from './types';

const ProgressCard: FC<Props> = ({progress, title, subtitle, style}) => (
  <Container style={style}>
    <Chart progress={progress} />
    <Main>
      <Title>{title}</Title>
      {!!subtitle && <Subtitle>{subtitle}</Subtitle>}
    </Main>
  </Container>
);

export default memo(ProgressCard);
