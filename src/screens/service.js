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
import TopNav from '../components/topNav';
import IconA from 'react-native-vector-icons/AntDesign';



export const ServiceScreen = ({ navigation }) => {
  const details = navigation.state.params.details;
  // console.log(details, "details");

  //top nav
  const navigateBack = () => {
    requestAnimationFrame(() => {
      navigation.goBack();

    })
  };
  const navigateService = (data) => {
    requestAnimationFrame(() => {
      navigation.navigate('ServiceBook', {
        details: data
      });
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
        Services
      </Text>
    </View >
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNav Title={Title} LeftAction={LeftAction} />
      <View style={{ flex: 1, alignSelf: 'center', marginVertical: 24, }}>
        <Image style={{ width: Dimensions.get('screen').width - 20, height: 180 }}
          source={{ uri: details.imageUrl }}
        />
        <View style={{ alignSelf: 'center', width: Dimensions.get('screen').width - 20, }}>
          <Text style={{ color: '#3A3A3A', fontSize: 15, marginVertical: 9 }}>{details.title}</Text>
          <Text style={{ color: '#828282', fontSize: 13, lineHeight: 18 }}>{details.info}</Text>
          <View style={{ flexDirection: 'row', width: 200, justifyContent: 'space-between', marginVertical: 19 }}>
            <Text style={{ color: '#828282', fontSize: 15 }}>Service Rate</Text>
            <Text style={{ color: '#3A3A3A', fontSize: 15 }}>{details.rate}/hr</Text>
          </View>
          <TouchableOpacity onPress={navigateService(details)} style={{ justifyContent: 'center', width: 98, height: 40, backgroundColor: "#0DABA8", borderRadius: 4, alignSelf: 'center' }}>
            <Text style={{ color: '#fff', fontSize: 16, alignSelf: 'center', }}>Hire</Text>
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