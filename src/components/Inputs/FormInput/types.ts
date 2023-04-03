import type {Props as InputProps} from 'components/Inputs/Input/types';

export type Props = InputProps & {
  name: string;
  control: any;
  error?: string;
};
