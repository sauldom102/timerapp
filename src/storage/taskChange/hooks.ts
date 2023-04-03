import {useCallback, useEffect} from 'react';
import {useIsFocused} from '@react-navigation/native';
import {getTaskChange, setTaskChange} from '.';

type Params = {
  refresh: () => Promise<void>;
};

export const useRefreshTaskList = ({refresh}: Params) => {
  const focused = useIsFocused();

  const handleInit = useCallback(async () => {
    const change = getTaskChange();

    if (change) {
      await refresh();
    }

    setTaskChange(false);
  }, [refresh]);

  useEffect(() => {
    if (!focused) {
      return;
    }

    handleInit();
  }, [focused, handleInit]);
};
