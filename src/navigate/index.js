import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Bottom } from '../navigate/bottom';
import { AppDrawer } from '../navigate/drawer'
import { AuthScreens } from '../navigate/auth'

const Home = createStackNavigator({
  Auth: AuthScreens,
  Draw: AppDrawer,
  Tab: Bottom
},
  {
    headerMode: 'none',
  });
export const AppNavigatorScreens = createAppContainer(Home);


// import { createStackNavigator } from 'react-navigation-stack';
// import { AuthScreens } from './auth';
// import { HomeNavigator } from './drawer';
// // import { AppRoute } from './app-routes';

// const Stack = createStackNavigator();

// export const AppNavigatorScreens = (props) => (
//   <Stack.Navigator >
//     <Stack.Screen name={'Auth'} component={AuthScreens} />
//     <Stack.Screen name={'App'} component={HomeNavigator} />
//   </Stack.Navigator>
// );