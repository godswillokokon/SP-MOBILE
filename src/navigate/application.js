import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {CategoriesScreen} from '../screens/categories';
import {WalletTransationScreen} from '../screens/walletTransactions';
import {ServicesScreen} from '../screens/services';
import {ServiceScreen} from '../screens/service';
import {ServiceBookingScreen} from '../screens/serviceBooking';
import {SettingsScreen} from '../screens/settings';
import {HouseScreen} from '../screens/house';
import {WalletScreen} from '../screens/wallet';
import {ReservedPropsScreen} from '../screens/reservedProps';
import {BoughtPropsScreen} from '../screens/boughtProps';
import {BeAgentScreen} from '../screens/agent';
const App = createStackNavigator(
  {
    Services: ServicesScreen,
    Categories: CategoriesScreen,
    Service: ServiceScreen,
    House: HouseScreen,
    ServiceBooking: ServiceBookingScreen,
    Settings: SettingsScreen,
    Wallet: WalletScreen,
    WalletTransation: WalletTransationScreen,
    ReservedProps: ReservedPropsScreen,
    BoughtProps: BoughtPropsScreen,
    BeAgent: BeAgentScreen,
  },
  {
    headerMode: 'none',
  },
);
export const AppScreens = createAppContainer(App);
