import React, { useState, useCallback } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import {
  TopNavigationAction,
} from '@ui-kitten/components';
import TopNav from '../components/topNav';
import IconA from 'react-native-vector-icons/AntDesign';




export const NotificationScreen = ({ navigation }) => {

  //top nav
  const navigateBack = () => {
    requestAnimationFrame(() => {
      navigation.goBack();

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
        Notification
      </Text>
    </View >
  );
  const Right = () => (
    <View >
      <Image source={require('../assets/houseLocation.png')} style={{
        width: 50, height: 50,
        transform: [{
          scaleX: moderateScale(0.5, 0.1)
        }, {
          scaleY: moderateScale(0.5, 0.1)
        }]
      }} />
    </View >
  );
  const RightAction = () => (
    <TopNavigationAction icon={Right} onPress={navigateBack} style={[{ padding: 5 }]} />
  );

  const DATA_Categories = [
    {
      id: '1',
      title: 'Mr Sean Jon has sold the Open roof duplex house at wall street',
      time: '34 mins ago',
      imageUrl: 'https://res.cloudinary.com/ogcodes/image/upload/v1587369546/house.png',
    },
    {
      id: '2',
      title: 'Open roof duplex house at wall street has been tken off the market',
      time: '2 days ago',
      imageUrl: 'https://res.cloudinary.com/ogcodes/image/upload/v1587369546/house.png',
    },
    {
      id: '3',
      title: 'Mr Sean Jon has sold the 4x4 land at calabar south wall street',
      time: '4 weeks ago',
      imageUrl: 'https://res.cloudinary.com/ogcodes/image/upload/v1587369546/house.png',
    },
  ];
  function Categories({ id, title, time, imageUrl, selected, onSelect }) {

    return (
      <TouchableOpacity
        // onPress={() => navigateProperty(details)}
        style={{
          marginVertical: 12,
          width: Dimensions.get('window').width - 20,
          height: 85,
          borderRadius: 6,
          backgroundColor: 'transparent',
          flex: 1,
          alignSelf: 'center',
          flexDirection: 'row',
          shadowColor: "#000",
          shadowOffset: {
            width: 10,
            height: 1,
          },
          shadowOpacity: 1.20,
          shadowRadius: 1.41,

          elevation: 1,
        }}>
        <View style={{ flex: 1.2, justifyContent: 'center', borderRadius: 6, backgroundColor: 'transparent' }}>
          <Image source={{ uri: imageUrl }} style={{
            flex: 0.7, borderRadius: 6,
            width: 66, height: 66, alignSelf: 'center'
          }} />
        </View>

        <View style={{ flex: 3, height: 60, alignSelf: 'center', marginHorizontal: 14 }}>
          <View style={{ flex: 2, }}>
            <Text style={{ color: '#3A3A3A', fontSize: 12, lineHeight: 16, width: 203, height: 40 }}>
              {title}
            </Text>
          </View>
          <View style={{ flex: 1, }}>
            <Text style={{ color: '#BDBDBD', fontSize: 12, width: 203, height: 20 }}>
              {time}
            </Text>
          </View>
        </View>

        <View style={{ flex: 0.4, borderRadius: 6, }}>
          <TouchableOpacity style={{ flex: 0.4, borderRadius: 6, }}>
            <Text style={{ color: '#0DABA8', alignSelf: 'center', fontSize: 18 }}>x</Text>
          </TouchableOpacity>
          <View style={{ flex: 1, borderRadius: 6, }}></View>
        </View>
      </TouchableOpacity>
    );
  }
  const [selected, setSelected] = useState(new Map());

  const onSelect = useCallback(
    id => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));
      setSelected(newSelected);
    },
    [selected],
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <TopNav Title={Title} LeftAction={LeftAction} RightAction={RightAction} />
      <View style={{ flex: 1, alignSelf: 'center', marginVertical: 24, }}>
        <View style={{
          justifyContent: 'center',
          flex: 1,
        }}>
          <FlatList
            data={DATA_Categories}
            renderItem={({ item }) => (
              <Categories
                id={item.id}
                title={item.title}
                time={item.time}
                imageUrl={item.imageUrl}
                selected={!!selected.get(item.id)}
                onSelect={onSelect}
              />
            )}
            keyExtractor={item => item.id}
            extraData={selected}
            numColumns={1}
          />
        </View>
      </View>
    </SafeAreaView >
  )

};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontFamily: 'Muli',
    alignSelf: 'center',
    color: '#3A3A3A',
    fontWeight: 'bold',
  },
})