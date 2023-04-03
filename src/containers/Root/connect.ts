import {useCallback, useEffect, useState} from 'react';
import * as SplashScreen from 'expo-splash-screen';
import {initI18n} from 'i18n';
import {noop} from 'lodash';

SplashScreen.preventAutoHideAsync();

const useConnect = () => {
  const [ready, setReady] = useState(false);

  const handleInit = useCallback(async () => {
    try {
      await initI18n();
    } catch {
      noop();
    } finally {
      setReady(true);
    }
  }, []);

  const handleReady = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, []);

  useEffect(() => {
    handleInit();
  }, [handleInit]);

  return {ready, handleReady};
};

export default useConnect;
