import type {FC} from 'react';
import {memo} from 'react';
import {Path, Svg} from 'react-native-svg';
import type {IconProps} from '../types';

const StatsIcon: FC<IconProps> = ({size = 25, color = '#9E9E9E', ...props}) => (
  <Svg width={size} height={size} viewBox="0 0 25 24" {...props}>
    <Path
      d="M7.621 10.202v6.86M12.288 6.919v10.143M16.878 13.827v3.235"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      clipRule="evenodd"
      d="M16.936 2H7.564C4.298 2 2.25 4.312 2.25 7.585v8.83C2.25 19.688 4.288 22 7.564 22h9.372c3.276 0 5.314-2.312 5.314-5.585v-8.83C22.25 4.312 20.212 2 16.936 2Z"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default memo(StatsIcon);
