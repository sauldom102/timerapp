import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import type {Language} from 'i18n/languages';
import languages from 'i18n/languages';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';

i18n.use(initReactI18next).init({
  resources: languages,
  lng: 'en_US' as Language,
  interpolation: {escapeValue: false},
  react: {
    useSuspense: false,
  },
});

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

jest.useFakeTimers().setSystemTime(new Date(2022, 1, 1));

jest.mock('react-native-safe-area-context', () => mockSafeAreaContext);

jest.mock('react-native-mmkv-flipper-plugin', () => ({
  initializeMMKVFlipper: jest.fn(),
}));

jest.mock('global', () => ({
  ...global,
  WebSocket: function WebSocket() {},
}));
