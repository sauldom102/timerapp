import type {FC} from 'react';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import type {CompositeScreenProps} from '@react-navigation/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootParamsList {}
  }
}

type TaskDetailParams = {
  taskId: string;
};

export type RootParamsList = {
  SignUp: undefined;
  Login: undefined;
  Tabs: undefined;
  CreateNewTask: undefined;
  FillProfile: undefined;
  TaskDetail: TaskDetailParams;
  AllTodayTasks: undefined;
};

export type RootTabParamList = {
  Home: undefined;
  Task: undefined;
  Stats: undefined;
  Profile: undefined;
};

export type ScreensParamsList = RootParamsList & RootTabParamList;

export type ScreenName = keyof ScreensParamsList;

export type ScreenComponent<S extends ScreenName> = FC<
  NativeStackScreenProps<ScreensParamsList, S>
>;

export type MainStackScreenProps<Screen extends keyof RootParamsList> =
  NativeStackScreenProps<RootParamsList, Screen>;

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootParamsList>
  >;

export type Props = {};
