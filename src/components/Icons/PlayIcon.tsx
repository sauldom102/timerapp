import type {FC} from 'react';
import {memo} from 'react';
import {Path, Svg} from 'react-native-svg';
import type {IconProps} from './types';

const PlayIcon: FC<IconProps> = ({size = 20, color = '#fff', ...props}) => (
  <Svg width={size} height={size} viewBox="0 0 20 20" {...props}>
    <Path
      d="m14.495 10.871-7.954 4.615C5.866 15.877 5 15.404 5 14.615v-9.23c0-.787.865-1.262 1.541-.87l7.954 4.615a1.003 1.003 0 0 1 0 1.741Z"
      fill={color}
    />
  </Svg>
);

export default memo(PlayIcon);
