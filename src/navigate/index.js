import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {HamburgerNavigation} from '../navigate/drawer';
import {AuthScreens} from '../navigate/auth';
import {AppScreens} from '../navigate/application';
import {AuthLoadingScreen} from './AuthLoading';

const Stack = createStackNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    Auth: AuthScreens,
    App: AppScreens,
    Draw: HamburgerNavigation,
  },
  {
    headerMode: 'none',
    initialRouteName: 'AuthLoading',
  },
);

export const AppNavigatorScreens = createAppContainer(Stack);
