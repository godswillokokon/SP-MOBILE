import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  KeyboardAvoidingView
} from 'react-native';
import {
  TopNavigation,
  TopNavigationAction,
  Input
} from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/AntDesign';
import IconF from 'react-native-vector-icons/FontAwesome5';
import IconS from 'react-native-vector-icons/SimpleLineIcons';

export const ForgotPasswordScreen = ({ navigation }) => {
  const navigateBack = () => {
    requestAnimationFrame(() => {
      navigation.goBack();
    })
  };

  const BackIcon = () => (
    <Icon style={[{ color: '#515C6F', }]} name='arrowleft' size={25} />
  );

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} style={[{ padding: 5 }]} />
  );
  const Title = () => (
    <View>
      <Text style={styles.title}>
        Forgot Password
    </Text>
    </View>
  );
  const MailIcon = () => (
    <View>
      <IconF style={[{ color: '#fff' }]} size={18} name={'envelope'} />
    </View>
  );

  const [Evalue, setValueE] = useState('');
  return (
    <View style={{ backgroundColor: '#fff', flex: 1 }}>
      <TopNavigation title={Title} alignment={'center'} style={styles.topNavigation}
        accessoryLeft={BackAction} />
      <View style={{ alignSelf: 'center', margin: 50 }}>
        <IconS style={[{ color: '#515C6F', }]} name='lock' size={50} />
      </View>
      <View style={{ alignSelf: 'center', width: Dimensions.get('window').width - 50, }}>
        <Text style={{ fontSize: 15, color: '#3A3A3A', alignSelf: 'center' }}>If you forgot your password, please enter your email</Text>
        <Text style={{ fontSize: 15, color: '#3A3A3A', alignSelf: 'center' }}>below and reset link would be sent to you</Text>
      </View>
      <KeyboardAvoidingView style={styles.key} behavior="padding" enabled>
        <Input
          value={Evalue}
          placeholder='Email'
          style={styles.inputEmail}
          textStyle={styles.inputText}
          labelStyle={styles.inputLabel}
          captionTextStyle={styles.inputCaption}
          onChangeText={setValueE}
          accessoryRight={MailIcon}
          textStyle={styles.placeholder}
          placeholderTextColor={'#828282'}
        />
      </KeyboardAvoidingView>

      <View style={{ width: 98, height: 36, backgroundColor: '#FCAD0A', alignSelf: 'center', borderRadius: 4, justifyContent: 'center', }}>
        <Text style={{ alignSelf: 'center', fontSize: 18, color: '#fff' }}>Send</Text>
      </View>
    </View>
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
  topNavigation: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.58,
    shadowRadius: 1,
    elevation: 3,
    paddingVertical: 5,
    width: Dimensions.get('window').width + 5,
    flexDirection: 'row',
  },
  inputEmail: {
    borderColor: '#3A3A3A', backgroundColor: 'transparent',
    width: Dimensions.get('window').width - 50, alignSelf: 'center',
    margin: 40

  },
  inputText: { color: '#3A3A3A' },
  placeholder: {
    fontSize: 13,
    fontFamily: 'Muli',
    fontWeight: 'bold',
    color: '#3A3A3A'
  },
})