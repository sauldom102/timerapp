import type {FC} from 'react';
import {memo} from 'react';
import {Path, Svg} from 'react-native-svg';
import type {IconProps} from './types';

const TimeCircleIcon: FC<IconProps> = ({
  size = 20,
  color = '#9E9E9E',
  ...props
}) => (
  <Svg width={size} height={size} viewBox="0 0 20 20" {...props}>
    <Path
      clipRule="evenodd"
      d="M17.708 10A7.708 7.708 0 0 1 10 17.71 7.708 7.708 0 0 1 2.292 10 7.708 7.708 0 0 1 10 2.292 7.708 7.708 0 0 1 17.708 10Z"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="m12.86 12.452-3.142-1.874V6.54"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default memo(TimeCircleIcon);
