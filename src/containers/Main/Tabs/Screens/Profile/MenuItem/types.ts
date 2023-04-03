import type {IconName} from 'components/Icons/types';

export type Props = {
  id: string;
  title: string;
  icon: IconName;
  onPress?: (id: string) => void;
};
