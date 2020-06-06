import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {HamburgerNavigation} from '../navigate/drawer';
import {AuthScreens} from '../navigate/auth';
import {AppScreens} from '../navigate/application';

const Stack = createStackNavigator(
  {
    Auth: AuthScreens,
    App: AppScreens,
    Draw: HamburgerNavigation,
  },
  {
    headerMode: 'none',
  },
);

export const AppNavigatorScreens = createAppContainer(Stack);
