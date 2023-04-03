import type {FC} from 'react';
import {memo} from 'react';
import {Path, Svg} from 'react-native-svg';
import type {IconProps} from './types';

const LightCalendarIcon: FC<IconProps> = ({
  size = 24,
  color = '#9E9E9E',
  ...props
}) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="transparent"
    {...props}>
    <Path
      d="M3.093 9.404h17.824m-4.475 3.906h.01m-4.447 0h.009m-4.456 0h.01m8.874 3.886h.01m-4.447 0h.009m-4.456 0h.01M16.043 2v3.29M7.966 2v3.29m8.272-1.71H7.771C4.834 3.58 3 5.214 3 8.221v9.05C3 20.326 4.834 22 7.771 22h8.458C19.175 22 21 20.355 21 17.348V8.222c.01-3.007-1.816-4.643-4.762-4.643Z"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default memo(LightCalendarIcon);
