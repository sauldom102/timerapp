import type {IconName} from 'components/Icons/types';

export type Props = {};

export type Type = 'success' | 'info' | 'warning' | 'error';

export type ToastProps = {
  type: Type;
};

export type LeadingIconProps = {
  icon?: IconName;
  size?: number;
  type: Type;
};
