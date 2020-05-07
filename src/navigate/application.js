import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { CategoriesScreen } from '../screens/categories';
import { WalletScreen } from '../screens/wallet';
import { WalletTransationScreen } from '../screens/walletTransactions';
import { ServicesScreen } from '../screens/services'
import { ServiceScreen } from '../screens/service';
import { ServiceBookingScreen } from '../screens/serviceBooking';
import { PropertyScreen } from '../screens/property';


const App = createStackNavigator({
  Categories: CategoriesScreen,
  Wallet: WalletScreen,
  WalletTransation: WalletTransationScreen,
  Services: ServicesScreen,
  Service: ServiceScreen,
  ServiceBooking: ServiceBookingScreen,
  Property: PropertyScreen

},
  {
    headerMode: 'none',
  });
export const AppScreens = createAppContainer(App);