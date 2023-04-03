import type {FC} from 'react';
import {memo} from 'react';
import {Path, Svg} from 'react-native-svg';
import type {IconProps} from './types';

const MoreCircleIcon: FC<IconProps> = ({
  size = 28,
  color = '#212121',
  ...props
}) => (
  <Svg width={size} height={size} viewBox="0 0 28 28" {...props}>
    <Path
      clipRule="evenodd"
      d="M14 3.208c5.96 0 10.792 4.831 10.792 10.792 0 5.959-4.832 10.791-10.792 10.791S3.21 19.96 3.21 14C3.209 8.04 8.04 3.208 14 3.208z"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M18.596 14.015h.01M13.919 14.015h.01M9.242 14.015h.01"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default memo(MoreCircleIcon);
