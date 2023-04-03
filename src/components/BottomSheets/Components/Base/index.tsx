/**
 * How to control visibility
 * const sheetRef = useRef<BottomSheet>(null);
 */

import type {RefObject} from 'react';
import React, {forwardRef, memo, useCallback} from 'react';
import {StatusBar} from 'react-native';
import type {BottomSheetBackdropProps} from '@gorhom/bottom-sheet';
import type BottomSheetBase from '@gorhom/bottom-sheet';
import {BottomSheetView} from '@gorhom/bottom-sheet';
import {device} from 'theme/device';
import Backdrop from '../Backdrop';
import useLogic from './logic';
import {Sheet} from './styles';
import type {Props} from './types';

const BS = forwardRef<BottomSheetBase, Props>(
  (
    {
      onPressBackdrop,
      showBackdrop = true,
      openByDefault = false,
      enablePanDownToClose = true,
      children,
    },
    ref,
  ) => {
    const {bottomSheetRef, handleBackdropPress, height, onLayout, noHeight} =
      useLogic({
        onPressBackdrop,
        ref: ref as RefObject<BottomSheetBase>,
      });

    const handleRenderBackdrop = useCallback(
      (props: BottomSheetBackdropProps) =>
        noHeight || !showBackdrop ? null : (
          <Backdrop {...props} onPress={handleBackdropPress} />
        ),
      [noHeight, showBackdrop, handleBackdropPress],
    );

    return (
      <Sheet
        backdropComponent={handleRenderBackdrop}
        backgroundComponent={null}
        topInset={StatusBar.currentHeight ?? 0}
        contentHeight={device.height}
        enableOverDrag={false}
        handleComponent={null}
        index={openByDefault ? 0 : -1}
        ref={bottomSheetRef}
        snapPoints={[height + 1]}
        keyboardBlurBehavior="restore"
        keyboardBehavior="interactive"
        enablePanDownToClose={enablePanDownToClose}>
        <BottomSheetView onLayout={onLayout}>{children}</BottomSheetView>
      </Sheet>
    );
  },
);

export default memo(BS);
