import type {ViewStyle} from 'react-native';

export type Props = {
  title: string;
  subtitle?: string;
  progress: number; // a number between 0 and 1
  style?: ViewStyle;
};
