import {useCallback} from 'react';
import {useMe} from 'api/hooks';
import {BottomSheetName, setShownBottomSheet} from 'storage';

const useConnect = () => {
  const {me} = useMe();

  const fullName = me?.fullName;
  const email = me?.email;

  const handlePressMenuItem = useCallback((itemId: string) => {
    if (itemId === 'logout') {
      setShownBottomSheet(BottomSheetName.CONFIRM_LOGOUT);
    }
  }, []);

  return {fullName, email, handlePressMenuItem};
};

export default useConnect;
