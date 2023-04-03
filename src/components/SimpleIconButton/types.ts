import type {ViewStyle} from 'react-native';
import type {IconName} from 'components/Icons/types';

export type Props = {
  iconName: IconName;
  iconSize?: number;
  onPress?: () => void;
  style?: ViewStyle;
};
