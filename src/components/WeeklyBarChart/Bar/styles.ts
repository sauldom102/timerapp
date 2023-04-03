import {View} from 'react-native';
import styled, {css} from 'styled-components/native';
import Text from 'components/Text';
import {LinearGradient} from 'expo-linear-gradient';
import {absoluteFill} from 'theme/snippets';
import type {BaseBarProps} from './types';

export const Container = styled.View`
  justify-content: flex-end;
  align-items: center;
`;

export const Value = styled(Text).attrs({
  variant: 'body-small-semibold',
})`
  text-align: center;
`;

const barBorders = css`
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

export const BaseBar = styled(View)<BaseBarProps>`
  width: 28px;
  height: ${({height}) => height}px;
  margin-top: 16px;
  ${barBorders};
`;

export const Gradient = styled(LinearGradient).attrs({
  start: {
    x: -1,
    y: 0.5,
  },
  end: {
    x: 1,
    y: 0.5,
  },
})`
  ${absoluteFill};
  ${barBorders};
`;

export const Label = styled(Text).attrs({
  variant: 'body-small-medium',
})`
  color: ${({theme}) => theme.colors.greyscale[700]};
  text-align: center;
  margin-top: 24px;
`;
