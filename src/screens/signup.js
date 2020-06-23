/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
  ActivityIndicator,
  Platform,
} from 'react-native';
import {ToastAndroid} from 'react-native';
import {useDispatch} from 'react-redux';
import {CreateUser} from '../redux/actions/userActions';
import {Layout, Text, Input} from '@ui-kitten/components';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconA from 'react-native-vector-icons/AntDesign';
//icons
const PhoneIcon = () => (
  <View>
    <Icon color={'#8f9bb3'} size={18} name={'phone'} />
  </View>
);
const MailIcon = () => (
  <View>
    <Icon color={'#8f9bb3'} size={18} name={'envelope'} />
  </View>
);
const NameIcon = () => (
  <View>
    <Icon color={'#8f9bb3'} size={18} name={'user-edit'} />
  </View>
);

const CalendarIcon = () => (
  <View>
    <Icon style={{flex: 1}} color={'#8f9bb3'} size={18} name={'calendar'} />
  </View>
);

export const SignupScreen = ({navigation}) => {
  const Login = () => {
    requestAnimationFrame(() => {
      navigation.navigate('Login');
    });
  };
  const dispatch = useDispatch();

  const registerUser = (data) => {
    requestAnimationFrame(() => {
      setload(true);
      if (data.name === '' || null) {
        ToastAndroid.show(
          'Name should not be empty',
          ToastAndroid.LONG,
          ToastAndroid.TOP,
          25,
          50,
        );
        setTimeout(() => {
          setload(false);
        }, 5000);
      } else if (data.email === '' || null) {
        ToastAndroid.show(
          'Email should not be empty',
          ToastAndroid.LONG,
          ToastAndroid.TOP,
          25,
          50,
        );
        setTimeout(() => {
          setload(false);
        }, 5000);
      } else if (data.phone === '' || null) {
        ToastAndroid.show(
          'Phone should not be empty',
          ToastAndroid.LONG,
          ToastAndroid.TOP,
          25,
          50,
        );
        setTimeout(() => {
          setload(false);
        }, 5000);
      } else if (data.dob === '' || null) {
        ToastAndroid.show(
          'Date of Birth should not be empty',
          ToastAndroid.LONG,
          ToastAndroid.TOP,
          25,
          50,
        );
        setTimeout(() => {
          setload(false);
        }, 5000);
      } else if (data.password === '' || null) {
        ToastAndroid.show(
          'Password should not be empty',
          ToastAndroid.LONG,
          ToastAndroid.TOP,
          25,
          50,
        );
        setTimeout(() => {
          setload(false);
        }, 5000);
      } else if (data.password_confirmation === '' || null) {
        ToastAndroid.show(
          'Password should not be empty',
          ToastAndroid.LONG,
          ToastAndroid.TOP,
          25,
          50,
        );
        setTimeout(() => {
          setload(false);
        }, 5000);
      } else if (data.password.length < 6) {
        ToastAndroid.show(
          'Password too short',
          ToastAndroid.LONG,
          ToastAndroid.TOP,
          25,
          50,
        );
        setTimeout(() => {
          setload(false);
        }, 5000);
      } else if (data.password !== data.password_confirmation) {
        ToastAndroid.show(
          'Password mismatched',
          ToastAndroid.LONG,
          ToastAndroid.TOP,
          25,
          50,
        );
        setTimeout(() => {
          setload(false);
        }, 5000);
      } else {
        dispatch(CreateUser(data, navigation, setload));
      }
    });
  };

  const onChange = (event, selectedDate) => {
    event.type === 'neutralButtonPressed' ? setDate(new Date()) : null;

    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    setDob(fullDate);
  };

  const showMode = () => {
    setShow(true);
  };

  const showDatepicker = () => {
    showMode('date');
  };
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState(new Date());
  const [password, setPassword] = useState('');
  const [password_confirmation, setPassword_confirmation] = useState('');
  const [show, setShow] = useState(false);
  const [dob, setDob] = useState('');
  const [securePassword, setSecurePassword] = React.useState(true);
  const [securePasswordC, setSecurePasswordC] = React.useState(true);
  const [load, setload] = useState(false);
  const data = {
    email,
    name,
    password,
    password_confirmation,
    dob,
    phone,
  };
  let curr_date = date.getDate();
  let curr_month = date.getMonth() + 1;
  let month = curr_month;
  if (curr_month <= 9) {
    month = `0${curr_month}`;
  }
  let curr_year = date.getFullYear();
  let fullDate = `${curr_date}-${month}-${curr_year}`;

  const toggleSecureEntry = () => {
    setSecurePassword(!securePassword);
  };
  const toggleSecureEntryC = () => {
    setSecurePasswordC(!securePasswordC);
  };

  const renderIcon = () => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon
        style={[{color: '#8f9bb3'}]}
        color={'#8f9bb3'}
        size={18}
        name={securePassword ? 'eye-slash' : 'eye'}
      />
    </TouchableWithoutFeedback>
  );
  const renderIconC = () => (
    <TouchableWithoutFeedback onPress={toggleSecureEntryC}>
      <Icon
        style={[{color: '#8f9bb3'}]}
        color={'#8f9bb3'}
        size={18}
        name={securePasswordC ? 'eye-slash' : 'eye'}
      />
    </TouchableWithoutFeedback>
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/login.png')}
        style={{
          flex: 1,
          flexDirection: 'column',
        }}>
        <View
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            position: 'absolute',
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height + 1000,
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        />
        <ScrollView style={{flex: 1}}>
          <View style={{alignSelf: 'center', height: 100, marginTop: 10}}>
            <Text
              style={{
                color: '#fff',
                fontSize: 40,
                fontFamily: 'Muli',
                alignSelf: 'center',
                fontWeight: 'bold',
              }}>
              Get Started
            </Text>
            <Text style={{color: '#fff', fontSize: 15, alignSelf: 'center'}}>
              lets help you make that dream a reality
            </Text>
          </View>
          <View
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              height: 500,
              width: Dimensions.get('screen').width - 50,
              alignSelf: 'center',
              borderRadius: 6,
              borderColor: '#fff',
              borderWidth: 0.5,
            }}>
            <Text
              style={{
                color: '#fff',
                fontSize: 28,
                fontFamily: 'Muli',
                alignSelf: 'center',
                fontWeight: 'bold',
                margin: 10,
              }}>
              Create Account
            </Text>
            <KeyboardAvoidingView style={styles.key} behavior="padding" enabled>
              <Layout style={styles.form}>
                <Input
                  value={name}
                  placeholder="Name"
                  style={styles.input}
                  textStyle={styles.inputText}
                  onChangeText={setName}
                  accessoryRight={NameIcon}
                  placeholderTextColor={'#fff'}
                />
                <Input
                  value={email}
                  placeholder="Email"
                  style={styles.input}
                  textStyle={styles.inputText}
                  onChangeText={setEmail}
                  accessoryRight={MailIcon}
                  placeholderTextColor={'#fff'}
                />
                <Input
                  value={phone}
                  placeholder="Phone"
                  style={styles.input}
                  textStyle={styles.inputText}
                  onChangeText={setPhone}
                  accessoryRight={PhoneIcon}
                  placeholderTextColor={'#fff'}
                />
                <View>
                  <TouchableOpacity
                    style={{
                      borderColor: 'transparent',
                      backgroundColor: 'transparent',
                      borderBottomColor: 'white',
                      padding: 12,
                      borderWidth: 1,
                      justifyContent: 'space-around',
                      flexDirection: 'row',
                    }}
                    onPress={showDatepicker}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: 'Muli',
                        marginLeft: 8,
                        color: '#fff',
                        flex: 1,
                      }}>
                      Date of Birth: {date.toLocaleDateString()}
                    </Text>
                    <CalendarIcon />
                  </TouchableOpacity>
                  {show && (
                    <DateTimePicker
                      testID="dateTimePicker"
                      value={date}
                      display="default"
                      onChange={onChange}
                      neutralButtonLabel="clear"
                      maximumDate={new Date()}
                    />
                  )}
                </View>
                <Input
                  value={password}
                  placeholder="Password"
                  style={styles.inputPass}
                  textStyle={styles.inputText}
                  caption="Should contain at least 6 charaters"
                  accessoryRight={renderIcon}
                  secureTextEntry={securePassword}
                  onChangeText={(nextValue) => setPassword(nextValue)}
                  placeholderTextColor={'#fff'}
                />
                <Input
                  value={password_confirmation}
                  placeholder="Confrim Password"
                  style={styles.inputPass}
                  textStyle={styles.inputText}
                  caption="Should contain at least 6 charaters"
                  accessoryRight={renderIconC}
                  secureTextEntry={securePasswordC}
                  onChangeText={(nextValue) =>
                    setPassword_confirmation(nextValue)
                  }
                  placeholderTextColor={'#fff'}
                />
              </Layout>
              <ActivityIndicator
                animating={load}
                size="large"
                color="#00959E"
              />
              <TouchableOpacity
                onPress={() => registerUser(data)}
                style={styles.button}>
                <Text style={styles.buttonText}>Signup</Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
          </View>
          <View
            style={{
              width: Dimensions.get('screen').width - 50,
              alignSelf: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              marginVertical: 10,
            }}>
            <View
              style={{
                borderBottomColor: '#fff',
                borderBottomWidth: 1,
                flex: 1,
              }}
            />
            <View style={{flex: 0.5}}>
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: 'Muli',
                  alignSelf: 'center',
                  color: '#fff',
                  fontWeight: 'bold',
                  padding: 10,
                }}>
                OR
              </Text>
            </View>
            <View
              style={{
                borderBottomColor: '#fff',
                borderBottomWidth: 1,
                flex: 1,
              }}
            />
          </View>
          <View
            style={{
              width: Dimensions.get('screen').width - 150,
              height: 50,
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginVertical: 10,
            }}>
            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: '#55ACEE',
                  borderRadius: 30,
                  width: 45,
                  height: 45,
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <Icon
                  style={[
                    {color: '#fff', alignSelf: 'flex-end', marginLeft: 6},
                  ]}
                  size={30}
                  name={'facebook-f'}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  borderRadius: 30,
                  width: 45,
                  height: 45,
                  backgroundColor: '#F44336',
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <IconA
                  style={[{color: '#fff', alignSelf: 'center'}]}
                  size={30}
                  name={'googleplus'}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  borderRadius: 30,
                  width: 45,
                  height: 45,
                  backgroundColor: '#55ACEE',
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <Icon
                  style={[{color: '#fff', alignSelf: 'center'}]}
                  size={30}
                  name={'twitter'}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              alignSelf: 'center',
              flexDirection: 'row',
              marginBottom: 20,
            }}>
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Muli',
                color: '#fff',
                marginHorizontal: -3,
                padding: 5,
              }}>
              Already have an account?
            </Text>
            <TouchableOpacity onPress={Login} style={{padding: 5}}>
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: 'Muli',
                  color: '#00959E',
                  marginHorizontal: -3,
                }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  key: {
    flex: 1,
    flexDirection: 'column',
  },
  placeholder: {
    fontSize: 14,
    fontFamily: 'Muli',
    margin: 2,
    color: '#fff',
  },
  input: {
    margin: 2,
    borderColor: 'transparent',
    backgroundColor: 'transparent',
    borderBottomColor: 'white',
  },
  inputPass: {
    borderColor: 'transparent',
    backgroundColor: 'transparent',
    borderBottomColor: 'white',
  },
  inputText: {color: '#fff'},
  inputLabel: {color: '#fff'},
  inputCaption: {color: '#fff'},

  forgotBut: {
    padding: 4,
    marginRight: 25,
    top: 10,
    alignSelf: 'flex-end',
  },
  forgot: {
    fontSize: 13,
    fontFamily: 'Muli',
    color: '#ffffff',
    backgroundColor: 'transparent',
    marginLeft: 20,
  },
  button: {
    backgroundColor: '#00959E',
    width: Dimensions.get('window').width - 100,
    alignSelf: 'center',
    borderRadius: 4,
    padding: 8,
    // marginVertical: -40,
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
    width: Dimensions.get('window').width - 100,
    alignSelf: 'center',
  },
  label: {
    color: '#fff',
    backgroundColor: 'black',
  },
});
