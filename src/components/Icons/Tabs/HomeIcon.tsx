import type {FC} from 'react';
import {memo} from 'react';
import {Path, Svg} from 'react-native-svg';
import type {IconProps} from '../types';

const HomeIcon: FC<IconProps> = ({size = 25, color = '#9E9E9E', ...props}) => (
  <Svg width={size} height={size} viewBox="0 0 25 24" {...props}>
    <Path
      d="M9.407 20.771v-3.066c0-.78.636-1.414 1.424-1.42h2.886c.792 0 1.433.636 1.433 1.42v3.076c0 .662.534 1.204 1.203 1.219h1.924c1.918 0 3.473-1.54 3.473-3.438v0-8.724a2.44 2.44 0 0 0-.962-1.905l-6.58-5.248a3.18 3.18 0 0 0-3.945 0L3.712 7.943a2.42 2.42 0 0 0-.962 1.904v8.715C2.75 20.46 4.305 22 6.223 22h1.924c.685 0 1.241-.55 1.241-1.229v0"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default memo(HomeIcon);
