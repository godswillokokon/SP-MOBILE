import React, {useState, useCallback} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import {TopNavigationAction, Input} from '@ui-kitten/components';
import TopNav from '../components/topNav';
import IconF from 'react-native-vector-icons/FontAwesome';
import IconA from 'react-native-vector-icons/AntDesign';


export const SearchScreen = ({navigation}) => {
  //top nav
  const openDrawer = () => {
    requestAnimationFrame(() => {
      navigation.openDrawer();
    });
  };
  const Left = () => (
    <IconF style={[{color: '#00959E'}]} name="bars" size={25} />
  );

  const LeftAction = () => (
    <TopNavigationAction
      icon={Left}
      onPress={openDrawer}
      style={[{padding: 5}]}
    />
  );
  const Title = () => (
    <View>
      <Text style={styles.title}>Search</Text>
    </View>
  );
  const SearchIcon = () => (
    <View>
      <IconA style={[{color: '#00959E'}]} size={18} name={'search1'} />
    </View>
  );
  const [Svalue, setValueS] = useState('');

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff'}}>
      <TopNav Title={Title} LeftAction={LeftAction} />
      <ScrollView>
        <Input
          value={Svalue}
          placeholder="Discover Properties"
          style={styles.inputLocations}
          textStyle={styles.inputText}
          onChangeText={setValueS}
          accessoryLeft={SearchIcon}
          placeholderTextColor={'#BDBDBD'}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontFamily: 'Muli',
    alignSelf: 'center',
    color: '#3A3A3A',
    fontWeight: 'bold',
  },
  inputLocations: {
    borderColor: '#f6f6f6',
    width: Dimensions.get('window').width - 50,
    alignSelf: 'center',
    margin: 10,
    textShadowColor: '0px 0px 2px rgba(0, 0, 0, 0.12)',
    borderRadius: 10,
  },
  inputText: {color: '#3A3A3A'},
});
