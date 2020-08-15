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
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import {REQUEST_VERIFICATION, GetUserData} from '../redux/actions/userActions';
import {BeAgent} from '../redux/actions/agentActions';
import {useSelector, useDispatch} from 'react-redux';
import {
  TopNavigationAction,
  IndexPath,
  Layout,
  Select,
  SelectItem,
  Text,
  Input,
} from '@ui-kitten/components';
import TopNav from '../components/topNav';
import IconA from 'react-native-vector-icons/AntDesign';
import IconF from 'react-native-vector-icons/FontAwesome5';
import IconM from 'react-native-vector-icons/MaterialIcons';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFF from 'react-native-vector-icons/Fontisto';

export const BeAgentScreen = ({navigation}) => {
  useEffect(() => {
    dispatch(GetUserData());
  }, [dispatch]);
  const {user} = useSelector((state) => state.user);
  const dispatch = useDispatch();

  //nav
  const navigateBack = () => {
    requestAnimationFrame(() => {
      navigation.navigate('Tabs');
    });
  };
  const Left = () => <IconA color={'#00959E'} name="arrowleft" size={25} />;

  const LeftAction = () => (
    <TopNavigationAction
      icon={Left}
      onPress={navigateBack}
      style={styles.leftAction}
    />
  );
  const Title = () => (
    <View>
      <Text style={styles.title}>Become an Agent</Text>
    </View>
  );
  const verifyUser = (email, setLoad) => {
    requestAnimationFrame(() => {
      dispatch(REQUEST_VERIFICATION(email, setLoad));
    });
  };
  // console.log(user);
  const applyAgent = (data, setLoad) => {
    // console.log(data, 'push');
    requestAnimationFrame(() => {
      setLoad(true);
      if (data.id_type === 'Select Card Type' || undefined) {
        ToastAndroid.show(
          'Select a card type',
          ToastAndroid.LONG,
          ToastAndroid.TOP,
          25,
          50,
        );
        setTimeout(() => {
          setLoad(false);
        }, 5000);
      } else if (data.id_number === '' || null) {
        ToastAndroid.show(
          'ID serial number should not be empty',
          ToastAndroid.LONG,
          ToastAndroid.TOP,
          25,
          50,
        );
        setTimeout(() => {
          setLoad(false);
        }, 5000);
      } else if (data.occupation === '' || null) {
        ToastAndroid.show(
          'Occupation  should not be empty',
          ToastAndroid.LONG,
          ToastAndroid.TOP,
          25,
          50,
        );
        setTimeout(() => {
          setLoad(false);
        }, 5000);
      } else if (data.marital_status === '' || null) {
        ToastAndroid.show(
          'Marital status  should not be empty',
          ToastAndroid.LONG,
          ToastAndroid.TOP,
          25,
          50,
        );
        setTimeout(() => {
          setLoad(false);
        }, 5000);
      } else if (data.state_of_origin === '' || null) {
        ToastAndroid.show(
          'State of origin  image should not be empty',
          ToastAndroid.LONG,
          ToastAndroid.TOP,
          25,
          50,
        );
        setTimeout(() => {
          setLoad(false);
        }, 5000);
      } else if (data.lga === '' || null) {
        ToastAndroid.show(
          'LGA should not be empty',
          ToastAndroid.LONG,
          ToastAndroid.TOP,
          25,
          50,
        );
        setTimeout(() => {
          setLoad(false);
        }, 5000);
      } else if (data.gender === '' || null) {
        ToastAndroid.show(
          'Gender should not be empty',
          ToastAndroid.LONG,
          ToastAndroid.TOP,
          25,
          50,
        );
        setTimeout(() => {
          setLoad(false);
        }, 5000);
      } else {
        dispatch(BeAgent(data, setLoad));
        // console.log(data);
      }
    });
  };

  const [lga, setLga] = useState('');
  const [idNum, setIdNum] = useState('');
  const [occupation, setOccupation] = useState('');
  const [marital, setMarital] = useState('');
  const [gender, setGender] = useState('');
  const [state, setState] = useState('');
  const [load, setLoad] = useState(false);

  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
  const cards = [
    'Select Card Type',
    'Voters Card',
    'National ID',
    'National Passport',
    'Drivers Licence ',
  ];

  const displayValue = cards[selectedIndex.row];


  const renderOption = (title) => <SelectItem title={title} />;

  const data = {
    id_type: displayValue,
    id_number: idNum,
    occupation,
    marital_status: marital,
    state_of_origin: state,
    lga,
    gender,
  };

  //icons

  const IDIcon = () => (
    <View>
      <IconF color={'#828282'} size={18} name={'id-card'} />
    </View>
  );
  const IDText = () => (
    <Text style={styles.leftText}>Local Government Area</Text>
  );

  const IDNumIcon = () => (
    <View>
      <IconMC color={'#828282'} size={20} name={'card-bulleted-outline'} />
    </View>
  );
  const IDCardNumberText = () => (
    <Text style={styles.leftText}>ID Card Number</Text>
  );

  const OccupationIcon = () => (
    <View>
      <IconM color={'#828282'} size={20} name={'work'} />
    </View>
  );
  const OccupationText = () => <Text style={styles.leftText}>Occupation</Text>;
  const MaritalIcon = () => (
    <View>
      <IconA color={'#828282'} size={20} name={'home'} />
    </View>
  );
  const MaritalText = () => <Text style={styles.leftText}>Marital Status</Text>;
  const StateIcon = () => (
    <View style={{}}>
      <IconM color={'#828282'} size={20} name={'flag'} />
    </View>
  );
  const StateText = () => <Text style={styles.leftText}>State of Origin</Text>;

  const GenderIcon = () => (
    <View>
      <IconFF color={'#828282'} size={20} name={'intersex'} />
    </View>
  );
  const GenderText = () => <Text style={styles.leftText}>Gender</Text>;
  // console.log(user);

  return (
    <SafeAreaView style={styles.container}>
      <TopNav Title={Title} LeftAction={LeftAction} />

      <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
        {!user.verified ? (
          <TouchableOpacity
            onPress={() => verifyUser(user.email, setLoad)}
            style={{
              backgroundColor: '#FCAD0A',
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

        <KeyboardAvoidingView style={styles.key} enabled>
          <Layout style={styles.form}>
            <Select
              style={styles.input}
              placeholder="Default"
              value={displayValue}
              selectedIndex={selectedIndex}
              onSelect={(index) => setSelectedIndex(index)}>
              {cards.map(renderOption)}
            </Select>
            <Input
              value={idNum}
              style={styles.input}
              textStyle={styles.inputText}
              onChangeText={setIdNum}
              accessoryRight={IDNumIcon}
              label={IDCardNumberText}
              accessibilityLabel="ID Number"
              placeholder="45675837373848"
              disabled={load}
              keyboardType="number-pad"
            />
            <Input
              value={occupation}
              style={styles.input}
              textStyle={styles.inputText}
              onChangeText={setOccupation}
              accessoryRight={OccupationIcon}
              label={OccupationText}
              accessibilityLabel="Occupation"
              placeholder="Plumber"
              disabled={load}
            />
            <Input
              value={marital}
              style={styles.input}
              textStyle={styles.inputText}
              onChangeText={setMarital}
              accessoryRight={MaritalIcon}
              label={MaritalText}
              accessibilityLabel="Marital"
              placeholder="Married"
              disabled={load}
            />
            <Input
              value={gender}
              style={styles.input}
              textStyle={styles.inputText}
              onChangeText={setGender}
              accessoryRight={GenderIcon}
              label={GenderText}
              accessibilityLabel="Gender"
              placeholder="Male"
              disabled={load}
            />

            <Input
              value={state}
              style={styles.input}
              textStyle={styles.inputText}
              onChangeText={setState}
              accessoryRight={StateIcon}
              label={StateText}
              accessibilityLabel="State of Origin"
              placeholder="Sokoto"
              disabled={load}
            />
            <Input
              value={lga}
              style={styles.input}
              textStyle={styles.inputText}
              onChangeText={setLga}
              accessoryRight={IDIcon}
              label={IDText}
              accessibilityLabel="LGA"
              placeholder="Sokoto"
              disabled={load}
            />
            <ActivityIndicator animating={load} size="large" color="#00959E" />
          </Layout>
          <TouchableOpacity
            onPress={() => applyAgent(data, setLoad)}
            style={styles.button}>
            <Text style={styles.buttonText}>Apply</Text>
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
    marginTop: 45,
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
    width: 50,
    height: 50,
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
  inputText: {color: '#3A3A3A', fontSize: 16, fontWeight: '400', right: 20},
  inputTextDisabled: {
    color: '#B4B4B4',
    fontSize: 16,
    fontWeight: '400',
    right: 20,
  },
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
