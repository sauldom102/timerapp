import type {FC} from 'react';
import {memo} from 'react';
import {Path, Svg} from 'react-native-svg';
import type {IconProps} from './types';

const CurvedPlusIcon: FC<IconProps> = ({
  size = 38,
  color = '#fff',
  ...props
}) => (
  <Svg width={size} height={size} viewBox="0 0 38 38" {...props}>
    <Path
      d="M19.061 13.104V25.02M25.024 19.061H13.098"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default memo(CurvedPlusIcon);
