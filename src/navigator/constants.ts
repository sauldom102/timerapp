import type {NativeStackNavigationOptions} from '@react-navigation/native-stack';

export const rootStackScreenOptions: NativeStackNavigationOptions =
  Object.freeze({
    headerShown: false,
  });

export const generalStackScreenOptions: NativeStackNavigationOptions =
  Object.freeze({
    ...rootStackScreenOptions,
    animation: 'slide_from_right',
  });

export const modalStackScreenOptions: NativeStackNavigationOptions =
  Object.freeze({
    ...rootStackScreenOptions,
    presentation: 'transparentModal',
    animation: 'slide_from_bottom',
  });

export const transparentModal: NativeStackNavigationOptions = Object.freeze({
  ...rootStackScreenOptions,
  presentation: 'transparentModal',
  animation: 'fade',
});
