import {useCallback, useEffect, useRef} from 'react';

const useTimeout = () => {
  const timeout = useRef<ReturnType<typeof setTimeout>>();

  useEffect(
    () => () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    },
    [],
  );

  const customSetTimeout = useCallback((cb: () => void, time = 250) => {
    timeout.current = setTimeout(cb, time);
    return timeout.current;
  }, []);

  return {
    setTimeout: customSetTimeout,
  };
};

export default useTimeout;
