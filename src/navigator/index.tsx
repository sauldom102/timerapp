import type {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Snackbar} from 'components';
import {
  AllTodayTasks,
  CreateNewTask,
  FillProfile,
  SignUp,
  Tabs,
  TaskDetail,
} from 'containers';
import Login from 'containers/Auth/Login';
import BottomSheets from './BottomSheets';
import useConnect from './connect';
import {
  generalStackScreenOptions,
  modalStackScreenOptions,
  rootStackScreenOptions,
} from './constants';
import type {RootParamsList} from './types';

const {Navigator, Group, Screen} = createNativeStackNavigator<RootParamsList>();

const AppNavigator: FC = () => {
  const {logged, onboarded} = useConnect();

  return (
    <>
      <Navigator screenOptions={rootStackScreenOptions}>
        {logged ? (
          <Group screenOptions={generalStackScreenOptions}>
            {onboarded ? (
              <>
                <Screen name="Tabs" component={Tabs} />
                <Screen name="TaskDetail" component={TaskDetail} />
                <Screen name="AllTodayTasks" component={AllTodayTasks} />
              </>
            ) : (
              <Screen name="FillProfile" component={FillProfile} />
            )}
          </Group>
        ) : (
          <Group screenOptions={generalStackScreenOptions}>
            <Screen name="Login" component={Login} />
            <Screen name="SignUp" component={SignUp} />
          </Group>
        )}
        <Group screenOptions={modalStackScreenOptions}>
          <Screen name="CreateNewTask" component={CreateNewTask} />
        </Group>
      </Navigator>
      <Snackbar />
      <BottomSheets />
    </>
  );
};

export default AppNavigator;
