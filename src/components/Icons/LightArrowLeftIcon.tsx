import type {FC} from 'react';
import {memo} from 'react';
import {Path, Svg} from 'react-native-svg';
import type {IconProps} from './types';

const LightArrowLeftIcon: FC<IconProps> = ({
  size = 28,
  color = '#212121',
  ...props
}) => (
  <Svg width={size} height={size} viewBox="0 0 28 28" {...props}>
    <Path
      d="M23.333 14.32c0 .443-.329.81-.756.867l-.119.008h-17.5a.875.875 0 0 1-.118-1.742l.118-.008h17.5c.484 0 .875.392.875.875Z"
      fill={color}
    />
    <Path
      d="M12.634 20.729a.875.875 0 0 1-1.137 1.324l-.098-.084-7.058-7.028a.875.875 0 0 1-.085-1.142l.085-.098 7.058-7.03a.875.875 0 0 1 1.32 1.143l-.085.098-6.435 6.409 6.435 6.408Z"
      fill={color}
    />
  </Svg>
);

export default memo(LightArrowLeftIcon);
