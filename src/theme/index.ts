import {useContext} from 'react';
import {ThemeContext} from 'styled-components/native';
import {colors} from './colors';
import {device} from './device';
import {gradients} from './gradients';

const theme = Object.freeze({
  colors,
  gradients,
  device,
});

export type Theme = typeof theme;

export default theme as Theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export const useTheme = () => useContext(ThemeContext);
