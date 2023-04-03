import type {FC} from 'react';
import {render} from '@testing-library/react-native';
import {ThemeProvider} from 'styled-components/native';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClientProvider} from '@tanstack/react-query';
import reactQueryClient from 'api/client';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {navigationRef} from 'services';
import theme from 'theme';

const AllTheProviders: FC = ({children}) => (
  <ThemeProvider theme={theme}>
    <QueryClientProvider client={reactQueryClient}>
      <SafeAreaProvider>
        <GestureHandlerRootView>
          <NavigationContainer ref={navigationRef}>
            {children}
          </NavigationContainer>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

const customRender = (
  ui: Parameters<typeof render>[0],
  options: Parameters<typeof render>[1] = {},
) => render(ui, {wrapper: AllTheProviders, ...options});

// re-export everything
export * from '@testing-library/react-native';

// override render method
export {customRender as render};
