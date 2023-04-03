import type {FC} from 'react';
import {memo} from 'react';
import {Path, Svg} from 'react-native-svg';
import type {IconProps} from './types';

const CheckIcon: FC<IconProps> = ({size = 24, color = '#BDBDBD', ...props}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path
      d="m20.483 8.034-9.64 9.64a1.747 1.747 0 0 1-1.258.506c-.446 0-.893-.162-1.238-.507l-4.83-4.81a1.788 1.788 0 0 1 0-2.516c.69-.69 1.827-.69 2.517 0L9.585 13.9l8.381-8.382c.69-.69 1.827-.69 2.517 0 .69.71.69 1.827 0 2.517"
      fill={color}
    />
  </Svg>
);

export default memo(CheckIcon);
