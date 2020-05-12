import React, { useState, useCallback } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ImageBackground
} from 'react-native';
import {
  TopNavigationAction,
} from '@ui-kitten/components';
import {
  Avatar,
} from 'react-native-paper';
import { moderateScale } from 'react-native-size-matters';
import ToggleSwitch from 'toggle-switch-react-native';

import TopNav from '../components/topNav';
import IconA from 'react-native-vector-icons/AntDesign';
import IconI from 'react-native-vector-icons/Ionicons';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import IconM from 'react-native-vector-icons/MaterialIcons';
import IconF from 'react-native-vector-icons/FontAwesome';
import IconS from 'react-native-vector-icons/SimpleLineIcons'



export const SettingsScreen = ({ navigation }) => {

  //top nav
  const navigateBack = () => {
    requestAnimationFrame(() => {
      navigation.goBack();

    })
  };
  const Left = () => (
    <IconA style={[{ color: '#00959E', }]} name='arrowleft' size={25} />
  );

  const LeftAction = () => (
    <TopNavigationAction icon={Left} onPress={navigateBack} style={[{ padding: 5 }]} />
  );
  const Title = () => (
    <View >
      <Text style={styles.title}>
        Settings
      </Text>
    </View >
  );

  const [available, setAvailable] = useState({
    checked: true,
    text: "Available"
  });
  const { checked, text } = available;

  const onCheckedChangeCourier = (isChecked) => {
    requestAnimationFrame(() => {
      setAvailable({ ...available, text: text == 'Available' ? "Not Available" : "Available", checked: isChecked })
    })
  };


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <TopNav Title={Title} LeftAction={LeftAction} />
      <View style={{
        flex: 1, alignSelf: 'center', marginVertical: 24,
      }}>
        <View style={{
          width: Dimensions.get('window').width - 20, height: 80, flexDirection: 'row',
          borderRadius: 6,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          // shadowOpacity: 0.25,
          shadowRadius: 1.84,

          elevation: 1,
        }}>

          <View style={{ flex: 5, flexDirection: 'row' }}>

            <View style={{ flex: 1, justifyContent: 'center', marginHorizontal: 8 }}>
              <Avatar.Image
                source={{
                  uri: 'https://res.cloudinary.com/ogcodes/image/upload/v1581349441/e4i61gkcr7hvixpaqkgb.jpg'
                }}
                size={60}
              />
            </View>

            <View style={{ flex: 3.5, justifyContent: 'center' }}>
              <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#3A3A3A' }}>Godswillokokon </Text>
              <Text style={{ fontSize: 12, color: '#828282' }}>Lekki Lekki</Text>
            </View>
          </View>

          <View style={{ flex: 1, justifyContent: 'center' }}>
            <IconF name='angle-right' color='#00959E' size={25} style={{ marginHorizontal: 20 }} />
          </View>
        </View>
        <View style={{
          height: 200, marginVertical: 30, borderRadius: 6,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 0,
          },
          // shadowOpacity: 0.25,
          shadowRadius: 1.84,

          elevation: 2,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <View style={{
            justifyContent: 'center', flex: 1, borderBottomColor: '#E0E0E0',
            borderBottomWidth: 1, width: Dimensions.get('window').width - 70, flexDirection: 'row'
          }}>
            <View style={{ flex: 1.3, justifyContent: 'center' }}>
              <IconI color={'#828282'} size={20} name={'ios-notifications-outline'} />

            </View>
            <View style={{ flex: 6, justifyContent: 'center', }}>
              <Text style={{ color: "#3A3A3A", fontSize: 14, }}>Notifications</Text>

            </View>
            <View style={{ flex: 6, justifyContent: 'center', alignItems: 'flex-end' }} useNativeDriver={false}>
              <View>
                <ToggleSwitch
                  isOn={checked}
                  onColor='#00959E'
                  offColor="#828282"
                  size='small'
                  onToggle={onCheckedChangeCourier}
                  useNativeDriver={false}
                />
              </View>
            </View>
          </View>



          <TouchableOpacity style={{
            flex: 1, borderBottomColor: '#E0E0E0',
            borderBottomWidth: 1, width: Dimensions.get('window').width - 70, flexDirection: 'row'
          }} >
            <View style={{ flex: 1.3, justifyContent: 'center' }}>
              <IconS color={'#828282'} size={15} name={'lock'} />

            </View>
            <View style={{ flex: 6, justifyContent: 'center', }}>
              <Text style={{ color: "#3A3A3A", fontSize: 14, }}>Privacy & Security</Text>

            </View>
            <View style={{ flex: 6, justifyContent: 'center', alignItems: 'flex-end' }}>
              <IconF name='angle-right' color='#00959E' size={25} />
            </View>
          </TouchableOpacity>


          <TouchableOpacity style={{
            flex: 1, borderBottomColor: '#E0E0E0',
            borderBottomWidth: 1, width: Dimensions.get('window').width - 70, flexDirection: 'row'
          }}>
            <View style={{ flex: 1.3, justifyContent: 'center' }}>
              <IconS color={'#828282'} size={15} name={'support'} />

            </View>
            <View style={{ flex: 6, justifyContent: 'center', }}>
              <Text style={{ color: "#3A3A3A", fontSize: 14, }}>Help and Support </Text>

            </View>
            <View style={{ flex: 6, justifyContent: 'center', alignItems: 'flex-end' }}>
              <IconF name='angle-right' color='#00959E' size={25} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1, width: Dimensions.get('window').width - 70, flexDirection: 'row' }}>
            <View style={{ flex: 1.3, justifyContent: 'center' }}>
              <IconS color={'#828282'} size={15} name={'info'} />

            </View>
            <View style={{ flex: 6, justifyContent: 'center', }}>
              <Text style={{ color: "#3A3A3A", fontSize: 14, }}>About</Text>

            </View>
            <View style={{ flex: 6, justifyContent: 'center', alignItems: 'flex-end' }}>
              <IconF name='angle-right' color='#00959E' size={25} />
            </View>
          </TouchableOpacity>

        </View>
      </View>
    </SafeAreaView >
  )

};


const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontFamily: 'Muli',
    alignSelf: 'center',
    color: '#3A3A3A',
    fontWeight: 'bold',
  },
})
