import React from 'react';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {View} from 'react-native';
import IconF from 'react-native-vector-icons/Feather';
import IconO from 'react-native-vector-icons/Octicons';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import IconA from 'react-native-vector-icons/AntDesign';
import IconFO from 'react-native-vector-icons/Fontisto';

//screens
import {AccountScreen} from '../screens/account';
import {HomeScreen} from '../screens/home';
import {HousesScreen} from '../screens/houses';
import {LandsScreen} from '../screens/lands';
import {SearchScreen} from '../screens/search';

export const Bottom = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarAccessibilityLabel: 'Home',
        tabBarIcon: ({tintColor}) => (
          <View>
            <IconO style={[{color: tintColor}]} size={20} name={'home'} />
          </View>
        ),
      },
    },
    Houses: {
      screen: HousesScreen,
      navigationOptions: {
        tabBarAccessibilityLabel: 'Houses',
        tabBarIcon: ({tintColor}) => (
          <View>
            <IconM
              style={[{color: tintColor}]}
              size={20}
              name={'home-city-outline'}
            />
          </View>
        ),
      },
    },
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        tabBarAccessibilityLabel: 'Search',
        tabBarIcon: ({tintColor}) => (
          <View>
            <IconA style={[{color: tintColor}]} size={20} name={'search1'} />
          </View>
        ),
      },
    },
    Lands: {
      screen: LandsScreen,
      navigationOptions: {
        tabBarAccessibilityLabel: 'Lands',
        tabBarIcon: ({tintColor}) => (
          <View>
            <IconFO style={[{color: tintColor}]} size={20} name={'island'} />
          </View>
        ),
      },
    },
    Account: {
      screen: AccountScreen,
      navigationOptions: {
        tabBarAccessibilityLabel: 'Account',
        tabBarIcon: ({tintColor}) => (
          <View>
            <IconF style={[{color: tintColor}]} size={20} name={'user'} />
          </View>
        ),
      },
    },
  },
  {
    initialRouteName: 'Home',
    activeColor: '#fff',
    inactiveColor: '#3A3A3A',
    barStyle: {backgroundColor: '#00959E', paddingVertical: 3},
    labelStyle: {fontSize: 12},
    shifting: false,
    labeled: true,
    useLayoutAnimation: true,
  },
);
