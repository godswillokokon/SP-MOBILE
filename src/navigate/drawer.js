import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createAppContainer } from 'react-navigation';
import { DrawerContent } from '../components/drawerContent';

import { HomeScreen } from '../screens/home';
import { Bottom } from '../navigate/bottom';
import { AuthScreens } from '../navigate/auth'



const Drawer = createDrawerNavigator();


const App = () => {
  return (
    <NavigationContainer>
      {/* <RootStackScreen /> */}
      {/* <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}> */}
      <Drawer.Navigator>

        {/* <Drawer.Screen name="HomeDrawer" component={HomeScreen} />
        <Bottom /> */}
        <Drawer.Screen name="Tab" component={Bottom} />
        {/* <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
        <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export const AppDrawer = createAppContainer(App);


