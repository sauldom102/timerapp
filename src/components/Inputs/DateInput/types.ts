import type {ViewStyle} from 'react-native';
import type {Control} from 'react-hook-form';

export type Props = {
  name: string;
  label: string;
  placeholder: string;
  control: Control<any>;
  mode?: 'date' | 'time' | 'datetime';
  title?: string;
  futureOnly?: boolean;
  style?: ViewStyle;
};

export type UseLogicParams = Pick<Props, 'name' | 'control' | 'mode'>;
