import type {FC} from 'react';
import {memo} from 'react';
import {Path, Svg} from 'react-native-svg';
import type {IconProps} from '../types';

const TaskIcon: FC<IconProps> = ({size = 25, color = '#9E9E9E', ...props}) => (
  <Svg width={size} height={size} viewBox="0 0 25 24" {...props}>
    <Path
      d="M3.843 9.404h17.824m-4.475 3.906h.01m-4.447 0h.009m-4.456 0h.01m8.874 3.886h.01m-4.447 0h.009m-4.456 0h.01M16.793 2v3.29M8.716 2v3.29m8.272-1.71H8.521c-2.937 0-4.771 1.635-4.771 4.642v9.05C3.75 20.326 5.584 22 8.521 22h8.458c2.946 0 4.771-1.645 4.771-4.652V8.222c.01-3.007-1.816-4.643-4.762-4.643Z"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default memo(TaskIcon);
