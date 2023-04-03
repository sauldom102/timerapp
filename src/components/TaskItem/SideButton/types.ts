import type {IconName} from 'components/Icons/types';

export type Props = {
  color: string;
  iconName: IconName;
  isLeft?: boolean;
  onPress?: () => void;
};

export type ContainerProps = {
  color: string;
  isLeft: boolean;
};
