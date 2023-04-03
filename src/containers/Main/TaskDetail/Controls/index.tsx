import type {FC} from 'react';
import React, {memo} from 'react';
import SideButton from './SideButton';
import {Container, PlayPause} from './styles';
import type {Props} from './types';

const Controls: FC<Props> = ({
  playing,
  onPressPlayPause,
  onPressCheck,
  onPressReset,
}) => (
  <Container>
    {playing && <SideButton icon="reset" onPress={onPressReset} />}
    <PlayPause playing={playing} onPress={onPressPlayPause} />
    {playing && <SideButton icon="check" onPress={onPressCheck} />}
  </Container>
);

export default memo(Controls);
