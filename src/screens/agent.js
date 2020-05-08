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
  ImageBackground,
  ScrollView
} from 'react-native';
import {
  Avatar,
} from 'react-native-paper';
import {
  TopNavigationAction,
} from '@ui-kitten/components';
import TopNav from '../components/topNav';
import IconA from 'react-native-vector-icons/AntDesign';
import IconI from 'react-native-vector-icons/Ionicons';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import IconM from 'react-native-vector-icons/MaterialIcons';
import IconF from 'react-native-vector-icons/FontAwesome';
import IconE from 'react-native-vector-icons/EvilIcons';
// import { ScrollView } from 'react-native-gesture-handler';




export const AgentScreen = ({ navigation }) => {
  const DATA_LatestEstates = [
    {
      id: '1',
      title: 'Rent',
      subTitle: '200 appartments for rent',
      imageUrl: 'https://res.cloudinary.com/ogcodes/image/upload/v1587369546/house.png'
    },
    {
      id: '2',
      title: 'Sale',
      subTitle: '200 appartments for sale',
      imageUrl: 'https://res.cloudinary.com/ogcodes/image/upload/v1587369546/house.png'
    },
    {
      id: '3',
      title: 'Rent',
      subTitle: '200 appartments for rent',
      imageUrl: 'https://res.cloudinary.com/ogcodes/image/upload/v1587369546/house.png'
    },
    {
      id: '4',
      title: 'Rent',
      subTitle: '200 appartments for rent',
      imageUrl: 'https://res.cloudinary.com/ogcodes/image/upload/v1587369546/house.png'
    },
    {
      id: '5',
      title: 'Sale',
      subTitle: '200 appartments for sale',
      imageUrl: 'https://res.cloudinary.com/ogcodes/image/upload/v1587369546/house.png'
    },
    {
      id: '6',
      title: 'Rent',
      subTitle: '200 appartments for rent',
      imageUrl: 'https://res.cloudinary.com/ogcodes/image/upload/v1587369546/house.png'
    },
  ];

  function LatestEstates({ id, title, subTitle, imageUrl, selected, onSelect }) {
    return (
      <TouchableOpacity
        onPress={() => onSelect(id)}
        style={{
          marginVertical: 2,
          marginHorizontal: 6,
          width: 170,
          height: 200,
          borderRadius: 6,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.06,
          shadowRadius: 1.41,
          elevation: 1,
          padding: 4.5,
        }}
      >
        <ImageBackground style={{ flex: 3, width: '100%', }}
          // source={{ uri: imageUrl }}
          imageStyle={{ borderRadius: 6, }}
        >
          <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.4)', flexDirection: 'column', justifyContent: 'flex-end', borderRadius: 6, }}>

          </View>
        </ImageBackground>
        <View style={{
          height: 60, borderBottomLeftRadius: 15, borderBottomRightRadius: 15, justifyContent: 'center',
          padding: 1,
        }}>
          <Text style={{
            alignSelf: 'center', color: '#3A3A3A', fontSize: 13,
            fontWeight: 'bold', alignSelf: 'center', lineHeight: 18, width: 155,
          }}>Ancient Bungalo Ancient</Text>
          <Text style={{ color: '#828282', fontSize: 10, width: 155, marginLeft: -5 }}>
            <IconE style={[{ color: '#00959E' }]} size={15} name={'location'} /> 45 ntoe asi layout , Calabar
        </Text>
          <View style={{ flexDirection: 'row', margin: 1 }}>
            <IconI style={[{ color: '#00959E' }]} size={15} name={'md-star'} />
            <IconI style={[{ color: '#00959E' }]} size={15} name={'md-star'} />
            <IconI style={[{ color: '#00959E' }]} size={15} name={'md-star'} />
            <IconI style={[{ color: '#00959E' }]} size={15} name={'md-star'} />
            <IconI style={[{ color: '#00959E' }]} size={15} name={'md-star-outline'} />
            <Text style={{ color: '#828282', fontSize: 10 }}>  (234) Reviews</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
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
        Agent Profile
      </Text>
    </View >
  );

  //selected

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
      <TopNav Title={Title} LeftAction={LeftAction} />
      <ScrollView style={{ flex: 1, alignSelf: 'center', marginVertical: 24, }}>
        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', }}>
          <View style={{ borderColor: '#0DABA8', borderWidth: 3, borderRadius: 100 }}>
            <Avatar.Image
              source={{
                uri: 'https://res.cloudinary.com/ogcodes/image/upload/v1581349441/e4i61gkcr7hvixpaqkgb.jpg'
              }}
              size={90}
            />
          </View>

        </View>
        <Text style={{ color: '#3A3A3A', fontSize: 16, alignSelf: 'center', marginVertical: 8 }}>Rose Erim</Text>
        <Text style={{ color: '#828282', fontSize: 12, alignSelf: 'center', marginVertical: 4 }}>Housing Agent</Text>
        <View>
          <View style={{
            flexDirection: 'row', justifyContent: 'center', alignSelf: 'center', marginVertical: 4

          }}>
            <TouchableOpacity style={{
              marginHorizontal: 14,
              width: 35, height: 35, borderRadius: 100,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              justifyContent: 'center',
              elevation: 4,
              backgroundColor: '#fff',
            }}>
              <IconMC style={[{ color: '#3DA917', alignSelf: 'center' }]} name='phone' size={23} />

            </TouchableOpacity>
            <TouchableOpacity style={{
              marginHorizontal: 14,
              width: 35, height: 35, borderRadius: 100,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              justifyContent: 'center',
              elevation: 4,
              backgroundColor: '#fff',
            }}>
              <IconMC style={[{ color: '#F14336', alignSelf: 'center' }]} name='gmail' size={23} />
            </TouchableOpacity>
          </View>
        </View>


        <View
          // onPress={navigateAgent}
          style={{
            width: Dimensions.get('window').width,
            borderColor: '#E5E5E5',
            borderWidth: 1,
            marginVertical: 18,
            height: 58,
            justifyContent: 'space-around',
            flexDirection: 'row',

          }}>

          <View style={{ flexDirection: 'column', justifyContent: 'center', alignSelf: 'center' }}>
            <Text style={{ fontSize: 14, color: '#828282', alignSelf: 'center' }}>Properties</Text>
            <Text style={{ fontSize: 12, color: '#828282', alignSelf: 'center' }}>69</Text>
          </View>

          <View style={{
            flexDirection: 'column', justifyContent: 'center', alignSelf: 'center'
          }}>
            <Text style={{ fontSize: 14, color: '#828282', alignSelf: 'center' }}>Ratings</Text>
            <View style={{ flexDirection: 'row', marginVertical: 3 }}>
              <IconI style={[{ color: '#00959E' }]} size={12} name={'md-star'} />
              <IconI style={[{ color: '#00959E' }]} size={12} name={'md-star'} />
              <IconI style={[{ color: '#00959E' }]} size={12} name={'md-star'} />
              <IconI style={[{ color: '#00959E' }]} size={12} name={'md-star'} />
              <IconI style={[{ color: '#00959E' }]} size={12} name={'md-star-outline'} />
            </View>
          </View>
        </View>

        <View style={{ height: 255, margin: 5, }}>
          <View style={{ alignSelf: 'flex-start', width: 200, height: 30, flex: 0.1 }}>
            <Text style={{ fontSize: 15, color: '#3A3A3A', marginLeft: 5 }}>Properties</Text>
          </View>
          <View style={{ alignSelf: 'flex-end', width: 100, height: 30, flex: 0.1 }}>
            <TouchableOpacity>
              <Text style={{ fontSize: 13, color: '#00959E', alignSelf: 'flex-end' }}>See all ></Text>
            </TouchableOpacity>

          </View>
          <View style={{ flex: 1, }}>
            <FlatList
              data={DATA_LatestEstates}
              horizontal
              renderItem={({ item }) => (
                <LatestEstates
                  id={item.id}
                  title={item.title}
                  subTitle={item.subTitle}
                  imageUrl={item.imageUrl}
                  selected={!!selected.get(item.id)}
                  onSelect={onSelect}
                />
              )}
              keyExtractor={item => item.id}
              extraData={selected}
            />
          </View>
        </View>

        <View style={{ height: 255, margin: 5, }}>
          <View style={{ alignSelf: 'flex-start', width: 200, height: 30, flex: 0.2 }}>
            <Text style={{ fontSize: 15, color: '#3A3A3A', marginLeft: 5 }}>Reviews</Text>
          </View>
          <View style={{ flexDirection: 'row', marginVertical: 4, width: Dimensions.get('window').width - 20, alignSelf: 'center' }}>
            <Avatar.Image
              source={{
                uri: 'https://res.cloudinary.com/ogcodes/image/upload/v1581349441/e4i61gkcr7hvixpaqkgb.jpg'
              }}
              size={50}
            />
            <View style={{ alignSelf: 'center', marginLeft: 10 }}>
              <Text style={{ fontSize: 12, color: '#3A3A3A', width: 280, lineHeight: 17, height: 35 }}>Reliable, efficient and trust worthy. it was a pleasure working with her</Text>
              <View style={{ flexDirection: 'row', }}>
                <IconI style={[{ color: '#00959E' }]} size={10} name={'md-star'} />
                <IconI style={[{ color: '#00959E' }]} size={10} name={'md-star'} />
                <IconI style={[{ color: '#00959E' }]} size={10} name={'md-star'} />
                <IconI style={[{ color: '#00959E' }]} size={10} name={'md-star'} />
                <IconI style={[{ color: '#00959E' }]} size={10} name={'md-star-outline'} />
              </View>
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginVertical: 4, width: Dimensions.get('window').width - 20, alignSelf: 'center' }}>
            <Avatar.Image
              source={{
                uri: 'https://res.cloudinary.com/ogcodes/image/upload/v1581349441/e4i61gkcr7hvixpaqkgb.jpg'
              }}
              size={50}
            />
            <View style={{ alignSelf: 'center', marginLeft: 10 }}>
              <Text style={{ fontSize: 12, color: '#3A3A3A', width: 280, lineHeight: 17, height: 35 }}>Reliable, efficient and trust worthy. it was a pleasure working with her</Text>
              <View style={{ flexDirection: 'row', }}>
                <IconI style={[{ color: '#00959E' }]} size={10} name={'md-star'} />
                <IconI style={[{ color: '#00959E' }]} size={10} name={'md-star'} />
                <IconI style={[{ color: '#00959E' }]} size={10} name={'md-star'} />
                <IconI style={[{ color: '#00959E' }]} size={10} name={'md-star'} />
                <IconI style={[{ color: '#00959E' }]} size={10} name={'md-star-outline'} />
              </View>
            </View>
          </View>
        </View>

      </ScrollView>
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