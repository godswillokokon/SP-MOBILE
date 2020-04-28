import SplashScreen from 'react-native-splash-screen';
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  // Text,
  ImageBackground,
  Dimensions,
  KeyboardAvoidingView,
  TouchableOpacity
} from 'react-native';
import { Layout, Text, Input } from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconA from 'react-native-vector-icons/AntDesign';
//icons
const LockIcon = () => (
  <View>
    <Icon style={[{ color: '#fff' }]} color={'#fff'} size={18} name={'key'} />
  </View>
);
const MailIcon = () => (
  <View>
    <Icon style={[{ color: '#fff' }]} size={18} name={'envelope'} />
  </View>
);

export const LoginScreen = ({ navigation }) => {

  const ForgotPassword = () => {
    requestAnimationFrame(() => {
      navigation.navigate('ForgotPassword');
    })
  }
  const Signup = () => {
    requestAnimationFrame(() => {
      navigation.navigate('Signup');
    })
  }
  const Home = () => {
    // console.log(navigation)
    requestAnimationFrame(() => {
      navigation.navigate('Home');
      // navigation.openDrawer();

    })
  }
  const [Evalue, setValueE] = useState('');
  const [Pvalue, setValueP] = useState('');
  return (
    <ImageBackground source={require('../assets/login.png')} style={{
      flex: 1, flexDirection: 'column'
    }}>
      <View style={{
        backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'absolute',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height + 10,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }} />

      <View style={{ alignSelf: 'center', marginTop: 30, height: 100, }}>
        <Text style={{
          color: '#fff', fontSize: 40,
          fontFamily: 'Muli',
          alignSelf: 'center',
          fontWeight: 'bold'
        }}>Welcome Back!</Text>
        <Text style={{ color: '#fff', fontSize: 15, alignSelf: 'center' }}>continue where you left off
        </Text>
      </View>
      <View style={{
        backgroundColor: 'rgba(255, 255, 255, 0.1)', height: Dimensions.get('screen').height - 390,
        width: Dimensions.get('screen').width - 50, alignSelf: 'center', borderRadius: 6,
        borderColor: '#fff', borderWidth: 0.5,
      }}>
        <Text style={{
          color: '#fff', fontSize: 28,
          fontFamily: 'Muli',
          alignSelf: 'center',
          fontWeight: 'bold',
          margin: 15
        }}>Login</Text>
        <KeyboardAvoidingView style={styles.key} behavior="padding" enabled>
          <Layout style={styles.form}>
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
              placeholderTextColor={'#fff'}

            />
            <View style={styles.lineStyle} />
            <Input
              value={Pvalue}
              placeholder='Password'
              style={styles.inputPass}
              textStyle={styles.inputText}
              labelStyle={styles.inputLabel}
              captionTextStyle={styles.inputCaption}
              onChangeText={setValueP}
              accessoryRight={LockIcon}
              secureTextEntry={true}
              textStyle={styles.placeholder}
              placeholderTextColor={'#fff'}

            />
          </Layout>
          <TouchableOpacity onPress={ForgotPassword} style={styles.forgotBut}><Text style={styles.forgot}>Forgot password?</Text></TouchableOpacity>
          <TouchableOpacity onPress={Home} style={styles.button} ><Text style={styles.buttonText}>Login</Text></TouchableOpacity>
        </KeyboardAvoidingView>

      </View>
      <View style={{
        width: Dimensions.get('screen').width - 50, height: 50, alignSelf: 'center',
        margin: 10, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'
      }}>
        <View style={{ borderBottomColor: '#fff', borderBottomWidth: 1, flex: 1 }}></View>
        <View style={{ flex: 0.5 }}>
          <Text style={{
            fontSize: 15,
            fontFamily: 'Muli',
            alignSelf: 'center',
            color: '#fff',
            fontWeight: 'bold',
            padding: 10
          }}> OR </Text>
        </View>
        <View style={{ borderBottomColor: '#fff', borderBottomWidth: 1, flex: 1 }}></View>
      </View>
      <View style={{
        width: Dimensions.get('screen').width - 150, height: 50,
        alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-evenly'
      }}>
        <TouchableOpacity>
          <View style={{ backgroundColor: '#55ACEE', borderRadius: 30, width: 50, height: 50, flexDirection: 'row', justifyContent: 'center' }}>
            <Icon style={[{ color: '#fff', alignSelf: 'flex-end', marginLeft: 6 }]} size={35} name={'facebook-f'} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{ borderRadius: 30, width: 50, height: 50, backgroundColor: '#F44336', flexDirection: 'row', justifyContent: 'center' }}>
            <IconA style={[{ color: '#fff', alignSelf: 'center' }]} size={35} name={'googleplus'} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{ borderRadius: 30, width: 50, height: 50, backgroundColor: '#55ACEE', flexDirection: 'row', justifyContent: 'center' }}>
            <Icon style={[{ color: '#fff', alignSelf: 'center' }]} size={35} name={'twitter'} />
          </View>
        </TouchableOpacity>

      </View>
      <View style={{ alignSelf: 'center', flexDirection: 'row', margin: 10 }}>
        <Text style={{
          fontSize: 15,
          fontFamily: 'Muli',
          color: '#fff',
          marginHorizontal: -3,
          padding: 5
        }}>Don't have an account?</Text>
        <TouchableOpacity onPress={Signup} style={{ padding: 5 }}>
          <Text style={{
            fontSize: 15,
            fontFamily: 'Muli',
            color: '#FCAD0A',
            marginHorizontal: -3
          }}>Signup</Text>
        </TouchableOpacity>

      </View>
    </ImageBackground>
  )
};

const styles = StyleSheet.create({
  key: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    flexDirection: 'column'
    // backgroundColor: 'red'
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
    color: '#fff'
  },
  inputEmail: {
    margin: 2, borderColor: 'transparent', backgroundColor: 'transparent',
    borderBottomColor: 'white',
  },
  inputPass: {
    margin: 2, borderColor: 'transparent', backgroundColor: 'transparent',
    borderBottomColor: 'white'
  },
  inputText: { color: '#fff' },
  inputLabel: { color: '#fff' },
  inputCaption: { color: '#fff' },
  icon: {
    color: 'red',
    borderColor: 'transparent'
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
    marginLeft: 20
  },
  button: {
    backgroundColor: '#FCAD0A',
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
    fontWeight: 'bold'
  },
  form: {
    backgroundColor: 'transparent',
    width: Dimensions.get('window').width - 100,
    alignSelf: 'center',
  },
  label: {
    color: "#fff",
    backgroundColor: 'white'
  }
})