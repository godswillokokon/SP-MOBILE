import React, {useEffect} from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';
import Session from '@utils/Session';

export const AuthLoadingScreen = ({navigation}) => {
  useEffect(() => {
    async function fetchToken() {
      // Fetch the token from storage then navigate to our appropriate place
      const userToken = await Session.getData('@token');
      navigation.replace(userToken ? 'Apps' : 'AuthScreens');
      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      // console.log(userToken, 'authhhh');
    }
    fetchToken();
  }, [navigation]);
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#00959E" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
