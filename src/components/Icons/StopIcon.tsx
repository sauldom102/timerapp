import type {FC} from 'react';
import {memo} from 'react';
import {Path, Svg} from 'react-native-svg';
import type {IconProps} from './types';

const StopIcon: FC<IconProps> = ({size = 24, color = '#BDBDBD', ...props}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path
      d="M7.5 5.25h9a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25v-9A2.25 2.25 0 0 1 7.5 5.25Z"
      fill={color}
    />
  </Svg>
);

export default memo(StopIcon);
