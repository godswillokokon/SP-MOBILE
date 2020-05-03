import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { CategoriesScreen } from '../screens/categories';
import { WalletScreen } from '../screens/wallet';


const App = createStackNavigator({
  Categories: CategoriesScreen,
  Wallet: WalletScreen

},
  {
    headerMode: 'none',
  });
export const AppScreens = createAppContainer(App);