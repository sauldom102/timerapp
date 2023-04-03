import type {FC} from 'react';
import {memo} from 'react';
import {Path, Svg} from 'react-native-svg';
import type {IconProps} from './types';

const PauseIcon: FC<IconProps> = ({size = 20, color = '#fff', ...props}) => (
  <Svg width={size} height={size} viewBox="0 0 20 20" {...props}>
    <Path
      d="M6.875 4.375A1.875 1.875 0 0 1 8.75 6.25v7.5a1.875 1.875 0 1 1-3.75 0v-7.5a1.875 1.875 0 0 1 1.875-1.875Zm6.25 0A1.875 1.875 0 0 1 15 6.25v7.5a1.875 1.875 0 1 1-3.75 0v-7.5a1.875 1.875 0 0 1 1.875-1.875Z"
      fill={color}
    />
  </Svg>
);

export default memo(PauseIcon);
