import type {FC} from 'react';
import React, {memo} from 'react';
import {useTheme} from 'theme';
import useDebounce from 'utils/hooks/useDebounce';
import {Control} from './styles';
import type {Props} from './types';

const RefreshControl: FC<Props> = ({refreshing = false, onRefresh, style}) => {
  const debouncedRefreshing = useDebounce({
    value: refreshing,
    notDelayIf: true,
    delay: 1500,
  });

  const {colors} = useTheme();

  const color = colors.greyscale[300];

  return (
    <Control
      refreshing={debouncedRefreshing}
      onRefresh={onRefresh}
      color={color}
      style={style}
    />
  );
};

export default memo(RefreshControl);
