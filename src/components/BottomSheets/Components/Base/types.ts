import type {RefObject} from 'react';
import type BottomSheet from '@gorhom/bottom-sheet';

export type Props = {
  children?: JSX.Element;
  showBackdrop?: boolean;
  openByDefault?: boolean;
  enablePanDownToClose?: boolean;
  onPressBackdrop?: () => void;
};

export type LogicParams = {
  ref: RefObject<BottomSheet>;
  onPressBackdrop?: Props['onPressBackdrop'];
};
