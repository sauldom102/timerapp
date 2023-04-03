import {useState, useEffect} from 'react';

type Params<T> = {
  value: T;
  delay: number;
  notDelayIf?: T;
};

const useDebounce = <T>({value, delay, notDelayIf}: Params<T>) => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  useEffect(() => {
    let handler: NodeJS.Timeout | undefined;

    if (value !== notDelayIf) {
      handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
    } else {
      setDebouncedValue(value);
    }

    return () => {
      if (handler) {
        clearTimeout(handler);
      }
    };
  }, [delay, value, notDelayIf]);

  return debouncedValue;
};

export default useDebounce;
