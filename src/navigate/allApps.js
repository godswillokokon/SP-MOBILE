import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {AppScreens} from '../navigate/application';
import {HamburgerNavigation} from '../navigate/drawer';

const App = createStackNavigator(
  {
    Applications: AppScreens,
    Hamburger: HamburgerNavigation,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Hamburger',
  },
);
export const Apps = createAppContainer(App);
