import type {FC} from 'react';
import React, {memo} from 'react';
import {Container} from './styles';
import type {Props} from './types';

const CenteredView: FC<Props> = ({style, children}) => (
  <Container style={style}>{children}</Container>
);

export default memo(CenteredView);
