import type {FC} from 'react';
import React, {memo} from 'react';
import {ConfirmLogoutBS, DeleteTaskBS} from 'components';
import {BottomSheetName, useShownBottomSheet} from 'storage/bottomSheet';

const BottomSheets: FC = () => {
  const shownBS = useShownBottomSheet();

  return (
    <>
      {shownBS === BottomSheetName.DELETE_TASK && <DeleteTaskBS />}
      {shownBS === BottomSheetName.CONFIRM_LOGOUT && <ConfirmLogoutBS />}
    </>
  );
};

export default memo(BottomSheets);
