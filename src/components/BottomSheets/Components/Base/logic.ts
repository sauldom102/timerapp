import {useCallback} from 'react';
import {useLayout} from '@react-native-community/hooks';
import {clearShownBottomSheet} from 'storage';
import {useCloseBottomSheet} from 'utils';
import type {LogicParams} from './types';

const useLogic = ({onPressBackdrop, ref}: LogicParams) => {
  const {onLayout, height} = useLayout();

  const {ref: bottomSheetRef, handleClose} = useCloseBottomSheet(ref);

  const noHeight = height === 0;

  const handleBackdropPress = useCallback(() => {
    clearShownBottomSheet();
    if (onPressBackdrop) {
      onPressBackdrop();
    } else {
      handleClose();
    }
  }, [onPressBackdrop, handleClose]);

  return {
    bottomSheetRef,
    handleBackdropPress,
    noHeight,
    height,
    onLayout,
  };
};

export default useLogic;
