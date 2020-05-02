import React from 'react';
import { View, StyleSheet, ImageBackground, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
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

import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import IconM from 'react-native-vector-icons/MaterialIcons';
import IconF from 'react-native-vector-icons/FontAwesome';
import IconA from 'react-native-vector-icons/AntDesign';
import IconS from 'react-native-vector-icons/SimpleLineIcons';
import IconI from 'react-native-vector-icons/Ionicons';
import IconE from 'react-native-vector-icons/Entypo';


export function DrawerContent() {

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
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
          <View style={{
            flex: 1, width: Dimensions.get('window').width, height: Dimensions.get('window').height - 250,
            flexDirection: 'column',
          }}>

            <View style={{ flex: 1, width: Dimensions.get('window').width, }}>
              <Text style={{ marginTop: 20, marginLeft: 20, fontSize: 12, color: '#828282' }}>
                General
              </Text>
              <View style={{
                marginTop: 10, marginLeft: 35,
                height: 200,
                width: 210
              }}>
                <TouchableOpacity style={{ flexDirection: 'row', marginVertical: 5 }}>

                  <View style={{ flexDirection: 'row', flex: 17, alignItems: 'center' }}>
                    <IconMC name='home-city-outline' color='#828282' size={18} style={{}} />
                    <Text style={{ marginLeft: 10, fontSize: 15, color: '#3A3A3A' }}>Properties</Text>
                  </View>

                  <IconF name='angle-right' color='#00959E' size={25} style={{ alignSelf: 'flex-end', flex: 1 }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row', marginVertical: 5 }}>

                  <View style={{ flexDirection: 'row', flex: 17, alignItems: 'center' }}>
                    <IconA name='switcher' color='#828282' size={18} style={{}} />
                    <Text style={{ marginLeft: 10, fontSize: 15, color: '#3A3A3A' }}>Categories</Text>
                  </View>

                  <IconF name='angle-right' color='#00959E' size={25} style={{ alignSelf: 'flex-end', flex: 1 }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row', marginVertical: 5 }}>

                  <View style={{ flexDirection: 'row', flex: 17, alignItems: 'center' }}>
                    <IconMC name='home-currency-usd' color='#828282' size={22} style={{ right: 3 }} />
                    <Text style={{ marginLeft: 6, fontSize: 15, color: '#3A3A3A' }}>Sell Property</Text>
                  </View>

                  <IconF name='angle-right' color='#00959E' size={25} style={{ alignSelf: 'flex-end', flex: 1 }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row', marginVertical: 5 }}>

                  <View style={{ flexDirection: 'row', flex: 17, alignItems: 'center' }}>
                    <IconS name='wallet' color='#828282' size={18} style={{}} />
                    <Text style={{ marginLeft: 10, fontSize: 15, color: '#3A3A3A' }}>Wallet</Text>
                  </View>

                  <IconF name='angle-right' color='#00959E' size={25} style={{ alignSelf: 'flex-end', flex: 1 }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row', marginVertical: 5 }}>

                  <View style={{ flexDirection: 'row', flex: 17, alignItems: 'center' }}>
                    <IconM name='business-center' color='#828282' size={20} style={{ right: 2 }} />
                    <Text style={{ marginLeft: 6, fontSize: 15, color: '#3A3A3A' }}>Careers</Text>
                  </View>

                  <IconF name='angle-right' color='#00959E' size={25} style={{ alignSelf: 'flex-end', flex: 1 }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row', marginVertical: 5 }}>

                  <View style={{ flexDirection: 'row', flex: 17, alignItems: 'center' }}>
                    <IconI name='md-business' color='#828282' size={20} style={{}} />
                    <Text style={{ marginLeft: 10, fontSize: 15, color: '#3A3A3A' }}>Servies</Text>
                  </View>

                  <IconF name='angle-right' color='#00959E' size={25} style={{ alignSelf: 'flex-end', flex: 1 }} />
                </TouchableOpacity>


              </View>
            </View>


            <View style={{ flex: 0.8, width: Dimensions.get('window').width, }}>
              <Text style={{ marginTop: 20, marginLeft: 20, fontSize: 12, color: '#828282' }}>
                Account
              </Text>
              <View style={{
                marginTop: 10, marginLeft: 35,
                height: 150,
                width: 210
              }}>
                <TouchableOpacity style={{ flexDirection: 'row', marginVertical: 5 }}>

                  <View style={{ flexDirection: 'row', flex: 17, alignItems: 'center' }}>
                    <IconA name='setting' color='#828282' size={18} style={{}} />
                    <Text style={{ marginLeft: 10, fontSize: 15, color: '#3A3A3A' }}>Settings</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row', marginVertical: 5 }}>

                  <View style={{ flexDirection: 'row', flex: 17, alignItems: 'center' }}>
                    <IconE name='line-graph' color='#828282' size={18} style={{}} />
                    <Text style={{ marginLeft: 10, fontSize: 15, color: '#3A3A3A' }}>Invest</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row', marginVertical: 5 }}>

                  <View style={{ flexDirection: 'row', flex: 17, alignItems: 'center' }}>
                    <IconE name='documents' color='#828282' size={18} style={{}} />
                    <Text style={{ marginLeft: 10, fontSize: 15, color: '#3A3A3A' }}>Terms & Condition</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row', marginVertical: 5 }}>

                  <View style={{ flexDirection: 'row', flex: 17, alignItems: 'center' }}>
                    <IconA name='logout' color='#828282' size={18} style={{}} />
                    <Text style={{ marginLeft: 10, fontSize: 15, color: '#3A3A3A' }}>Logout</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>

          </View>
        </View>
      </ScrollView>
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