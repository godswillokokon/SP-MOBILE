import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer'

import { DrawerContent } from '../components/drawerContent';
import { Bottom } from '../navigate/bottom';

export const HamburgerNavigation = createDrawerNavigator(
  {
    Tabs: Bottom,
  },
  {
    initialRouteName: 'Tabs',
    contentComponent: props => {
      return (
        <ScrollView>
          <SafeAreaView
            forceInset={{ top: 'always', horizontal: 'never' }}
          >
            {/* <Text
              onPress={() => {
                props.navigation.navigate('Account');
                props.navigation.closeDrawer();
              }}
            >
              Account
                    </Text>
            <Text
              onPress={() => {
                props.navigation.navigate('Notification');
                props.navigation.closeDrawer();
              }}
            >
              Notification
                    </Text> */}
            <DrawerContent />
          </SafeAreaView>
        </ScrollView>
      )
    }
  }
);