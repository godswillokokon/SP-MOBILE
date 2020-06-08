/* eslint-disable react-native/no-inline-styles */
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
} from 'react-native';
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
      console.log(tk, 'loginTK')
    }
    fetchToken();
  }, []);

  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.user);
  console.log(token)
  console.log(user)
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
    setload(true);
    requestAnimationFrame(() => {
      dispatch(Login(data, navigation, setload));
    });
  };
  const [email, setValueE] = useState('');
  const [password, setPassword] = useState('');
  const [securePassword, setSecurePassword] = React.useState(true);
  const [load, setload] = useState(false);
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

        <View style={{alignSelf: 'center', marginTop: 30, height: 100}}>
          <Text
            style={{
              color: '#fff',
              fontSize: 40,
              fontFamily: 'Muli',
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
            height: Dimensions.get('screen').height - 390,
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
              margin: 15,
            }}>
            Login
          </Text>
          <KeyboardAvoidingView style={styles.key} behavior="padding" enabled>
            <Layout style={styles.form}>
              <Input
                value={email}
                placeholder="email"
                style={styles.inputEmail}
                textStyle={styles.inputText}
                labelStyle={styles.inputLabel}
                captionTextStyle={styles.inputCaption}
                onChangeText={setValueE}
                accessoryRight={MailIcon}
                placeholderTextColor={'#fff'}
              />
              <View style={styles.lineStyle} />
              <Input
                value={password}
                placeholder="password"
                style={styles.inputPass}
                textStyle={styles.inputText}
                labelStyle={styles.inputLabel}
                captionTextStyle={styles.inputCaption}
                accessoryRight={renderIcon}
                secureTextEntry={securePassword}
                onChangeText={(nextValue) => setPassword(nextValue)}
                placeholderTextColor={'#fff'}
              />
            </Layout>
            <TouchableOpacity onPress={ForgotPassword} style={styles.forgotBut}>
              <Text style={styles.forgot}>Forgot password?</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => loginUser(data)}
              style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <ActivityIndicator animating={load} size="large" color="#00959E" />
          </KeyboardAvoidingView>
        </View>
        <View
          style={{
            width: Dimensions.get('screen').width - 50,
            height: 50,
            alignSelf: 'center',
            margin: 10,
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
                style={[{color: '#fff', alignSelf: 'flex-end', marginLeft: 6}]}
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
        <View style={{alignSelf: 'center', flexDirection: 'row', margin: 10}}>
          <Text
            style={{
              fontSize: 15,
              fontFamily: 'Muli',
              color: '#fff',
              marginHorizontal: -3,
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
    fontFamily: 'Muli',
    textAlign: 'center',
    marginTop: 97,
    color: '#FD901C',
    backgroundColor: 'transparent',
  },
  placeholder: {
    fontSize: 13,
    fontFamily: 'Muli',
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
    marginTop: 60,
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
    backgroundColor: 'white',
  },
});
