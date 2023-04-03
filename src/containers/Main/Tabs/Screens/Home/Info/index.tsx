import type {FC} from 'react';
import React, {memo} from 'react';
import {Container, Title, ProgressCard} from './styles';
import type {Props} from './types';

const Info: FC<Props> = ({
  title,
  progressTitle,
  progressSubtitle,
  progressValue,
  showProgressCard,
}) => (
  <Container>
    <Title>{title}</Title>
    {showProgressCard && (
      <ProgressCard
        title={progressTitle}
        subtitle={progressSubtitle}
        progress={progressValue}
      />
    )}
  </Container>
);

export default memo(Info);
