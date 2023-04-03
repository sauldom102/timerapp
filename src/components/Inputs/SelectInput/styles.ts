import {View} from 'react-native';
import styled from 'styled-components/native';
import type {PickerStyle} from 'react-native-picker-select';
import theme from 'theme';

export const Container = styled(View)``;

export const pickerStyle: PickerStyle = {
  inputIOSContainer: {
    position: 'absolute',
    width: '100%',
    height: 56,
    opacity: 0,
  },
  modalViewBottom: {
    backgroundColor: theme.colors.white,
  },
  modalViewMiddle: {
    backgroundColor: theme.colors.white,
  },
  done: {
    color: theme.colors.primary[500],
  },
  chevronContainer: {
    opacity: 0,
  },
  viewContainer: {
    position: 'absolute',
    top: 32,
    bottom: 0,
    left: 0,
    right: 0,
  },
  inputAndroid: {
    position: 'absolute',
    width: '100%',
    height: 56,
    opacity: 0,
  },
};
