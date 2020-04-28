import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { LandingScreen, LandingTwoScreen, LandingThreeScreen } from '../screens/landing';
import { LoginScreen } from '../screens/login';
import { SignupScreen } from '../screens/signup';
import { ForgotPasswordScreen } from '../screens/forgotPassword';


const Auth = createStackNavigator({
  Landing: LandingScreen,
  LandingTwo: LandingTwoScreen,
  LandingThree: LandingThreeScreen,
  Login: LoginScreen,
  Signup: SignupScreen,
  ForgotPassword: ForgotPasswordScreen,
},
  {
    headerMode: 'none',
  });
export const AuthScreens = createAppContainer(Auth);


