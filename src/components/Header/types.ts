import type {IconName} from 'components/Icons/types';

export type Props = {
  onPressGoBack?: () => void;
  onPressClose?: () => void;
  showAppLogo?: boolean;
  title?: string;
  centerTitle?: boolean;
  rightIcon?: IconName;
  onPressRight?: () => void;
  testID?: string;
};

export type TitleProps = {
  center?: boolean;
};
