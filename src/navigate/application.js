import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { CategoriesScreen } from '../screens/categories';


const App = createStackNavigator({
  Categories: CategoriesScreen,

},
  {
    headerMode: 'none',
  });
export const AppScreens = createAppContainer(App);