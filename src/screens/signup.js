/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
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
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {CreateUser} from '../redux/actions/userActions';
import {
  Layout,
  Text,
  Input,
  Datepicker,
  NativeDateService,
} from '@ui-kitten/components';
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
    <Icon color={'#8f9bb3'} size={18} name={'calendar'} />
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
    setload(true);
    setDob(fullDate);
    requestAnimationFrame(() => {
      dispatch(CreateUser(data, navigation, setload));
    });
  };
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPassword_confirmation] = useState('');
  const [birthday, setBirthday] = useState(new Date());
  const [dob, setDob] = useState('');
  const [securePassword, setSecurePassword] = React.useState(true);
  const [securePasswordC, setSecurePasswordC] = React.useState(true);
  const [load, setload] = useState(false);
  const formatDateService = new NativeDateService('en', {format: 'DD.MM.YYYY'});
  const minDate = new Date(1900);
  const data = {
    email,
    name,
    password,
    password_confirmation,
    dob,
    phone,
  };
  let curr_date = birthday.getDate();
  let curr_month = birthday.getMonth() + 1;
  let month = curr_month;
  if (curr_month <= 9) {
    month = `0${curr_month}`;
  }
  let curr_year = birthday.getFullYear();
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
        <ScrollView style={{flex: 1}}>
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

          <View style={{alignSelf: 'center', height: 100, marginTop: 10}}>
            <Text
              style={{
                color: '#fff',
                fontSize: 40,
                fontFamily: 'Muli',
                alignSelf: 'center',
                fontWeight: 'bold',
              }}>
              Create Account
            </Text>
            <Text style={{color: '#fff', fontSize: 15, alignSelf: 'center'}}>
              lets help you make that dream a reality
            </Text>
          </View>
          <View
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              height: Dimensions.get('screen').height - 270,
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
              }}>
              Signup
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
                <Text style={styles.placeholder}>
                  Date of Birth: {birthday.toLocaleDateString()}
                </Text>
                <Datepicker
                  date={birthday}
                  onSelect={(nextDate) => setBirthday(nextDate)}
                  autoDismiss
                  placement="top"
                  twitter
                  backdropStyle={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}
                  style={styles.input}
                  accessoryRight={CalendarIcon}
                  dateService={formatDateService}
                  min={minDate}
                />
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
              <TouchableOpacity
                onPress={() => registerUser(data)}
                style={styles.button}>
                <Text style={styles.buttonText}>Signup</Text>
              </TouchableOpacity>
              <ActivityIndicator
                animating={load}
                size="large"
                color="#00959E"
              />
            </KeyboardAvoidingView>
          </View>
          <View
            style={{
              width: Dimensions.get('screen').width - 50,
              height: 50,
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
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
              marginBottom: 10,
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
    marginTop: 15,
    // top: 60
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
