import type {FC} from 'react';
import {memo} from 'react';
import {Path, Svg} from 'react-native-svg';
import type {IconProps} from './types';

const BoldMessageIcon: FC<IconProps> = ({
  size = 20,
  color = '#9E9E9E',
  ...props
}) => (
  <Svg width={size} height={size} viewBox="0 0 20 20" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.116 2.5a4.214 4.214 0 0 1 4.218 4.208v6.584a4.215 4.215 0 0 1-4.218 4.208H5.884a4.214 4.214 0 0 1-4.217-4.208V6.708A4.209 4.209 0 0 1 5.884 2.5h8.232Zm1.326 5.45.067-.067c.199-.241.199-.591-.01-.833a.7.7 0 0 0-.44-.217.633.633 0 0 0-.468.167l-3.757 3c-.484.4-1.176.4-1.667 0l-3.75-3a.634.634 0 0 0-.833.058.637.637 0 0 0-.06.834l.11.108 3.791 2.958a2.62 2.62 0 0 0 3.258 0l3.759-3.008Z"
      fill={color}
    />
  </Svg>
);

export default memo(BoldMessageIcon);
