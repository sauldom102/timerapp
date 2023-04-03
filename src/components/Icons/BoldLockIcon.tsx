import type {FC} from 'react';
import {memo} from 'react';
import {Path, Svg} from 'react-native-svg';
import type {IconProps} from './types';

const BoldLockIcon: FC<IconProps> = ({
  size = 20,
  color = '#9E9E9E',
  ...props
}) => (
  <Svg width={size} height={size} viewBox="0 0 20 20" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.602 6.163v1.278c1.435.448 2.481 1.747 2.481 3.3v4.113c0 1.922-1.593 3.48-3.556 3.48H6.474c-1.965 0-3.558-1.558-3.558-3.48V10.74c0-1.552 1.047-2.85 2.482-3.299V6.163c.008-2.484 2.066-4.496 4.59-4.496 2.556 0 4.614 2.012 4.614 4.496Zm-4.598-3.047c1.719 0 3.116 1.366 3.116 3.047v1.098H6.88V6.147c.008-1.673 1.405-3.031 3.124-3.031Zm.737 10.596c0 .406-.33.73-.745.73a.73.73 0 0 1-.737-.73v-1.838c0-.398.33-.72.737-.72.415 0 .745.322.745.72v1.838Z"
      fill={color}
    />
  </Svg>
);

export default memo(BoldLockIcon);
