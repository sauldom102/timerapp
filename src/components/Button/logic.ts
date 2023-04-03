import {useCallback, useState} from 'react';
import {useDebounce, useTimeout} from 'utils';
import type {LogicParams} from './types';

const useLogic = ({
  onPress,
  loading: initialLoading = false,
  enabled,
}: LogicParams) => {
  const [loading, setLoading] = useState(false);

  const {setTimeout} = useTimeout();

  const debouncedLoading = useDebounce({
    value: loading || initialLoading,
    delay: 1500,
    notDelayIf: true,
  });

  const handlePress = useCallback(async () => {
    if (!onPress || !enabled) {
      return;
    }

    let timeout: ReturnType<typeof setTimeout> | undefined;
    try {
      timeout = setTimeout(() => {
        setLoading(true);
      }, 500);
      await onPress();
      clearTimeout(timeout);
    } finally {
      if (timeout) {
        clearTimeout(timeout);
      }
      setLoading(false);
    }
  }, [enabled, setTimeout, onPress]);

  return {
    handlePress,
    loading: debouncedLoading,
  };
};

export default useLogic;
