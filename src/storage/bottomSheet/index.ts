import {useMMKVString} from 'react-native-mmkv';
import storage from 'storage/base';

export const KEY_SHOWN_BOTTOM_SHEET = 'shown-bottom-sheet';

export enum BottomSheetName {
  DELETE_TASK = 'delete-task',
  CONFIRM_LOGOUT = 'confirm-logout',
}

export const setShownBottomSheet = (bs: BottomSheetName) => {
  storage.delete(KEY_SHOWN_BOTTOM_SHEET);
  storage.set(KEY_SHOWN_BOTTOM_SHEET, bs);
};

export const getShownBottomSheet = () =>
  storage.getString(KEY_SHOWN_BOTTOM_SHEET) as unknown as BottomSheetName;

export const clearShownBottomSheet = () => {
  setTimeout(() => {
    storage.delete(KEY_SHOWN_BOTTOM_SHEET);
  }, 400);
};

export const useShownBottomSheet = () => {
  const [bottomSheet] = useMMKVString(KEY_SHOWN_BOTTOM_SHEET);

  return bottomSheet as unknown as BottomSheetName | undefined;
};
