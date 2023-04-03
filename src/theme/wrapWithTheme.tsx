import {ThemeProvider} from 'styled-components/native';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {configure} from 'enzyme';
import theme from 'theme';

configure({adapter: new Adapter()});

const wrapWithTheme = (children: JSX.Element) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default wrapWithTheme;
