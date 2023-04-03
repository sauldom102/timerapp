import type {RefreshControlProps, ViewStyle} from 'react-native';

export type Props = Pick<RefreshControlProps, 'refreshing' | 'onRefresh'> & {
  style?: ViewStyle;
};

export type ControlProps = {
  color: string;
};
