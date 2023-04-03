import 'react-native-gesture-handler';
import {AppRegistry, LogBox} from 'react-native';
import {Root} from './src/containers';
import {name as appName} from './app.json';

LogBox.ignoreAllLogs();

AppRegistry.registerComponent(appName, () => Root);
