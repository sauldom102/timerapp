import {colors} from 'theme/colors';
import type {ButtonVariant} from './types';

export const backgroundColor: Record<ButtonVariant, string> = {
  primary: colors.primary['500'],
  secondary: colors.primary[100],
};

export const textColor: Record<ButtonVariant, string> = {
  primary: colors.white,
  secondary: colors.primary[500],
};
