import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { LandingScreen, LandingTwoScreen, LandingThreeScreen } from '../screens/landing';
import { LoginScreen } from '../screens/login';
import { SignupScreen } from '../screens/signup';
import { HomeScreen } from '../screens/home';
// import { Bottom } from '../navigate/bottom';


const HomeNavigator = createStackNavigator({
  Landing: LandingScreen,
  LandingTwo: LandingTwoScreen,
  LandingThree: LandingThreeScreen,
  Login: LoginScreen,
  Signup: SignupScreen
  // Tab: AppNavigator,
},
  {
    headerMode: 'none',
  });
export const AppNavigatorScreens = createAppContainer(HomeNavigator);


