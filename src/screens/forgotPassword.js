import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  KeyboardAvoidingView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {TopNavigation, TopNavigationAction, Input} from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/AntDesign';
import IconF from 'react-native-vector-icons/FontAwesome5';
import IconS from 'react-native-vector-icons/SimpleLineIcons';

export const ForgotPasswordScreen = ({navigation}) => {
  const navigateBack = () => {
    requestAnimationFrame(() => {
      navigation.goBack();
    });
  };
  const BackIcon = () => <Icon color={'#00959E'} name="arrowleft" size={25} />;
  const BackAction = () => (
    <TopNavigationAction
      icon={BackIcon}
      onPress={navigateBack}
      style={styles.left}
    />
  );
  const Title = () => (
    <View>
      <Text style={styles.title}>Forgot Password</Text>
    </View>
  );
  const MailIcon = () => (
    <View>
      <IconF color={'#828282'} size={18} name={'envelope'} />
    </View>
  );
  const [email, setEmail] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <TopNavigation
        title={Title}
        alignment={'center'}
        style={styles.topNavigation}
        accessoryLeft={BackAction}
      />
      <View style={styles.lock}>
        <IconS color={'#515C6F'} name="lock" size={50} />
      </View>
      <View style={styles.textMain}>
        <Text style={styles.paraOne}>
          If you forgot your password, please enter your
        </Text>
        <Text style={styles.paraTwo}>
          email below and reset link would be sent to you
        </Text>
      </View>
      <KeyboardAvoidingView style={styles.key} behavior="padding" enabled>
        <Input
          value={email}
          placeholder="Email"
          style={styles.inputEmail}
          onChangeText={setEmail}
          accessoryRight={MailIcon}
          textStyle={styles.text}
          placeholderTextColor={'#828282'}
        />
      </KeyboardAvoidingView>
      <TouchableOpacity style={styles.sendBtn}>
        <Text style={styles.sendBtnText}>Send</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  lock: {
    alignSelf: 'center',
    margin: 50,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Muli',
    alignSelf: 'center',
    color: '#3A3A3A',
    fontWeight: 'bold',
  },
  left: {padding: 5},
  topNavigation: {
    shadowColor: '#000',
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
  textMain: {
    alignSelf: 'center',
    width: Dimensions.get('window').width - 40,
  },
  paraOne: {fontSize: 15, color: '#3A3A3A', alignSelf: 'center'},
  paraTwo: {fontSize: 15, color: '#3A3A3A', alignSelf: 'center'},
  inputEmail: {
    borderColor: '#3A3A3A',
    backgroundColor: 'transparent',
    width: Dimensions.get('window').width - 50,
    alignSelf: 'center',
    margin: 40,
  },
  text: {
    fontSize: 13,
    fontFamily: 'Muli',
    fontWeight: 'bold',
    color: '#3A3A3A',
  },
  sendBtn: {
    width: 98,
    height: 40,
    backgroundColor: '#00959E',
    alignSelf: 'center',
    borderRadius: 4,
    justifyContent: 'center',
  },
  sendBtnText: {
    alignSelf: 'center',
    fontSize: 18,
    color: '#fff',
  },
});
