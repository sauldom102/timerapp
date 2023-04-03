import type {FC} from 'react';
import {memo} from 'react';
import {Path, Svg} from 'react-native-svg';
import type {IconProps} from '../types';

const FocusedStatsIcon: FC<IconProps> = ({
  size = 25,
  color = '#FF575C',
  ...props
}) => (
  <Svg width={size} height={size} viewBox="0 0 25 24" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.58 2h9.34c3.4 0 5.32 1.929 5.33 5.33v9.34c0 3.4-1.93 5.33-5.33 5.33H7.58c-3.4 0-5.33-1.93-5.33-5.33V7.33C2.25 3.929 4.18 2 7.58 2Zm4.72 15.86c.43 0 .79-.32.83-.75V6.92a.815.815 0 0 0-.38-.79.84.84 0 0 0-1.28.79v10.19c.05.43.41.75.83.75Zm4.6 0c.42 0 .78-.32.83-.75v-3.28a.839.839 0 0 0-1.28-.79.806.806 0 0 0-.38.79v3.28c.04.43.4.75.83.75Zm-8.43-.75a.827.827 0 0 1-.83.75c-.43 0-.79-.32-.83-.75V10.2a.84.84 0 0 1 .39-.79c.27-.17.61-.17.88 0s.42.479.39.79v6.91Z"
      fill={color}
    />
  </Svg>
);

export default memo(FocusedStatsIcon);
