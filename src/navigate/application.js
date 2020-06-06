import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {CategoriesScreen} from '../screens/categories';
import {WalletScreen} from '../screens/wallet';
import {WalletTransationScreen} from '../screens/walletTransactions';
import {ServicesScreen} from '../screens/services';
import {ServiceScreen} from '../screens/service';
import {ServiceBookingScreen} from '../screens/serviceBooking';
import {PropertyScreen} from '../screens/property';
import {AgentScreen} from '../screens/agent';
import {SettingsScreen} from '../screens/settings';

const App = createStackNavigator(
  {
    Categories: CategoriesScreen,
    Wallet: WalletScreen,
    WalletTransation: WalletTransationScreen,
    Services: ServicesScreen,
    Service: ServiceScreen,
    ServiceBooking: ServiceBookingScreen,
    Property: PropertyScreen,
    Agent: AgentScreen,
    Settings: SettingsScreen,
  },
  {
    headerMode: 'none',
  },
);
export const AppScreens = createAppContainer(App);
