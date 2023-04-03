import {Dimensions, Platform} from 'react-native';
import {initialWindowMetrics} from 'react-native-safe-area-context';

const {width, height} = Dimensions.get('window');

export const device = Object.freeze({
  width,
  height,
  isIOS: Platform.OS === 'ios',
  isAndroid: Platform.OS === 'android',
  safeTop: initialWindowMetrics?.insets.top ?? 0,
  safeBottom: initialWindowMetrics?.insets.bottom ?? 0,
});
