import type {FC} from 'react';
import React, {memo} from 'react';
import {WeeklyBarChart} from 'components';
import {Container, Title, Subtitle, Divider} from './styles';
import type {Props} from './types';

const Info: FC<Props> = ({data}) => (
  <Container>
    <Title>This Week Stats</Title>
    <Subtitle>
      The following chart shows the number of minutes tracked each day of the
      week
    </Subtitle>
    <Divider />
    <WeeklyBarChart data={data} />
  </Container>
);

export default memo(Info);
