import React, {useState, useCallback} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import {TopNavigationAction, Layout, Text, Input} from '@ui-kitten/components';
import {Avatar} from 'react-native-paper';
import TopNav from '../components/topNav';
import IconA from 'react-native-vector-icons/AntDesign';
import IconF from 'react-native-vector-icons/FontAwesome5';
import IconM from 'react-native-vector-icons/MaterialIcons';
import {moderateScale} from 'react-native-size-matters';

export const AccountScreen = ({navigation}) => {
  //nav
  const navigateBack = () => {
    requestAnimationFrame(() => {
      navigation.goBack();
    });
  };
  const openDrawer = () => {
    requestAnimationFrame(() => {
      navigation.openDrawer();
    });
  };
  const ChangePassword = () => {
    requestAnimationFrame(() => {
      navigation.navigate('ForgotPassword');
    });
  };
  const Left = () => (
    <IconF style={[{color: '#00959E'}]} name="bars" size={25} />
  );

  const LeftAction = () => (
    <TopNavigationAction
      icon={Left}
      onPress={openDrawer}
      style={[{padding: 5}]}
    />
  );
  const Title = () => (
    <View>
      <Text style={styles.title}>Account</Text>
    </View>
  );

  const [FullName, setFullName] = useState('Godswill Effiong Okokon');
  const [Email, setEmail] = useState('Godswillokokon3@gmail.com');
  const [Phone, setPhone] = useState('08177024847');

  //icons

  const FullNameIcon = () => (
    <View>
      <IconA style={[{color: '#828282'}]} size={20} name={'contacts'} />
    </View>
  );
  const FullNameText = () => (
    <Text style={{fontSize: 15, color: '#3A3A3A'}}>Full Name</Text>
  );

  const EmailIcon = () => (
    <View>
      <IconF style={[{color: '#828282'}]} size={20} name={'envelope'} />
    </View>
  );
  const EmailText = () => (
    <Text style={{fontSize: 15, color: '#3A3A3A'}}>Email</Text>
  );

  const PhoneIcon = () => (
    <View>
      <IconA style={[{color: '#828282'}]} size={20} name={'phone'} />
    </View>
  );
  const PhoneText = () => (
    <Text style={{fontSize: 15, color: '#3A3A3A'}}>Phone</Text>
  );

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <TopNav Title={Title} LeftAction={LeftAction} />
      <View style={{flex: 1, alignSelf: 'center', marginVertical: 24}}>
        <View style={{justifyContent: 'center', alignSelf: 'center'}}>
          <Avatar.Image
            source={{
              uri:
                'https://res.cloudinary.com/ogcodes/image/upload/v1581349441/e4i61gkcr7hvixpaqkgb.jpg',
            }}
            size={120}
          />
          <TouchableOpacity
            style={{
              backgroundColor: 'rgba(0, 149, 158, 0.5)',
              position: 'absolute',
              width: 41,
              height: 41,
              borderRadius: 100,
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <IconF
              style={[{color: '#FFF', alignSelf: 'center'}]}
              name="camera"
              size={20}
            />
          </TouchableOpacity>
        </View>

        <KeyboardAvoidingView style={styles.key} behavior="padding" enabled>
          <Layout style={styles.form}>
            <Input
              value={FullName}
              style={styles.input}
              textStyle={styles.inputText}
              onChangeText={setFullName}
              accessoryRight={FullNameIcon}
              label={FullNameText}
              accessibilityLabel="Full name"
            />
            <Input
              value={Email}
              style={styles.input}
              textStyle={styles.inputText}
              onChangeText={setEmail}
              accessoryRight={EmailIcon}
              label={EmailText}
              accessibilityLabel="Email"
            />
            <Input
              value={Phone}
              style={styles.input}
              textStyle={styles.inputText}
              onChangeText={setPhone}
              accessoryRight={PhoneIcon}
              label={PhoneText}
              accessibilityLabel="Email"
            />
            <TouchableOpacity
              onPress={ChangePassword}
              style={{flexDirection: 'row', marginVertical: 15}}>
              <IconM
                style={[{color: '#828282'}]}
                size={20}
                name={'lock-outline'}
              />
              <Text
                style={{
                  marginHorizontal: 5,
                  fontSize: 16,
                  color: '#828282',
                  fontStyle: 'italic',
                }}>
                Change Password
              </Text>
            </TouchableOpacity>
          </Layout>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontFamily: 'Muli',
    alignSelf: 'center',
    color: '#3A3A3A',
    fontWeight: 'bold',
  },
  key: {
    flex: 1,
    flexDirection: 'column',
  },

  input: {
    borderColor: 'transparent',
    backgroundColor: 'transparent',
    borderBottomColor: '#CFCBCB',
    marginVertical: 5,
  },
  inputText: {color: '#3A3A3A', fontSize: 16, fontWeight: 'bold'},
  fullNameLabel: {color: '#fff'},
  inputCaption: {color: '#fff'},

  button: {
    backgroundColor: '#0DABA8',
    width: Dimensions.get('window').width - 100,
    alignSelf: 'center',
    borderRadius: 4,
    padding: 8,
    marginTop: 60,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: 'Muli',
    alignSelf: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
  form: {
    backgroundColor: 'transparent',
    width: Dimensions.get('window').width - 50,
    alignSelf: 'center',
  },
});
