import type {FC} from 'react';
import {memo} from 'react';
import {Path, Svg} from 'react-native-svg';
import type {IconProps} from '../types';

const FocusedHomeIcon: FC<IconProps> = ({
  size = 25,
  color = '#FF575C',
  ...props
}) => (
  <Svg width={size} height={size} viewBox="0 0 25 24" {...props}>
    <Path
      d="M9.385 20.773v-3.057c0-.78.637-1.414 1.423-1.414h2.875c.377 0 .74.15 1.006.414.267.265.417.625.417 1v3.057c-.002.325.126.637.356.867.23.23.544.36.87.36h1.962a3.46 3.46 0 0 0 2.443-1 3.41 3.41 0 0 0 1.013-2.422V9.867c0-.735-.328-1.431-.895-1.902l-6.671-5.29a3.097 3.097 0 0 0-3.949.072L3.717 7.965a2.474 2.474 0 0 0-.967 1.902v8.702C2.75 20.464 4.297 22 6.206 22h1.916c.68 0 1.231-.544 1.236-1.218l.027-.009Z"
      fill={color}
    />
  </Svg>
);

export default memo(FocusedHomeIcon);
