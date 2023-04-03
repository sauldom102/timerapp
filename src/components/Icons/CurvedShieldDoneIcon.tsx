import type {FC} from 'react';
import {memo} from 'react';
import {Path, Svg} from 'react-native-svg';
import type {IconProps} from './types';

const CurvedStarIcon: FC<IconProps> = ({
  size = 28,
  color = '#424242',
  ...props
}) => (
  <Svg width={size} height={size} viewBox="0 0 28 28" {...props}>
    <Path
      clipRule="evenodd"
      d="M13.982 25.206c2.724 0 8.95-2.709 8.95-10.181 0-7.471.325-8.056-.393-8.775-.718-.718-4.463-3.041-8.557-3.041S6.143 5.532 5.426 6.25c-.72.72-.395 1.304-.395 8.775 0 7.472 6.228 10.181 8.95 10.181z"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10.95 13.854l2.208 2.21 4.547-4.55"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default memo(CurvedStarIcon);
