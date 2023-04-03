import type {FC} from 'react';
import React, {memo} from 'react';
import {icons} from './icons';
import type {Props} from './types';

const Icon: FC<Omit<Props, 'fill'>> = ({name, ...props}) => {
  const IconComponent = icons[name];

  return <IconComponent fill="transparent" {...props} />;
};

export default memo(Icon);
