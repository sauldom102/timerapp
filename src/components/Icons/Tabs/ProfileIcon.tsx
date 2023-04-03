import type {FC} from 'react';
import {memo} from 'react';
import {Path, Svg} from 'react-native-svg';
import type {IconProps} from '../types';

const ProfileIcon: FC<IconProps> = ({
  size = 25,
  color = '#9E9E9E',
  ...props
}) => (
  <Svg width={size} height={size} viewBox="0 0 25 24" {...props}>
    <Path
      clipRule="evenodd"
      d="M12.735 15.346c-3.868 0-7.17.585-7.17 2.926 0 2.342 3.281 2.948 7.17 2.948 3.867 0 7.17-.586 7.17-2.927 0-2.34-3.282-2.947-7.17-2.947Z"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      clipRule="evenodd"
      d="M12.735 12.006A4.596 4.596 0 1 0 8.139 7.41a4.58 4.58 0 0 0 4.563 4.596h.033Z"
      stroke={color}
      strokeWidth={1.429}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default memo(ProfileIcon);
