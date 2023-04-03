import type theme from 'theme';

export type Props = {
  height: number;
  gradient: keyof typeof theme.gradients;
  label: string;
  value: number;
};

export type BaseBarProps = {
  height: number;
};
