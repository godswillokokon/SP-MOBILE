import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {CategoriesScreen} from '../screens/categories';
import {WalletTransationScreen} from '../screens/walletTransactions';
import {ServicesScreen} from '../screens/services';
import {ServiceScreen} from '../screens/service';
import {ServiceBookingScreen} from '../screens/serviceBooking';
import {AgentScreen} from '../screens/agent';
import {SettingsScreen} from '../screens/settings';
import {PropertyScreen} from '../screens/property';

const App = createStackNavigator(
  {
    Property: PropertyScreen,
    Categories: CategoriesScreen,
    WalletTransation: WalletTransationScreen,
    Services: ServicesScreen,
    Service: ServiceScreen,
    ServiceBooking: ServiceBookingScreen,
    Agent: AgentScreen,
    Settings: SettingsScreen,
  },
  {
    headerMode: 'none',
  },
);
export const AppScreens = createAppContainer(App);
