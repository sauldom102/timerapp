import type {FC} from 'react';
import {memo} from 'react';
import {Path, Svg} from 'react-native-svg';
import type {IconProps} from '../types';

const FocusedProfileIcon: FC<IconProps> = ({
  size = 25,
  color = '#FF575C',
  ...props
}) => (
  <Svg width={size} height={size} viewBox="0 0 25 24" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.044 7.291a5.274 5.274 0 0 1-5.294 5.292 5.275 5.275 0 0 1-5.294-5.292A5.274 5.274 0 0 1 12.75 2a5.273 5.273 0 0 1 5.294 5.291ZM12.75 22c-4.338 0-8-.705-8-3.425 0-2.721 3.685-3.401 8-3.401 4.339 0 8 .705 8 3.425 0 2.721-3.685 3.401-8 3.401Z"
      fill={color}
    />
  </Svg>
);

export default memo(FocusedProfileIcon);
