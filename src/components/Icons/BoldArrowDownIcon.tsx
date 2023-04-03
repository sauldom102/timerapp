import type {FC} from 'react';
import {memo} from 'react';
import {Path, Svg} from 'react-native-svg';
import type {IconProps} from './types';

const BoldArrowDownIcon: FC<IconProps> = ({
  size = 20,
  color = '#9E9E9E',
  ...props
}) => (
  <Svg width={size} height={size} viewBox="0 0 20 20" {...props}>
    <Path
      d="M9.057 13.859c-.048-.047-.255-.225-.425-.39-1.069-.971-2.819-3.504-3.353-4.83-.086-.201-.267-.71-.279-.982 0-.26.06-.51.182-.746.17-.296.437-.533.753-.663.22-.083.875-.213.887-.213.717-.13 1.883-.202 3.171-.202 1.228 0 2.346.072 3.075.178.011.012.826.142 1.105.284.51.26.827.77.827 1.315v.047c-.012.354-.33 1.1-.34 1.1-.536 1.255-2.2 3.73-3.306 4.724 0 0-.284.28-.461.402-.256.19-.571.284-.887.284-.353 0-.681-.107-.949-.308Z"
      fill={color}
    />
  </Svg>
);

export default memo(BoldArrowDownIcon);
