import type {FC} from 'react';
import type {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import type {RootTabParamList} from 'navigator/types';
import {navigateToTaskCreation} from 'services';
import {TabBarBottom} from './Components';
import {tabStackScreenOptions} from './constants';
import {Home, Task, Stats, Profile} from './Screens';

const {Navigator, Screen} = createBottomTabNavigator<RootTabParamList>();

const tabBar = (props: BottomTabBarProps) => (
  <TabBarBottom onPressAction={navigateToTaskCreation} {...props} />
);

export const Tabs: FC = () => (
  <Navigator
    tabBar={tabBar}
    initialRouteName="Home"
    screenOptions={tabStackScreenOptions}>
    <Screen name="Home" component={Home} />
    <Screen name="Task" component={Task} />
    <Screen name="Stats" component={Stats} />
    <Screen name="Profile" component={Profile} />
  </Navigator>
);
