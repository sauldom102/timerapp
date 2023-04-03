import type {FC} from 'react';
import React, {memo} from 'react';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import theme from 'theme';
import {Container, Center, Title} from './styles';
import type {Props} from './types';

const Chart: FC<Props> = ({progress}) => (
  <Container>
    <AnimatedCircularProgress
      fill={progress * 100}
      tintColor={theme.colors.primary[400]}
      size={120}
      width={12}
      backgroundColor={theme.colors.greyscale[200]}
      rotation={0}
      fillLineCap="round"
      duration={0}
    />
    <Center>
      <Title>{`${Math.round(progress * 100)}%`}</Title>
    </Center>
  </Container>
);

export default memo(Chart);
