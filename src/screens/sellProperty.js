import React, { useState, useCallback } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  TextInput
} from 'react-native';
import {
  TopNavigationAction,
  Layout, MenuItem, OverflowMenu, Input, Datepicker, Text
} from '@ui-kitten/components';
import TopNav from '../components/topNav';
import IconA from 'react-native-vector-icons/AntDesign';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import IconE from 'react-native-vector-icons/Entypo';
import { UnsignedUpload } from '../../react-native-cloudinary-image-picker'




export const SellPropertyScreen = ({ navigation }) => {

  //top nav
  const navigateBack = () => {
    requestAnimationFrame(() => {
      navigation.navigate('Draw');

    })
  };
  const Left = () => (
    <IconA style={[{ color: '#00959E', }]} name='arrowleft' size={25} />
  );

  const LeftAction = () => (
    <TopNavigationAction icon={Left} onPress={navigateBack} style={[{ padding: 5 }]} />
  );
  const Title = () => (
    <View >
      <Text style={styles.title}>
        Sell Property
      </Text>
    </View >
  );
  const [PropertyFullName, setPropertyFullName] = useState('');
  const [Address, setAddress] = useState('15 Harcourt Street, Calabar, Nigeria');
  const service = 'navigation.state.params.details';
  const [Description, setDescription] = useState('');
  const [date, setDate] = useState(new Date());

  //icons

  const PropertyFullNameIcon = () => (
    <View>
      <IconA style={[{ color: '#828282' }]} size={20} name={'contacts'} />
    </View>
  );
  const PropertyFullNameText = () => (
    <Text style={{ fontSize: 15, color: '#3A3A3A', marginBottom: 10 }}>
      Property Name
    </Text>
  );

  const AddressIcon = () => (
    <View>
      <IconE style={[{ color: '#828282' }]} size={20} name={'address'} />
    </View>
  );
  const AddressText = () => (
    <Text style={{ fontSize: 15, color: '#3A3A3A', marginBottom: 10 }}>
      Address
    </Text>
  );

  const ServiceIcon = () => (
    <View>
      <IconMC style={[{ color: '#828282' }]} size={20} name={'worker'} />
    </View>
  );
  const ServiceText = () => (
    <Text style={{ fontSize: 15, color: '#3A3A3A', marginBottom: 10 }}>
      Required Service
    </Text>
  );
  const ServiceTextArea = () => (
    <Text style={{ fontSize: 15, color: '#3A3A3A', marginBottom: 10 }}>
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
    <TouchableOpacity onPress={() => setVisibleHours(true)} style={{
      height: 37, flexDirection: 'row', alignItems: 'center',
      justifyContent: 'flex-end', backgroundColor: '#fff'
    }}>
      <IconA style={[{ color: '#0DABA8', margin: 13 }]} name='down' size={13} />
    </TouchableOpacity>

  );



  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNav Title={Title} LeftAction={LeftAction} />
      <View style={{ flex: 1, alignSelf: 'center', marginVertical: 24, }}>
        <ScrollView showsVerticalScrollIndicator={false}>

          <KeyboardAvoidingView style={styles.key} behavior="padding" enabled>
            <Layout style={styles.form}>
              <Input
                value={PropertyFullName}
                style={styles.input}
                textStyle={styles.inputText}
                onChangeText={setPropertyFullName}
                accessoryRight={PropertyFullNameIcon}
                label={PropertyFullNameText}
                accessibilityLabel='Full name'
              />
              <Text style={{ fontSize: 15, color: '#3A3A3A', marginBottom: 10 }}>
                Property Type
              </Text>
              <OverflowMenu
                anchor={renderHoursToggle}
                visible={visibleHours}
                selectedIndex={selectedIndexHours}
                placement='top end'
                onSelect={onItemSelectHours}
                backdropStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                onBackdropPress={() => setVisibleHours(false)}>
                <MenuItem title='Rental' />
                <MenuItem title='Sale' />
                <MenuItem title='Mortgage' />
              </OverflowMenu>
              <Text style={{ fontSize: 15, color: '#3A3A3A', marginBottom: 10 }}>
                Attach Images
              </Text>
              <UnsignedUpload
                CLOUDINARY_URL="https://api.cloudinary.com/v1_1/ogcodes/upload"
                CLOUDINARY_CLOUD_NAME="ogcodes"
                CLOUDINARY_UPLOAD_PRESET="ogcodes"
                onUploadingStart={e => console.log(e)}
                onSuccess={e => console.log(e)}
                onError={e => console.log(e)}
              />

              <Input
                value={Description}
                onChangeText={setDescription}
                style={styles.inputArea}
                // size='large'
                textStyle={styles.inputTextArea}
                // accessoryRight={ServiceIcon}
                label={ServiceTextArea}
                accessibilityLabel='Property Description'
              // onFocus
              />
              <Text style={{ fontSize: 15, color: '#3A3A3A', marginBottom: 10 }}>
                Category
              </Text>
              <OverflowMenu
                anchor={renderHoursToggle}
                visible={visibleHours}
                selectedIndex={selectedIndexHours}
                placement='top end'
                onSelect={onItemSelectHours}
                backdropStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                onBackdropPress={() => setVisibleHours(false)}>
                <MenuItem title='Rental' />
                <MenuItem title='Sale' />
                <MenuItem title='Mortgage' />
              </OverflowMenu>
              <Text style={{ fontSize: 15, color: '#3A3A3A', marginBottom: 10 }}>
                Facilities
              </Text>
              <OverflowMenu
                anchor={renderHoursToggle}
                visible={visibleHours}
                selectedIndex={selectedIndexHours}
                placement='top end'
                onSelect={onItemSelectHours}
                backdropStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                onBackdropPress={() => setVisibleHours(false)}>
                <MenuItem title='Rental' />
                <MenuItem title='Sale' />
                <MenuItem title='Mortgage' />
              </OverflowMenu>
            </Layout>
            <TouchableOpacity style={styles.button} ><Text style={styles.buttonText}>Upload</Text></TouchableOpacity>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </SafeAreaView >
  )

};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    // fontFamily: 'Muli',
    alignSelf: 'center',
    color: '#3A3A3A',
    fontWeight: 'bold',
  },
  key: {
    flex: 1,
    flexDirection: 'column',
  },

  input: {
    marginVertical: 5, backgroundColor: '#fff',
  },
  inputArea: {
    marginVertical: 5, backgroundColor: '#fff',
  },
  inputTextArea: {
    color: '#3A3A3A', fontSize: 10,
    fontWeight: 'bold', height: 100, width: Dimensions.get('window').width - 20,

  },
  inputText: { color: '#3A3A3A', fontSize: 16, fontWeight: 'bold', },
  PropertyFullNameLabel: { color: '#fff' },
  inputCaption: { color: '#fff' },

  button: {
    justifyContent: 'center', width: 98, height: 40, backgroundColor: "#0DABA8", borderRadius: 4, alignSelf: 'center', marginVertical: 40
  },
  buttonText: {
    fontSize: 16,
    // fontFamily: 'Muli',
    alignSelf: 'center',
    color: '#fff',
    fontWeight: 'bold'
  },
  form: {
    backgroundColor: 'transparent',
    width: Dimensions.get('window').width - 50,
    alignSelf: 'center',
  },
})