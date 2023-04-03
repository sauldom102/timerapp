import {createRef} from 'react';
import type {NavigationContainerRef, RouteProp} from '@react-navigation/native';
import type {RootParamsList, ScreenName} from 'navigator/types';

export const navigationRef = createRef<NavigationContainerRef<any>>();

export const navigate = <T extends keyof RootParamsList>(
  to: ScreenName,
  params?: RouteProp<RootParamsList, T>['params'],
) => {
  const canNavigate = navigationRef.current?.isReady();
  if (!canNavigate) {
    return;
  }

  navigationRef.current?.navigate(to, params);
};

export const navigateToTaskCreation = () => {
  navigate('CreateNewTask');
};
