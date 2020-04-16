import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { HomeScreen } from '../screens/home';
import { LandingScreen, LandingTwoScreen, LandingThreeScreen } from '../screens/landing';
import { LoginScreen } from '../screens/login';
// import { Bottom } from '../navigate/bottom';


const HomeNavigator = createStackNavigator({
  // Home: HomeScreen,
  Landing: LandingScreen,
  LandingTwo: LandingTwoScreen,
  LandingThree: LandingThreeScreen,
  Login: LoginScreen
  // Tab: AppNavigator,
},
  {
    headerMode: 'none',
  });
export const AppNavigatorScreens = createAppContainer(HomeNavigator);


