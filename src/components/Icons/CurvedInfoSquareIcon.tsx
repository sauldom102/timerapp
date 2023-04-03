import type {FC} from 'react';
import {memo} from 'react';
import {Path, Svg} from 'react-native-svg';
import type {IconProps} from './types';

const CurvedInfoSquareIcon: FC<IconProps> = ({
  size = 28,
  color = '#424242',
  ...props
}) => (
  <Svg width={size} height={size} viewBox="0 0 28 28" {...props}>
    <Path
      clipRule="evenodd"
      d="M24.792 14c0 8.093-2.699 10.791-10.792 10.791S3.21 22.093 3.21 13.999C3.209 5.906 5.907 3.208 14 3.208s10.792 2.698 10.792 10.791z"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14 18.544V14M14.005 9.917h-.01"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default memo(CurvedInfoSquareIcon);
