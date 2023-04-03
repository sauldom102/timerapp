import type {FC} from 'react';
import {memo} from 'react';
import {Path, Svg} from 'react-native-svg';
import type {IconProps} from './types';

const CloseIcon: FC<IconProps> = ({size = 24, color = '#212121', ...props}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path
      d="M6.447 17.578 17.053 6.97m0 10.607L6.447 6.97"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default memo(CloseIcon);
