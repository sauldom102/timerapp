import type {FC} from 'react';
import {memo} from 'react';
import {Icons} from 'components';
import {colors} from 'theme/colors';
import {iconNames} from './constants';
import type {Props} from './types';

const Icon: FC<Props> = ({icon, focused}) => {
  const color = focused ? colors.primary[500] : colors.greyscale[500];
  const iconName = iconNames[icon][focused ? 1 : 0];

  return <Icons name={iconName} color={color} />;
};
export default memo(Icon);
