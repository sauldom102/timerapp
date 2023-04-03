import {RefreshControl as BaseRefreshControl} from 'react-native';
import styled from 'styled-components/native';
import type {ControlProps} from './types';

// eslint-disable-next-line import/prefer-default-export
export const Control = styled(BaseRefreshControl).attrs<ControlProps>(
  ({color}) => ({
    tintColor: color,
    titleColor: color,
    colors: [color],
  }),
)<ControlProps>``;
