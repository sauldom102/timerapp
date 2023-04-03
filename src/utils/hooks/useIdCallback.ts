import {useCallback} from 'react';

const useIdCallback = <T>(cb?: (id: T) => void, id?: T) => {
  const callback = useCallback(() => {
    if (cb && id) {
      cb(id);
    }
  }, [cb, id]);

  return callback;
};

export default useIdCallback;
