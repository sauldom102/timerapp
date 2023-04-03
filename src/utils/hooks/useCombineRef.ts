import type {MutableRefObject, LegacyRef, RefCallback} from 'react';

export default function useCombineRef<T = unknown>(
  ...refs: Array<MutableRefObject<T> | LegacyRef<T> | undefined>
): RefCallback<T> {
  return value => {
    refs.forEach(ref => {
      if (typeof ref === 'function') {
        ref(value);
      } else if (ref != null) {
        // eslint-disable-next-line no-param-reassign
        (ref as MutableRefObject<T | null>).current = value;
      }
    });
  };
}
