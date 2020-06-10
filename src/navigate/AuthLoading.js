import React, {useEffect} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Session from '@utils/Session';

export const AuthLoadingScreen = ({navigation}) => {
  useEffect(() => {
    SplashScreen.hide();
    async function fetchToken() {
      // Fetch the token from storage then navigate to our appropriate place
      const userToken = await Session.getData('@token');
      navigation.replace(userToken ? 'Apps' : 'AuthScreens');
      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
    }
    fetchToken();
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.image} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 60,
  },
});
