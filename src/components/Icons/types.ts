import type {StyleProp, ViewStyle} from 'react-native';
import type {icons} from './icons';

export type IconName = keyof typeof icons;

export type Props = IconProps & {
  name: IconName;
};

export type IconProps = {
  fill: 'transparent';
  size?: number;
  color?: string;
  style?: StyleProp<ViewStyle>;
};
