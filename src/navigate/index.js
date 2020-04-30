import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { HamburgerNavigation } from '../navigate/drawer'
import { AuthScreens } from '../navigate/auth'

const Stack = createStackNavigator({
  Auth: AuthScreens,
  Draw: HamburgerNavigation,

},
  {
    headerMode: 'none',
  });

export const AppNavigatorScreens = createAppContainer(Stack);
