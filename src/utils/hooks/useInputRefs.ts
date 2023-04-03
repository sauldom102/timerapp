import type {RefObject} from 'react';
import {useMemo, createRef} from 'react';
import type {TextInput} from 'react-native';

const useInputRefs = (inputNames: string[]) => {
  const inputRefs = useMemo<Record<string, RefObject<TextInput>>>(
    () =>
      inputNames.reduce(
        (all, name) => ({
          ...all,
          [name]: createRef<TextInput>(),
        }),
        {},
      ),
    [inputNames],
  );

  return inputRefs;
};

export default useInputRefs;
