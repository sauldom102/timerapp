import type {BottomTabBarProps} from '@react-navigation/bottom-tabs';

export type Props = BottomTabBarProps & {
  onPressAction?: () => void;
};
