import type {ViewStyle} from 'react-native';
import type {Control} from 'react-hook-form';

type Option = {
  label: string;
  value: string;
};

export type Props = {
  name: string;
  label: string;
  placeholder: string;
  control: Control<any>;
  options: Option[];
  style?: ViewStyle;
};

export type UseLogicParams = Pick<Props, 'name' | 'control' | 'options'>;
