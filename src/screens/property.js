import React, { useState, useCallback } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import {
  Avatar,
} from 'react-native-paper';
import {
  TopNavigationAction,
} from '@ui-kitten/components';
import { moderateScale } from 'react-native-size-matters';

import TopNav from '../components/topNav';
import IconA from 'react-native-vector-icons/AntDesign';
import IconI from 'react-native-vector-icons/Ionicons';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import IconM from 'react-native-vector-icons/MaterialIcons';
import IconF from 'react-native-vector-icons/FontAwesome';
import PropertyImages from '../components/propertyImages';



export const PropertyScreen = ({ navigation }) => {
  let header = navigation.state.params.details.title;
  let body = navigation.state.params.details;
  let images = navigation.state.params.details.imageUrls;

  //top nav
  const navigateBack = () => {
    requestAnimationFrame(() => {
      // navigation.goBack();
      navigation.navigate('Properties');


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
        {header}
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
        <View style={{ height: 200, }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} fadingEdgeLength={0} >
            {
              images.map((image, i) => {
                return (
                  <PropertyImages data={image} key={i} index={i} title={body.title} address={body.addr} amount={body.amount} selected={selected} onSelect={onSelect} />
                )
              })
            }
          </ScrollView>
        </View>
        <View style={{ flexDirection: 'row', alignSelf: 'center', marginVertical: -5 }}>
          <TouchableOpacity style={{
            width: 50, height: 50, borderRadius: 100,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 4,
            backgroundColor: '#fff',
            marginHorizontal: 31,
            justifyContent: 'center'
          }}>
            <Image style={{
              width: 100, height: 100,
              transform: [{
                scaleX: moderateScale(0.3, 0.1)
              }, {
                scaleY: moderateScale(0.3, 0.1)
              }],
              alignSelf: 'center'
            }}
              source={require('../assets/mapIcon.png')}
              imageStyle={{}}
            />

          </TouchableOpacity>
          <TouchableOpacity style={{
            width: 50, height: 50, borderRadius: 100,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 4,
            backgroundColor: '#fff',
            marginHorizontal: 31,
            justifyContent: 'center',
            // alignItems: 'center'
            alignContent: 'center'
          }}>
            <Image style={{
              width: 100, height: 100,
              transform: [{
                scaleX: moderateScale(0.3, 0.1)
              }, {
                scaleY: moderateScale(0.3, 0.1)
              }],
              alignSelf: 'center',
              // backgroundColor: 'red'
            }}
              source={require('../assets/videoIcon.png')}
            />
          </TouchableOpacity>

        </View>
        <View style={{ flexDirection: 'row', alignSelf: 'center', marginVertical: 8, }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#3A3A3A', width: 80, marginHorizontal: 16, }}>Map View</Text>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#3A3A3A', width: 80, marginHorizontal: 16, }}>Live Video</Text>
        </View>
        <View style={{
          width: Dimensions.get('window').width,
          borderColor: '#E5E5E5',
          borderWidth: 1,
          marginVertical: 18,
          height: 80,
          justifyContent: 'center',
          flexDirection: 'row',

        }}>

          <View style={{ flexDirection: 'row', justifyContent: 'center', alignSelf: 'center' }}>
            <Avatar.Image
              source={{
                uri: 'https://res.cloudinary.com/ogcodes/image/upload/v1581349441/e4i61gkcr7hvixpaqkgb.jpg'
              }}
              size={50}
            />
            <View style={{ alignSelf: 'center', marginLeft: 10 }}>
              <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#3A3A3A' }}>Godswill Effiong Okokon</Text>
              <Text style={{ fontSize: 12, color: '#828282' }}>Lekki Housing Agent</Text>
            </View>
          </View>
          <View style={{
            flexDirection: 'row', justifyContent: 'center', alignSelf: 'center'
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

        <View style={{ width: Dimensions.get('window').width - 20, alignSelf: 'center' }}>
          <Text style={{ color: '#3A3A3A', fontSize: 14, fontWeight: 'bold' }}>
            Property Details
          </Text>
          <Text style={{ color: '#828282', fontSize: 10, lineHeight: 14, marginVertical: 9 }}>
            It won’t be easy to click out of holiday mode in this stylishly contemporary residence for the modern pleasure-seeker. Cool, calm and sophisticated with a youthful edge, this functional home is enveloped in light and comfort. Crisp white walls, timber floors and high ceilings create a style as timeless as the sparkling ocean view. The calming sea vista, captured through the extensive use of glass, will help you forget your city stress.
          </Text>
        </View>

        <View style={{ width: Dimensions.get('window').width - 20, alignSelf: 'center' }}>
          <Text style={{ color: '#3A3A3A', fontSize: 14, fontWeight: 'bold' }}>
            Property Facilities
          </Text>
          <View style={{ marginVertical: 9, flexDirection: 'row', justifyContent: 'space-evenly' }}>

            <View>
              <IconMC style={[{ color: '#313131', alignSelf: 'center' }]} name='air-conditioner' size={23} />
              <Text style={{ color: '#000000', fontSize: 10, marginVertical: 2 }}>Air-conditioning</Text>
            </View>
            <View>
              <IconM style={[{ color: '#313131', alignSelf: 'center' }]} name='pool' size={25} />
              <Text style={{ color: '#000000', fontSize: 10, marginVertical: 2 }}>Pool</Text>
            </View>
            <View>
              <IconI style={[{ color: '#313131', alignSelf: 'center' }]} name='ios-bed' size={25} />
              <Text style={{ color: '#000000', fontSize: 10, marginVertical: 2, }}>6 bedrooms</Text>
            </View>
            <View>
              <IconF style={[{ color: '#313131', alignSelf: 'center' }]} name='bath' size={25} />
              <Text style={{ color: '#000000', fontSize: 10, marginVertical: 2 }}>6 bathrooms</Text>
            </View>
            <View>
              <IconMC style={[{ color: '#313131', alignSelf: 'center' }]} name='garage' size={25} />
              <Text style={{ color: '#000000', fontSize: 10, marginVertical: 2 }}>2 carparks</Text>
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