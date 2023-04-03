import styled from 'styled-components/native';
import {Text} from 'components';
import type {ColorBoxContainerProps, ColorBoxTitleProps} from './types';

export const ColorBoxContainer = styled.View<ColorBoxContainerProps>`
  width: 100%;
  padding: 10px;
  height: 75px;
  border-radius: 10px;
  background-color: ${({color}) => color};
  justify-content: center;
  align-items: center;
`;

export const ColorBoxTitle = styled(Text).attrs<ColorBoxTitleProps>({
  variant: 'h6',
})<ColorBoxTitleProps>`
  text-align: center;
  color: ${({theme, shouldBeBlack}) =>
    shouldBeBlack ? theme.colors.black : theme.colors.white};
`;

export const Palette = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 10px;
`;
