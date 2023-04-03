import type {FC} from 'react';
import {memo} from 'react';
import {Path, Svg} from 'react-native-svg';
import type {IconProps} from './types';

const CurvedDeleteIcon: FC<IconProps> = ({
  size = 24,
  color = '#FF575C',
  ...props
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path
      d="M18.89 9.554c0 8.019 1.153 11.644-6.61 11.644-7.765 0-6.587-3.625-6.587-11.644M20.365 6.48H4.215M15.715 6.48s.528-3.766-3.426-3.766c-3.953 0-3.425 3.766-3.425 3.766"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default memo(CurvedDeleteIcon);
