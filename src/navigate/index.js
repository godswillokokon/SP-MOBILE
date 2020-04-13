import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { HomeScreen } from '../screens/home';
// import { Bottom } from '../navigate/bottom';


const HomeNavigator = createStackNavigator({
  Home: HomeScreen,
  // Tab: AppNavigator,
},
  {
    headerMode: 'none',
  });
export const AppNavigatorScreens = createAppContainer(HomeNavigator);


