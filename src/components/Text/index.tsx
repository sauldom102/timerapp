import type {FC} from 'react';
import React, {memo, forwardRef} from 'react';
import type {Text as NativeText} from 'react-native';
import {Text as BaseText} from './styles';
import type {Props} from './types';

const Text: FC<Props> = forwardRef<NativeText, Props>(
  ({family, style, ...rest}, ref) => (
    <BaseText
      testID="text"
      family={family}
      style={[
        family
          ? {
              fontFamily: family,
            }
          : {},
        style,
      ]}
      ref={ref}
      {...rest}
    />
  ),
);

export default memo(Text);
