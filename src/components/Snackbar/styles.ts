import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import BaseIcon from 'components/Icons';
import {BaseToast} from 'react-native-toast-message';
import {COLORS, ICON_TEXT_COLORS} from './constants';
import type {ToastProps, Type} from './types';

const styles = (type: Type) =>
  StyleSheet.create({
    baseText: {
      color: ICON_TEXT_COLORS[type],
      fontSize: 14,
      fontWeight: '400',
      fontFamily: 'Urbanist-SemiBold',
      lineHeight: 18,
      marginTop: 2,
    },
    content: {
      paddingVertical: 8,
      paddingHorizontal: 12,
      justifyContent: 'flex-start',
    },
  });

export const Toast = styled(BaseToast).attrs<ToastProps>(({type}) => ({
  text1Style: styles(type).baseText,
  contentContainerStyle: styles(type).content,
}))<ToastProps>`
  padding-left: 4px;
  margin-top: ${({theme}) => theme.device.safeTop}px;
  border-left-width: 0;
  height: auto;
  min-height: 42px;
  width: ${({theme}) => theme.device.width - 36}px;
  border-radius: 10px;
  align-items: center;
  background-color: ${({type}) => COLORS[type]};
`;

export const Icon = styled(BaseIcon)`
  margin-left: 8px;
`;
