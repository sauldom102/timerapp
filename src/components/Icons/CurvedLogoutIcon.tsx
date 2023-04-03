import type {FC} from 'react';
import {memo} from 'react';
import {Path, Svg, G} from 'react-native-svg';
import type {IconProps} from './types';

const CurvedLogoutIcon: FC<IconProps> = ({
  size = 24,
  color = '#212121',
  ...props
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <G
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round">
      <Path d="M21.791 12.12H9.75M18.864 9.205l2.928 2.916-2.928 2.916M16.36 7.63c-.33-3.58-1.67-4.88-7-4.88-7.101 0-7.101 2.31-7.101 9.25 0 6.94 0 9.25 7.1 9.25 5.33 0 6.67-1.3 7-4.88" />
    </G>
  </Svg>
);

export default memo(CurvedLogoutIcon);
