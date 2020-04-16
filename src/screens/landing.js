import SplashScreen from 'react-native-splash-screen';
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import {
  Avatar, Card,
} from '@ui-kitten/components';
import LinearGradient from 'react-native-linear-gradient';

export const LandingScreen = ({ navigation }) => {
  useEffect(() => {
    SplashScreen.hide();
  }, [])
  const LandingOne = () => {
    requestAnimationFrame(() => {
      navigation.navigate('Landing');
    })
  };
  const LandingTwo = () => {
    requestAnimationFrame(() => {
      navigation.navigate('LandingTwo');
    })
  };
  const LandingThree = () => {
    requestAnimationFrame(() => {
      navigation.navigate('LandingThree');
    })
  };
  const Skip = () => {
    requestAnimationFrame(() => {
      navigation.navigate('Login');
    })
  };

  return (
    <ImageBackground source={require('../assets/one.png')} style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
      <View tyle={{ alignSelf: 'flex-start', }}>
        <TouchableOpacity style={{ alignContent: 'space-around', width: 50, alignSelf: 'flex-end', margin: 15 }}>
          <Text onPress={Skip} style={{
            alignSelf: 'center', fontFamily: 'Muli', fontStyle: 'normal',
            fontSize: 18,
            color: '#fff',
            textShadowColor: '#000',
            fontWeight: 'bold'
          }}>Skip</Text>
        </TouchableOpacity>
      </View>
      <View style={{ width: 300, margin: 15, position: 'absolute', top: 300, zIndex: 1 }}>
        <Text style={{
          fontSize: 38, color: '#fff',
          lineHeight: 38, marginVertical: 5,
        }}>Well Furnished Apartments</Text>
        <Text style={{ marginVertical: 5, fontSize: 20, color: '#fff', lineHeight: 20 }}>
          Lorem ipsum dolor sit amet, elit. Dictum consectetur adipiscing elit. Dictum
        </Text>
      </View>

      <LinearGradient colors={['#00000100', '#00000159', '#00000175', '#00000191', '#000001b8', '#000001b8', '#000001b8', '#000001']} style={{ flex: 0.5 }} />
      <View style={{
        height: 40, backgroundColor: '#FCAD0A', position: 'absolute', bottom: 0, width: Dimensions.get('window').width, flexDirection: 'row',
      }}>
        <View style={{ width: 80, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around', marginLeft: 10 }}>
          <TouchableOpacity onPress={LandingOne}>
            <View style={{ backgroundColor: '#CFCDCD', width: 10, height: 10, borderRadius: 30 }}></View>
          </TouchableOpacity>
          <TouchableOpacity onPress={LandingTwo}>
            <View style={{ backgroundColor: '#fff', width: 10, height: 10, borderRadius: 30 }}></View>
          </TouchableOpacity>
          <TouchableOpacity onPress={LandingThree}>
            <View style={{ backgroundColor: '#fff', width: 10, height: 10, borderRadius: 30 }}></View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={LandingTwo} style={{ position: 'absolute', right: 0, marginRight: 15, }}>
          <Text style={{ marginTop: 7, fontSize: 18, color: '#fff', }}>Next</Text>
        </TouchableOpacity>

      </View>
    </ImageBackground >
  )

};
export const LandingTwoScreen = ({ navigation }) => {

  const LandingOne = () => {
    requestAnimationFrame(() => {
      navigation.navigate('Landing');
    })
  };
  const LandingTwo = () => {
    requestAnimationFrame(() => {
      navigation.navigate('LandingTwo');
    })
  };
  const LandingThree = () => {
    requestAnimationFrame(() => {
      navigation.navigate('LandingThree');
    })
  };
  const Skip = () => {
    requestAnimationFrame(() => {
      navigation.navigate('Login');
    })
  };

  return (
    <ImageBackground source={require('../assets/two.png')} style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
      <View tyle={{ alignSelf: 'flex-start', }}>
        <TouchableOpacity onPress={Skip} style={{ alignContent: 'space-around', width: 50, alignSelf: 'flex-end', margin: 15 }}>
          <Text style={{
            alignSelf: 'center', fontFamily: 'Muli', fontStyle: 'normal',
            fontSize: 18,
            color: '#fff',
            textShadowColor: '#000',
            fontWeight: 'bold'
          }}>Skip</Text>
        </TouchableOpacity>
      </View>
      <View style={{ width: 300, margin: 15, position: 'absolute', top: 300, zIndex: 1 }}>
        <Text style={{
          fontSize: 40, color: '#fff',
          lineHeight: 38, marginVertical: 5,
        }}>Well Furnished Apartments</Text>
        <Text style={{ marginVertical: 5, fontSize: 20, color: '#fff', lineHeight: 20 }}>
          Lorem ipsum dolor sit amet, elit. Dictum consectetur adipiscing elit. Dictum
        </Text>
      </View>

      <LinearGradient colors={['#00000100', '#00000159', '#00000175', '#00000191', '#000001b8', '#000001b8', '#000001b8', '#000001']} style={{ flex: 0.5 }} />
      <View style={{
        height: 40, backgroundColor: '#FCAD0A', position: 'absolute', bottom: 0, width: Dimensions.get('window').width, flexDirection: 'row',
      }}>
        <View style={{ width: 80, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around', marginLeft: 10 }}>
          <TouchableOpacity onPress={LandingOne}>
            <View style={{ backgroundColor: '#fff', width: 10, height: 10, borderRadius: 30 }}></View>
          </TouchableOpacity>
          <TouchableOpacity onPress={LandingTwo}>
            <View style={{ backgroundColor: '#CFCDCD', width: 10, height: 10, borderRadius: 30 }}></View>
          </TouchableOpacity>
          <TouchableOpacity onPress={LandingThree}>
            <View style={{ backgroundColor: '#fff', width: 10, height: 10, borderRadius: 30 }}></View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={LandingThree} style={{ position: 'absolute', right: 0, marginRight: 15, }}>
          <Text style={{ marginTop: 7, fontSize: 18, color: '#fff', }}>Next</Text>
        </TouchableOpacity>

      </View>
    </ImageBackground >
  )

};

export const LandingThreeScreen = ({ navigation }) => {

  const LandingOne = () => {
    requestAnimationFrame(() => {
      navigation.navigate('Landing');
    })
  };
  const LandingTwo = () => {
    requestAnimationFrame(() => {
      navigation.navigate('LandingTwo');
    })
  };
  const LandingThree = () => {
    requestAnimationFrame(() => {
      navigation.navigate('LandingThree');
    })
  };
  const Login = () => {
    requestAnimationFrame(() => {
      navigation.navigate('Login');
    })
  };
  const Skip = () => {
    requestAnimationFrame(() => {
      navigation.navigate('Login');
    })
  };

  return (
    <ImageBackground source={require('../assets/three.png')} style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
      <View tyle={{ alignSelf: 'flex-start', }}>
        <TouchableOpacity onPress={Skip} style={{ alignContent: 'space-around', width: 50, alignSelf: 'flex-end', margin: 15 }}>
          <Text style={{
            alignSelf: 'center', fontFamily: 'Muli', fontStyle: 'normal',
            fontSize: 18,
            color: '#fff',
            textShadowColor: '#000',
            fontWeight: 'bold'
          }}>Skip</Text>
        </TouchableOpacity>
      </View>
      <View style={{ width: 300, margin: 15, position: 'absolute', top: 300, zIndex: 1 }}>
        <Text style={{
          fontSize: 40, color: '#fff',
          lineHeight: 38, marginVertical: 5,
        }}>Well Furnished Apartments</Text>
        <Text style={{ marginVertical: 5, fontSize: 20, color: '#fff', lineHeight: 20 }}>
          Lorem ipsum dolor sit amet, elit. Dictum consectetur adipiscing elit. Dictum
        </Text>
      </View>

      <LinearGradient colors={['#00000100', '#00000159', '#00000175', '#00000191', '#000001b8', '#000001b8', '#000001b8', '#000001']} style={{ flex: 0.5 }} />
      <View style={{
        height: 40, backgroundColor: '#FCAD0A', position: 'absolute', bottom: 0, width: Dimensions.get('window').width, flexDirection: 'row',
      }}>
        <View style={{ width: 80, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around', marginLeft: 10 }}>
          <TouchableOpacity onPress={LandingOne}>
            <View style={{ backgroundColor: '#fff', width: 10, height: 10, borderRadius: 30 }}></View>
          </TouchableOpacity>
          <TouchableOpacity onPress={LandingTwo}>
            <View style={{ backgroundColor: '#fff', width: 10, height: 10, borderRadius: 30 }}></View>
          </TouchableOpacity>
          <TouchableOpacity onPress={LandingThree}>
            <View style={{ backgroundColor: '#CFCDCD', width: 10, height: 10, borderRadius: 30 }}></View>
          </TouchableOpacity>

        </View>

        <TouchableOpacity onPress={Login} style={{ position: 'absolute', right: 0, marginRight: 15, }}>
          <Text style={{ marginTop: 7, fontSize: 18, color: '#fff', }}>Next</Text>
        </TouchableOpacity>

      </View>
    </ImageBackground >
  )

};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
})