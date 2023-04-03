import {colors} from 'theme/colors';
import type {Type} from './types';

export const COLORS: Record<Type, string> = {
  success: colors.green,
  info: colors.alertsAndStatus.info,
  warning: colors.alertsAndStatus.warning,
  error: colors.alertsAndStatus.error,
};

export const ICON_TEXT_COLORS: Record<Type, string> = {
  success: colors.white,
  info: colors.white,
  warning: colors.greyscale[900],
  error: colors.white,
};
