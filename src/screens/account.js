/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import {
  UpdateUserData,
  REQUEST_VERIFICATION,
} from '../redux/actions/userActions';
import {useSelector, useDispatch} from 'react-redux';
import {TopNavigationAction, Layout, Text, Input} from '@ui-kitten/components';
import {Avatar} from 'react-native-paper';
import TopNav from '../components/topNav';
import IconA from 'react-native-vector-icons/AntDesign';
import IconF from 'react-native-vector-icons/FontAwesome5';
import IconM from 'react-native-vector-icons/MaterialIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import ImagePicker from 'react-native-image-picker';

export const AccountScreen = ({navigation}) => {
  useEffect(() => {}, []);
  const {user} = useSelector((state) => state.user);
  const dispatch = useDispatch();

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
  const verifyUser = (email) => {
    requestAnimationFrame(() => {
      REQUEST_VERIFICATION(email);
    });
  };
  // console.log(user);
  const updateUser = (data) => {
    // console.log(data, 'push');
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
      } else if (BirthDay === '' || null) {
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
      } else if (data.picture === '' || null) {
        ToastAndroid.show(
          'Profile image should not be empty',
          ToastAndroid.LONG,
          ToastAndroid.TOP,
          25,
          50,
        );
        setTimeout(() => {
          setload(false);
        }, 5000);
      } else {
        dispatch(UpdateUserData(data));
      }
    });
  };
  const onChange = (event, selectedDate) => {
    event.type === 'neutralButtonPressed' ? setDate(new Date()) : null;

    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    setDob(fullDate);
    setBirthDay(fullDate);
  };

  const showMode = () => {
    setShow(true);
  };

  const showDatepicker = () => {
    requestAnimationFrame(() => {
      showMode('date');
    });
  };
  const [name, setFullName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [address, setAddress] = useState(user.address);
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [dob, setDob] = useState('');
  const [BirthDay, setBirthDay] = useState(user.dob);
  const [picture, setPic] = useState(user.picture);
  const [load, setload] = useState(false);

  const selectPhotoTapped = () => {
    const options = {
      title: 'Select Photo',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      // console.log('Response = ', response);
      if (response.didCancel) {
        // console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
        ToastAndroid.show(
          `${response.error}`,
          ToastAndroid.LONG,
          ToastAndroid.TOP,
        );
      } else {
        const uri = response.uri;
        const type = response.type;
        const name = response.fileName;
        const source = {
          uri,
          type,
          name,
        };
        cloudinaryUpload(source);
        console.log(source, 'scr');
      }
    });
  };
  const cloudinaryUpload = (picCloud) => {
    console.log(picCloud.uri, 'in');
    const data = new FormData();
    data.append('file', picCloud);
    data.append('upload_preset', 'ogcodes');
    data.append('cloud_name', 'ogcodes');
    fetch('https://api.cloudinary.com/v1_1/ogcodes/upload', {
      method: 'post',
      body: data,
    })
      .then((res) => res.json())
      .then((img) => {
        setPic(img.secure_url);
        console.log(img.secure_url, 'almost');
        console.log(picture, 'done');
      })
      .catch((err) =>
        ToastAndroid.show(
          `${err}`,
          ToastAndroid.LONG,
          ToastAndroid.TOP,
          25,
          50,
        ),
      );
  };
  // const _method = 'PATCH';
  const data = {
    email,
    name,
    dob: BirthDay,
    picture,
    phone,
    address,
  };

  let curr_date = date.getDate();
  let curr_month = date.getMonth() + 1;
  let month = curr_month;
  if (curr_month <= 9) {
    month = `0${curr_month}`;
  }
  let curr_year = date.getFullYear();
  let fullDate = `${curr_date}-${month}-${curr_year}`;

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
    <View style={{}}>
      <IconF color={'#828282'} size={20} name={'birthday-cake'} />
    </View>
  );
  const BirthdayText = () => <Text style={styles.leftText}>BirthDay</Text>;

  return (
    <SafeAreaView style={styles.container}>
      <TopNav Title={Title} LeftAction={LeftAction} />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
        {!user.verified ? (
          <TouchableOpacity
            onPress={verifyUser(email)}
            style={{
              backgroundColor: '#FF3864',
              width: Dimensions.get('window').width - 50,
              alignSelf: 'center',
              borderRadius: 10,
              padding: 8,
              marginTop: 20,
            }}>
            <Text
              style={{
                fontSize: 16,
                alignSelf: 'center',
                color: '#fff',
                fontWeight: 'bold',
              }}>
              VERIFY ACCOUNT!!!
            </Text>
          </TouchableOpacity>
        ) : null}
        <View style={styles.avatar}>
          <Avatar.Image
            source={{
              uri: picture,
            }}
            size={120}
          />
          <TouchableOpacity
            onPress={selectPhotoTapped}
            style={styles.avatarBtn}>
            <IconF style={styles.avatarBtnIcon} name="camera" size={20} />
          </TouchableOpacity>
        </View>

        <KeyboardAvoidingView style={styles.key} behavior="padding" enabled>
          <Layout style={styles.form}>
            <Input
              value={name}
              style={styles.input}
              textStyle={styles.inputText}
              onChangeText={setFullName}
              accessoryRight={FullNameIcon}
              label={FullNameText}
              accessibilityLabel="Full name"
            />
            <Input
              value={email}
              style={styles.input}
              textStyle={styles.inputText}
              onChangeText={setEmail}
              accessoryRight={EmailIcon}
              label={EmailText}
              accessibilityLabel="Email"
              disabled
            />
            <Input
              value={phone}
              style={styles.input}
              textStyle={styles.inputText}
              onChangeText={setPhone}
              accessoryRight={PhoneIcon}
              label={PhoneText}
              accessibilityLabel="Phone"
            />
            <Input
              value={address}
              style={styles.input}
              textStyle={styles.inputText}
              onChangeText={setAddress}
              accessoryRight={AddressIcon}
              label={AddressText}
              accessibilityLabel="Address"
            />
            <View>
              <View>
                <Input
                  // value={date.toLocaleDateString()}
                  value={BirthDay}
                  style={styles.input}
                  textStyle={styles.inputText}
                  onChangeText={setBirthDay}
                  accessoryRight={BirthdayIcon}
                  label={BirthdayText}
                  accessibilityLabel="BirthDay"
                  disabled
                />
              </View>
              {/* {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  display="default"
                  onChange={onChange}
                  neutralButtonLabel="clear"
                  maximumDate={new Date()}
                />
              )} */}
            </View>
            <TouchableOpacity
              onPress={ChangePassword}
              style={styles.changepassword}>
              <IconM color={'#828282'} size={20} name={'lock-outline'} />
              <Text style={styles.changepasswordText}>Change Password</Text>
            </TouchableOpacity>
            <ActivityIndicator animating={load} size="large" color="#00959E" />
          </Layout>
          <TouchableOpacity
            onPress={() => updateUser(data)}
            style={styles.button}>
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
  },
  leftAction: {
    padding: 5,
  },
  title: {
    fontSize: 18,
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
    marginVertical: 24,
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
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 16,
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
