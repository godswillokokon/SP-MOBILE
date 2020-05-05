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



export const SampleScreen = ({ navigation }) => {

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
        Sample
      </Text>
    </View >
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNav Title={Title} LeftAction={LeftAction} />
      <View style={{ flex: 1, alignSelf: 'center', marginVertical: 24, }}>

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