import type {ViewStyle} from 'react-native';

export type Props = {
  title: string;
  buttonTitle: string;
  onPressButton?: () => void;
  style?: ViewStyle;
};
