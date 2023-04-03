import type {FC} from 'react';
import {memo} from 'react';
import {Path, Svg} from 'react-native-svg';
import type {IconProps} from './types';

const ResetIcon: FC<IconProps> = ({size = 24, color = '#BDBDBD', ...props}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path
      d="M16.724 5.053a1.2 1.2 0 0 1-1.35 1.984A6 6 0 1 0 18 12a1.2 1.2 0 0 1 2.4 0 8.4 8.4 0 1 1-3.676-6.947Z"
      fill={color}
    />
    <Path
      d="M16.247 15.007a1.202 1.202 0 0 1-1.829-.8 1.2 1.2 0 0 1 .535-1.222l4.179-2.672a1.2 1.2 0 0 1 1.292 2.022l-4.177 2.672Z"
      fill={color}
    />
    <Path
      d="M22.684 14.892a1.2 1.2 0 0 1-2.192.978l-1.81-4.056a1.2 1.2 0 1 1 2.192-.978l1.81 4.056Z"
      fill={color}
    />
  </Svg>
);

export default memo(ResetIcon);
