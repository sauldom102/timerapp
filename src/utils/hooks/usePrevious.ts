import {useRef, useEffect} from 'react';

const usePrevious = <T>(value: T, enabled = true) => {
  const ref = useRef<T>();

  useEffect(() => {
    if (enabled) {
      ref.current = value;
    }
  }, [value, enabled]);

  return ref.current;
};

export default usePrevious;
