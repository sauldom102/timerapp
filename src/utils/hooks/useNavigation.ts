import {useCallback} from 'react';
import type {NavigationProp, ParamListBase} from '@react-navigation/native';
import {useNavigation as useBaseNavigation} from '@react-navigation/native';

const useNavigation = <T extends NavigationProp<ParamListBase>>() => {
  const {canGoBack, goBack: baseGoBack, ...rest} = useBaseNavigation<T>();

  const goBack = useCallback(() => {
    if (canGoBack()) {
      baseGoBack();
    }
  }, [canGoBack, baseGoBack]);

  return {
    canGoBack,
    goBack,
    ...rest,
  };
};

export default useNavigation;
