import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
} from 'react-native';
import {useSelector} from 'react-redux';
import {TopNavigationAction, Layout, Text, Input} from '@ui-kitten/components';
import {Avatar} from 'react-native-paper';
import TopNav from '../components/topNav';
import IconA from 'react-native-vector-icons/AntDesign';
import IconF from 'react-native-vector-icons/FontAwesome5';
import IconM from 'react-native-vector-icons/MaterialIcons';

export const AccountScreen = ({navigation}) => {
  useEffect(() => {}, []);
  const {user} = useSelector((state) => state.user);
  //nav
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
  const Left = () => <IconF color={'#00959E'} name="bars" size={25} />;

  const LeftAction = () => (
    <TopNavigationAction
      icon={Left}
      onPress={openDrawer}
      style={styles.leftAction}
    />
  );
  const Title = () => (
    <View>
      <Text style={styles.title}>Account</Text>
    </View>
  );
  console.log(user);
  const [FullName, setFullName] = useState(user.name);
  const [Email, setEmail] = useState(user.email);
  const [Phone, setPhone] = useState(user.phone);
  const [Address, setAddress] = useState(user.address);
  const [BirthDay, setBirthDay] = useState(user.dob);
  const [Pic, setPic] = useState(user.picture);

  //icons

  const FullNameIcon = () => (
    <View>
      <IconA color={'#828282'} size={20} name={'contacts'} />
    </View>
  );
  const FullNameText = () => <Text style={styles.leftText}>Full Name</Text>;

  const EmailIcon = () => (
    <View>
      <IconF color={'#828282'} size={20} name={'envelope'} />
    </View>
  );
  const EmailText = () => <Text style={styles.leftText}>Email</Text>;

  const PhoneIcon = () => (
    <View>
      <IconA color={'#828282'} size={20} name={'phone'} />
    </View>
  );
  const PhoneText = () => <Text style={styles.leftText}>Phone</Text>;
  const AddressIcon = () => (
    <View>
      <IconA color={'#828282'} size={20} name={'home'} />
    </View>
  );
  const AddressText = () => <Text style={styles.leftText}>Address</Text>;
  const BirthdayIcon = () => (
    <View>
      <IconF color={'#828282'} size={20} name={'birthday-cake'} />
    </View>
  );
  const BirthdayText = () => <Text style={styles.leftText}>BirthDay</Text>;

  return (
    <SafeAreaView style={styles.container}>
      <TopNav Title={Title} LeftAction={LeftAction} />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
        <View style={styles.avatar}>
          <Avatar.Image
            source={{
              uri: Pic,
            }}
            size={120}
          />
          <TouchableOpacity style={styles.avatarBtn}>
            <IconF style={styles.avatarBtnIcon} name="camera" size={20} />
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
              accessibilityLabel="Phone"
            />
            <Input
              value={Address}
              style={styles.input}
              textStyle={styles.inputText}
              onChangeText={setAddress}
              accessoryRight={AddressIcon}
              label={AddressText}
              accessibilityLabel="Address"
            />
            <Input
              value={BirthDay}
              style={styles.input}
              textStyle={styles.inputText}
              onChangeText={setBirthDay}
              accessoryRight={BirthdayIcon}
              label={BirthdayText}
              accessibilityLabel="BirthDay"
            />
            <TouchableOpacity
              onPress={ChangePassword}
              style={styles.changepassword}>
              <IconM color={'#828282'} size={20} name={'lock-outline'} />
              <Text style={styles.changepasswordText}>Change Password</Text>
            </TouchableOpacity>
          </Layout>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scroll: {
    flex: 1,
    alignSelf: 'center',
    marginVertical: 24,
  },
  leftAction: {
    padding: 5,
  },
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
  avatar: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  avatarBtn: {
    backgroundColor: 'rgba(0, 149, 158, 0.5)',
    position: 'absolute',
    width: 41,
    height: 41,
    borderRadius: 100,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  avatarBtnIcon: {
    color: '#fff',
    alignSelf: 'center',
  },
  changepassword: {
    flexDirection: 'row',
    marginVertical: 15,
  },
  changepasswordText: {
    marginHorizontal: 5,
    fontSize: 16,
    color: '#828282',
    fontStyle: 'italic',
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
  leftText: {
    fontSize: 15,
    color: '#3A3A3A',
  },
});
