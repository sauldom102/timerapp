import type {ViewStyle} from 'react-native';

export type Props = {
  visible?: boolean;
  color?: string;
  onPress: () => void;
  style?: ViewStyle;
};
