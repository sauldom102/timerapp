import type {Ref} from 'react';
import {useCallback, useRef} from 'react';
import type BottomSheet from '@gorhom/bottom-sheet';
import {clearShownBottomSheet} from 'storage';
import useCombineRef from '../hooks/useCombineRef';

const useCloseBottomSheet = (forwardedRef: Ref<BottomSheet>) => {
  const localRef = useRef<BottomSheet>(null);

  const ref = useCombineRef(forwardedRef, localRef);

  const handleClose = useCallback(() => {
    localRef?.current?.close();
    clearShownBottomSheet();
  }, []);

  return {
    handleClose,
    ref,
  };
};

export default useCloseBottomSheet;
