import type {IconName} from 'components/Icons/types';

export const NUMBER_PATTERN = /[^0-9]+/g;

export const RIGHT_ICONS: Record<string, IconName> = {
  date: 'lightCalendar',
  select: 'boldArrowDown',
};

export const LEFT_ICONS: Record<string, IconName> = {
  email: 'boldMessage',
  password: 'boldLock',
};
