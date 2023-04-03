import type {FC} from 'react';
import {memo} from 'react';
import {Defs, LinearGradient, Path, Rect, Stop, Svg} from 'react-native-svg';
import type {IconProps} from './types';

const LogoIcon: FC<IconProps> = ({size = 32, ...props}) => (
  <Svg width={size} height={size} viewBox="0 0 32 32" {...props}>
    <Rect width={32} height={32} rx={12} fill="url(#a)" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.682 8.345c2.287.728 4.12 2.748 4.648 5.124.231 1.04.163 2.6-.159 3.62-.472 1.498-1.654 3.006-2.997 3.822-1.24.754-3.038 1.179-4.27 1.01a.64.64 0 0 1-.553-.635V19.4c0-.345-.002-.646-.003-.907-.008-1.06.615-1.108 1.654-1.313a2.31 2.31 0 0 0 .917-.404c1.223-.887 1.154-2.88-.13-3.694-.276-.175-.686-.35-.91-.388-.904-.153-1.965.4-2.4 1.253-.2.394-.213.654-.214 4.304 0 1.296.039 2.447.033 3.202a3.262 3.262 0 0 1-.515 1.706 6.054 6.054 0 0 1-.766.98c-.578.592-1.627.928-3.316.928-.068 0-.104-1.994-.1-5.602.006-6.221.004-6.201.735-7.695.583-1.192 1.839-2.428 3.069-3.02 1.744-.84 3.489-.974 5.277-.405Z"
      fill="#fff"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={32}
        y1={32}
        x2={-6.077}
        y2={20.96}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#FF575C" />
        <Stop offset={1} stopColor="#FF8285" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default memo(LogoIcon);
