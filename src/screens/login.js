import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Dimensions,
  KeyboardAvoidingView,
  TouchableOpacity,
  SafeAreaView,
  TouchableWithoutFeedback,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import {ToastAndroid} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Login} from '../redux/actions/userActions';
import {Layout, Text, Input} from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconA from 'react-native-vector-icons/AntDesign';
import Session from '@utils/Session';

//icons
const MailIcon = () => (
  <View>
    <Icon style={[{color: '#8f9bb3'}]} size={18} name={'envelope'} />
  </View>
);

export const LoginScreen = ({navigation}) => {
  useEffect(() => {
    async function fetchToken() {
      const tk = await Session.getData('@token');
    }
    fetchToken();
  }, []);

  const dispatch = useDispatch();
  const {user, token} = useSelector((state) => state.user);
  const ForgotPassword = () => {
    requestAnimationFrame(() => {
      navigation.navigate('ForgotPassword');
    });
  };
  const Signup = () => {
    requestAnimationFrame(() => {
      navigation.navigate('Signup');
    });
  };
  const loginUser = (data) => {
    requestAnimationFrame(() => {
      setLoad(true);
      if (data.email === '' || null) {
        ToastAndroid.show(
          'Email or Password should not be empty',
          ToastAndroid.LONG,
          ToastAndroid.TOP,
          25,
          50,
        );
        setTimeout(() => {
          setLoad(false);
        }, 5000);
      } else if (data.password === '' || null) {
        ToastAndroid.show(
          'Email or Password should not be empty',
          ToastAndroid.LONG,
          ToastAndroid.TOP,
          25,
          50,
        );
        setTimeout(() => {
          setLoad(false);
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
          setLoad(false);
        }, 5000);
      } else {
        dispatch(Login(data, navigation, setLoad));
      }
    });
  };
  const [email, setValueE] = useState('');
  const [password, setPassword] = useState('');
  const [securePassword, setSecurePassword] = useState(true);
  const [load, setLoad] = useState(false);
  const data = {
    email,
    password,
  };
  const toggleSecureEntry = () => {
    setSecurePassword(!securePassword);
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
            height: Dimensions.get('window').height + 10,
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        />
        <ScrollView>
          <View style={{alignSelf: 'center', marginTop: 30, height: 100}}>
            <Text
              style={{
                color: '#fff',
                fontSize: 40,
                // fontFamily: 'Muli',
                alignSelf: 'center',
                fontWeight: 'bold',
              }}>
              Welcome Back!
            </Text>
            <Text style={{color: '#fff', fontSize: 15, alignSelf: 'center'}}>
              continue where you left off
            </Text>
          </View>
          <View
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              height: 320,
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
                // fontFamily: 'Muli',
                alignSelf: 'center',
                fontWeight: 'bold',
                margin: 15,
              }}>
              Login
            </Text>
            <KeyboardAvoidingView style={styles.key} behavior="padding" enabled>
              <Layout style={styles.form}>
                <Input
                  value={email}
                  placeholder="Email"
                  style={styles.inputEmail}
                  textStyle={styles.inputText}
                  labelStyle={styles.inputLabel}
                  captionTextStyle={styles.inputCaption}
                  onChangeText={setValueE}
                  accessoryRight={MailIcon}
                  placeholderTextColor={'#fff'}
                  accessibilityLabel="Email"
                  textContentType="emailAddress"
                  disabled={load}
                />
                <View style={styles.lineStyle} />
                <Input
                  value={password}
                  placeholder="Password"
                  style={styles.inputPass}
                  textStyle={styles.inputText}
                  labelStyle={styles.inputLabel}
                  captionTextStyle={styles.inputCaption}
                  accessoryRight={renderIcon}
                  secureTextEntry={securePassword}
                  onChangeText={(nextValue) => setPassword(nextValue)}
                  placeholderTextColor={'#fff'}
                  accessibilityLabel="Password"
                  textContentType="password"
                  disabled={load}
                />
              </Layout>
              <TouchableOpacity
                onPress={ForgotPassword}
                style={styles.forgotBut}>
                <Text style={styles.forgot}>Forgot password?</Text>
              </TouchableOpacity>
              <ActivityIndicator
                animating={load}
                size="large"
                color="#00959E"
              />
              <TouchableOpacity
                onPress={() => loginUser(data)}
                style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
              
            </KeyboardAvoidingView>
          </View>
          <View
            style={{
              width: Dimensions.get('screen').width - 50,
              alignSelf: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              marginVertical: 25,
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
                  alignSelf: 'center',
                  color: '#fff',
                  fontWeight: 'bold',
                  padding: 10,
                }}>
                {' '}
                OR{' '}
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
              alignSelf: 'center',
              flexDirection: 'row',
              bottom: 0,
            }}>
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Muli',
                color: '#fff',
                // marginHorizontal: -3,
                padding: 5,
              }}>
              Don't have an account?
            </Text>
            <TouchableOpacity onPress={Signup} style={{padding: 5}}>
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: 'Muli',
                  color: '#00959E',
                  marginHorizontal: -3,
                }}>
                Signup
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
  loginTextBut: {
    fontSize: 18,
    // fontFamily: 'Muli',
    textAlign: 'center',
    marginTop: 97,
    color: '#FD901C',
    backgroundColor: 'transparent',
  },
  placeholder: {
    fontSize: 13,
    // fontFamily: 'Muli',
    fontWeight: 'bold',
    color: '#fff',
  },
  inputEmail: {
    margin: 2,
    borderColor: 'transparent',
    backgroundColor: 'transparent',
    borderBottomColor: 'white',
  },
  inputPass: {
    margin: 2,
    borderColor: 'transparent',
    backgroundColor: 'transparent',
    borderBottomColor: 'white',
  },
  inputText: {color: '#fff'},
  inputLabel: {color: '#fff'},
  inputCaption: {color: '#fff'},
  icon: {
    color: 'red',
    borderColor: 'transparent',
  },
  forgotBut: {
    padding: 4,
    marginRight: 25,
    top: 10,
    alignSelf: 'flex-end',
    // backgroundColor: 'black'
  },
  forgot: {
    fontSize: 13,
    // fontFamily: 'Muli',
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
    marginVertical: 20,
  },
  buttonText: {
    fontSize: 16,
    // fontFamily: 'Muli',
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
    backgroundColor: 'white',
  },
});
