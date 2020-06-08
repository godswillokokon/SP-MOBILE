import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {AuthScreens} from '../navigate/auth';
import {AuthLoadingScreen} from './AuthLoading';
import {Apps} from './allApps';

const Stack = createStackNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    AuthScreens,
    Apps,
  },
  {
    headerMode: 'none',
    initialRouteName: 'AuthLoading',
  },
);

export const AppNavigatorScreens = createAppContainer(Stack);
