import React from 'react';
import { View, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch
} from 'react-native-paper';
import {
  DrawerContentScrollView,
  DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export function DrawerContent(props) {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  }

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={{ flex: 1, }}>
          <View style={{ flex: 1, top: -4, }}>
            <ImageBackground source={{ uri: 'https://res.cloudinary.com/ogcodes/image/upload/v1588292643/drawer_head.png' }} style={{
              height: 150,
            }}>
              <View style={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                position: 'absolute',
                width: Dimensions.get('window').width,
                height: 150,
              }} />
              <View style={{ alignSelf: 'center', flex: 1, justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row' }}>
                  <Avatar.Image
                    source={{
                      uri: 'https://res.cloudinary.com/ogcodes/image/upload/v1581349441/e4i61gkcr7hvixpaqkgb.jpg'
                    }}
                    size={71}
                  />
                  <View style={{ alignSelf: 'center', marginLeft: 10 }}>
                    <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#fff' }}>Godswill Effiong Okokon</Text>
                    <Text style={{ fontSize: 12, color: '#fff' }}>Real estate investor</Text>
                  </View>
                </View>


              </View>
            </ImageBackground>
          </View>
          <View style={{ flex: 1, backgroundColor: 'red', }}>

          </View>
          <View style={{ flex: 1, backgroundColor: 'blue', }}>

          </View>
          <Drawer.Section title="Some title">
            <Drawer.Item
              label="First Item"

            // onPress={() => { this.setState({ : 'first' }); }}
            />
            <Drawer.Item
              label="Second Item"

            // onPress={() => { this.setState({ active: 'second' }); }}
            />
          </Drawer.Section>

        </View>
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});