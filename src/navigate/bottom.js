import React from 'react'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { View } from 'react-native';
import IconF from 'react-native-vector-icons/Feather';
import IconO from 'react-native-vector-icons/Octicons';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import IconA from 'react-native-vector-icons/AntDesign';
import IconI from 'react-native-vector-icons/Ionicons';
//screens
import { AccountScreen } from '../screens/account';
import { HomeScreen } from '../screens/home';
import { PropertiesScreen } from '../screens/properties';
import { NotificationScreen } from '../screens/notification';
import { SearchScreen } from '../screens/search';


export const Bottom = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarAccessibilityLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <IconO style={[{ color: tintColor }]} size={20} name={'home'} />
          </View>),
      },
    },
    Properties: {
      screen: PropertiesScreen,
      navigationOptions: {
        tabBarAccessibilityLabel: 'Properties',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <IconM style={[{ color: tintColor }]} size={20} name={'home-city-outline'} />
          </View>),
      },
    },
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        tabBarAccessibilityLabel: 'Search',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <IconA style={[{ color: tintColor }]} size={20} name={'search1'} />
          </View>),
      },
    },
    Notification: {
      screen: NotificationScreen,
      navigationOptions: {
        tabBarAccessibilityLabel: 'Notification',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <IconI style={[{ color: tintColor }]} size={20} name={'ios-notifications-outline'} />
          </View>),
      },
    },
    Account: {
      screen: AccountScreen,
      navigationOptions: {
        tabBarAccessibilityLabel: 'Account',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <IconF style={[{ color: tintColor }]} size={20} name={'user'} />
          </View>),
      },
    },
  },
  {
    initialRouteName: "Home",
    activeColor: "#00959E",
    inactiveColor: "#8B95A6",
    barStyle: { backgroundColor: '#fff', paddingVertical: 3 },
    labelStyle: { fontSize: 12, },
    shifting: false,
    labeled: true,
    useLayoutAnimation: true,

  }
);