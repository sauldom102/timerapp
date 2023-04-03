import type {FC} from 'react';
import {memo} from 'react';
import {Path, Svg} from 'react-native-svg';
import type {IconProps} from './types';

const CurvedProfileIcon: FC<IconProps> = ({
  size = 28,
  color = '#424242',
  ...props
}) => (
  <Svg width={size} height={size} viewBox="0 0 28 28" {...props}>
    <Path
      clipRule="evenodd"
      d="M13.819 25.272c-4.307 0-7.986-.67-7.986-3.355 0-2.684 3.655-5.162 7.986-5.162 4.307 0 7.985 2.454 7.985 5.138 0 2.683-3.655 3.379-7.985 3.379zM13.81 13.036a5.118 5.118 0 10-5.119-5.117 5.1 5.1 0 005.083 5.117h.036z"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default memo(CurvedProfileIcon);
