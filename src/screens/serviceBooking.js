import React, {useState, useCallback} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import {
  TopNavigationAction,
  Layout,
  MenuItem,
  OverflowMenu,
  Input,
  Datepicker,
  Text,
} from '@ui-kitten/components';
import TopNav from '../components/topNav';
import IconA from 'react-native-vector-icons/AntDesign';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import IconE from 'react-native-vector-icons/Entypo';

export const ServiceBookingScreen = ({navigation}) => {
  // console.log(details, "details");

  //top nav
  const navigateBack = () => {
    requestAnimationFrame(() => {
      navigation.goBack();
    });
  };
  const Left = () => (
    <IconA style={[{color: '#00959E'}]} name="arrowleft" size={25} />
  );

  const LeftAction = () => (
    <TopNavigationAction
      icon={Left}
      onPress={navigateBack}
      style={[{padding: 5}]}
    />
  );
  const Title = () => (
    <View>
      <Text style={styles.title}>Book Service</Text>
    </View>
  );
  const [FullName, setFullName] = useState('Godswill Effiong Okokon');
  const [Address, setAddress] = useState(
    '15 Harcourt Street, Calabar, Nigeria',
  );
  const service = navigation.state.params.details;
  const [Description, setDescription] = useState('');
  const [date, setDate] = useState(new Date());

  //icons

  const FullNameIcon = () => (
    <View>
      <IconA style={[{color: '#828282'}]} size={20} name={'contacts'} />
    </View>
  );
  const FullNameText = () => (
    <Text style={{fontSize: 15, color: '#3A3A3A', marginBottom: 10}}>
      Full Name
    </Text>
  );

  const AddressIcon = () => (
    <View>
      <IconE style={[{color: '#828282'}]} size={20} name={'address'} />
    </View>
  );
  const AddressText = () => (
    <Text style={{fontSize: 15, color: '#3A3A3A', marginBottom: 10}}>
      Address
    </Text>
  );

  const ServiceIcon = () => (
    <View>
      <IconMC style={[{color: '#828282'}]} size={20} name={'worker'} />
    </View>
  );
  const ServiceText = () => (
    <Text style={{fontSize: 15, color: '#3A3A3A', marginBottom: 10}}>
      Required Service
    </Text>
  );
  const ServiceTextArea = () => (
    <Text style={{fontSize: 15, color: '#3A3A3A', marginBottom: 10}}>
      Service Description
    </Text>
  );
  //Hours
  const [selectedIndexHours, setSelectedIndexSort] = useState(null);
  const [visibleHours, setVisibleHours] = useState(false);

  const onItemSelectHours = (SortIndex) => {
    setSelectedIndexSort(SortIndex);
    setVisibleHours(false);
  };

  const renderHoursToggle = () => (
    <TouchableOpacity
      onPress={() => setVisibleHours(true)}
      style={{
        width: 75,
        height: 37,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#D9D8D8',
        borderWidth: 1,
        justifyContent: 'center',
      }}>
      <Text
        style={{
          fontSize: 11,
          marginHorizontal: 2,
          color: '#828282',
          fontWeight: 'bold',
        }}>
        Hours
      </Text>
      <IconA style={[{color: '#0DABA8', top: 2}]} name="down" size={13} />
    </TouchableOpacity>
  );

  //Time
  const [selectedIndexTime, setSelectedIndexTime] = useState(null);
  const [visibleTime, setVisibleTime] = useState(false);

  const onItemSelectTime = (SortIndex) => {
    setSelectedIndexTime(SortIndex);
    setVisibleTime(false);
  };

  const renderTimeToggle = () => (
    <TouchableOpacity
      onPress={() => setVisibleTime(true)}
      style={{
        width: 75,
        height: 37,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#D9D8D8',
        borderWidth: 1,
        justifyContent: 'center',
      }}>
      <Text
        style={{
          fontSize: 11,
          marginHorizontal: 2,
          color: '#828282',
          fontWeight: 'bold',
        }}>
        Time
      </Text>
      <IconA style={[{color: '#0DABA8', top: 2}]} name="down" size={13} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <TopNav Title={Title} LeftAction={LeftAction} />
      <View style={{flex: 1, alignSelf: 'center', marginVertical: 24}}>
        <ScrollView showsVerticalScrollIndicator={false}>
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
                value={Address}
                style={styles.input}
                textStyle={styles.inputText}
                onChangeText={setAddress}
                accessoryRight={AddressIcon}
                label={AddressText}
                accessibilityLabel="Address"
              />
              <Input
                value={service}
                style={styles.input}
                textStyle={styles.inputText}
                accessoryRight={ServiceIcon}
                label={ServiceText}
                accessibilityLabel="Service"
                disabled
              />
              <Text>Selected date: {date.toLocaleDateString()}</Text>
              <Datepicker
                date={date}
                onSelect={(nextDate) => setDate(nextDate)}
                placement="top"
                backdropStyle={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}
                style={{marginVertical: 10}}
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginVertical: 10,
                }}>
                <OverflowMenu
                  anchor={renderHoursToggle}
                  visible={visibleHours}
                  selectedIndex={selectedIndexHours}
                  placement="top start"
                  onSelect={onItemSelectHours}
                  backdropStyle={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}
                  onBackdropPress={() => setVisibleHours(false)}>
                  <MenuItem title="1hr" />
                  <MenuItem title="2hr" />
                  <MenuItem title="3hr" />
                  <MenuItem title="4hr" />
                  <MenuItem title="5hr" />
                </OverflowMenu>
                <OverflowMenu
                  anchor={renderTimeToggle}
                  visible={visibleTime}
                  selectedIndex={selectedIndexTime}
                  placement="top start"
                  onSelect={onItemSelectTime}
                  backdropStyle={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}
                  onBackdropPress={() => setVisibleTime(false)}>
                  <MenuItem title="12 AM" />
                  <MenuItem title="1 AM" />
                  <MenuItem title="2 AM" />
                  <MenuItem title="3 AM" />
                  <MenuItem title="4 AM" />
                  <MenuItem title="5 AM" />
                  <MenuItem title="6 AM" />
                  <MenuItem title="7 AM" />
                  <MenuItem title="8 AM" />
                  <MenuItem title="9 AM" />
                  <MenuItem title="10 AM" />
                  <MenuItem title="11 AM" />
                  <MenuItem title="12 PM" />
                  <MenuItem title="1 PM" />
                  <MenuItem title="2 PM" />
                  <MenuItem title="3 PM" />
                  <MenuItem title="4 PM" />
                  <MenuItem title="5 PM" />
                  <MenuItem title="6 PM" />
                  <MenuItem title="7 PM" />
                  <MenuItem title="8 PM" />
                  <MenuItem title="9 PM" />
                  <MenuItem title="10 PM" />
                  <MenuItem title="11 PM" />
                </OverflowMenu>
              </View>
              <Input
                value={Description}
                onChangeText={setDescription}
                style={styles.inputArea}
                // size='large'
                textStyle={styles.inputTextArea}
                // accessoryRight={ServiceIcon}
                label={ServiceTextArea}
                accessibilityLabel="Service Description"
                // onFocus
              />
              {/* <TextInput style={styles.inputArea} /> */}
            </Layout>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Book</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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

  input: {
    marginVertical: 5,
    backgroundColor: '#fff',
  },
  inputArea: {
    marginVertical: 5,
    backgroundColor: '#fff',
  },
  inputTextArea: {
    color: '#3A3A3A',
    fontSize: 10,
    fontWeight: 'bold',
    height: 100,
    width: Dimensions.get('window').width - 20,
  },
  inputText: {color: '#3A3A3A', fontSize: 16, fontWeight: 'bold'},
  fullNameLabel: {color: '#fff'},
  inputCaption: {color: '#fff'},

  button: {
    justifyContent: 'center',
    width: 98,
    height: 40,
    backgroundColor: '#0DABA8',
    borderRadius: 4,
    alignSelf: 'center',
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
});
