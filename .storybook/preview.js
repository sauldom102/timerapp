import {ThemeProvider} from 'styled-components/native';
import theme from 'theme';

export const decorators = [
  Story => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {};
