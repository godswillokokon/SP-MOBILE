import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { CategoriesScreen } from '../screens/categories';
import { WalletScreen } from '../screens/wallet';
import { WalletTransationScreen } from '../screens/walletTransactions';


const App = createStackNavigator({
  Categories: CategoriesScreen,
  Wallet: WalletScreen,
  WalletTransation: WalletTransationScreen

},
  {
    headerMode: 'none',
  });
export const AppScreens = createAppContainer(App);