import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';

import {DrawerContent} from '../components/drawerContent';
import {Bottom} from '../navigate/bottom';

export const HamburgerNavigation = createDrawerNavigator(
  {
    Tabs: Bottom,
  },
  {
    initialRouteName: 'Tabs',
    drawerType: 'slide',
    contentComponent: (props) => {
      return (
        <ScrollView>
          <SafeAreaView forceInset={{top: 'always', horizontal: 'never'}}>
            <DrawerContent props={props} />
          </SafeAreaView>
        </ScrollView>
      );
    },
  },
);
