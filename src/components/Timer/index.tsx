import type {FC} from 'react';
import React, {memo} from 'react';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import theme from 'theme';
import {Container, Center, Title} from './styles';
import type {Props} from './types';

const Timer: FC<Props> = ({title, progress, color}) => (
  <Container>
    <AnimatedCircularProgress
      fill={progress * 100}
      tintColor={color}
      size={300}
      width={25}
      backgroundColor={theme.colors.greyscale[200]}
      rotation={0}
      fillLineCap="round"
      duration={400}
    />
    <Center>
      <Title>{title}</Title>
    </Center>
  </Container>
);

export default memo(Timer);
