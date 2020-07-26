import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {CategoriesScreen} from '../screens/categories';
import {WalletTransationScreen} from '../screens/walletTransactions';
import {ServicesScreen} from '../screens/services';
import {ServiceScreen} from '../screens/service';
import {ServiceBookingScreen} from '../screens/serviceBooking';
import {AgentScreen} from '../screens/agent';
import {SettingsScreen} from '../screens/settings';
import {HouseScreen} from '../screens/house';
import {WalletScreen} from '../screens/wallet';

const App = createStackNavigator(
  {
    Services: ServicesScreen,
    House: HouseScreen,
    Categories: CategoriesScreen,
    WalletTransation: WalletTransationScreen,
    Service: ServiceScreen,
    ServiceBooking: ServiceBookingScreen,
    Agent: AgentScreen,
    Settings: SettingsScreen,
    Wallet: WalletScreen,
  },
  {
    headerMode: 'none',
  },
);
export const AppScreens = createAppContainer(App);
