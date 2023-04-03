import type {FC} from 'react';
import React, {memo, useCallback} from 'react';
import type {ToastConfig, ToastConfigParams} from 'react-native-toast-message';
import Toast from 'react-native-toast-message';
import {ICON_TEXT_COLORS} from './constants';
import {Toast as BaseToast, Icon} from './styles';
import type {Props, LeadingIconProps, Type} from './types';

const Snackbar: FC<Props> = () => {
  const LeadingIcon = useCallback(
    ({icon, size, type}: LeadingIconProps) =>
      icon ? (
        <Icon name={icon} size={size} color={ICON_TEXT_COLORS[type]} />
      ) : null,
    [],
  );

  const toastConfig = Object.keys(ICON_TEXT_COLORS).reduce(
    (obj, type) => ({
      ...obj,
      [type]: (params: ToastConfigParams<any>) => (
        <BaseToast
          {...params}
          text1NumberOfLines={4}
          renderLeadingIcon={() => (
            <LeadingIcon
              icon={params.props.icon}
              size={params.props.iconSize}
              type={type as Type}
            />
          )}
          type={type as Type}
        />
      ),
    }),
    {} as unknown as ToastConfig,
  );

  return <Toast config={toastConfig} />;
};

export default memo(Snackbar);
