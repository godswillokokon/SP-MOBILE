import React, { useState, useCallback } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Image
} from 'react-native';
import {
  TopNavigationAction,
} from '@ui-kitten/components';
import TopNav from '../components/topNav';
import IconA from 'react-native-vector-icons/AntDesign';





export const ServicesScreen = ({ navigation }) => {



  const DATA_Categories = [
    {
      id: '1',
      title: 'Housing agent',
      subTitle: 'Need help in searching for your dream home?',
      imageUrl: 'https://res.cloudinary.com/ogcodes/image/upload/v1588506184/SP/agent.png',
      details: {
        title: 'Agents',
        info: 'Are you about to hire a Construction Services Provider? But you are not sure what offerings they have to make your home or office space more comfortable and luxurious? we are reliable, contact us today to undertake all your building projects for you at affordable prices. We offer timely and top notch services which will make your buildings stand out amongst the rest. Distance is not a barrier; we are just a phone call away. Do not hesitate to award us your building contracts.',
        imageUrl: 'https://res.cloudinary.com/ogcodes/image/upload/v1588506184/SP/agent.png',
        rate: 2000
      }

    },
    {
      id: '2',
      title: 'Movers',
      subTitle: 'Ready to relocate and need help moving?',
      imageUrl: 'https://res.cloudinary.com/ogcodes/image/upload/v1588507566/SP/mover.png',
      details: {
        title: 'Movers',
        info: 'Are you about to hire a Construction Services Provider? But you are not sure what offerings they have to make your home or office space more comfortable and luxurious? we are reliable, contact us today to undertake all your building projects for you at affordable prices. We offer timely and top notch services which will make your buildings stand out amongst the rest. Distance is not a barrier; we are just a phone call away. Do not hesitate to award us your building contracts.',
        imageUrl: 'https://res.cloudinary.com/ogcodes/image/upload/v1588507566/SP/mover.png',
        rate: 2200
      }

    },
    {
      id: '3',
      title: 'Construction',
      subTitle: 'Need a building plan? lets be your plug',
      imageUrl: 'https://res.cloudinary.com/ogcodes/image/upload/v1588506184/SP/consrt.png',
      details: {
        title: 'Contractors',
        info: 'Are you about to hire a Construction Services Provider? But you are not sure what offerings they have to make your home or office space more comfortable and luxurious? we are reliable, contact us today to undertake all your building projects for you at affordable prices. We offer timely and top notch services which will make your buildings stand out amongst the rest. Distance is not a barrier; we are just a phone call away. Do not hesitate to award us your building contracts.',
        imageUrl: 'https://res.cloudinary.com/ogcodes/image/upload/v1588506184/SP/consrt.png',
        rate: 68000
      }
    },
    {
      id: '4',
      title: 'Plumbering',
      subTitle: 'Need help in searching for your dream home?',
      imageUrl: 'https://res.cloudinary.com/ogcodes/image/upload/v1588506184/SP/plumber.png',
      details: {
        title: 'Plumbers',
        info: 'Are you about to hire a Construction Services Provider? But you are not sure what offerings they have to make your home or office space more comfortable and luxurious? we are reliable, contact us today to undertake all your building projects for you at affordable prices. We offer timely and top notch services which will make your buildings stand out amongst the rest. Distance is not a barrier; we are just a phone call away. Do not hesitate to award us your building contracts.',
        imageUrl: 'https://res.cloudinary.com/ogcodes/image/upload/v1588506184/SP/plumber.png',
        rate: 1520
      }
    },
  ];
  //top nav
  const navigateBack = () => {
    requestAnimationFrame(() => {
      navigation.navigate('Draw');

    })
  };
  const navigateService = (data) => {
    requestAnimationFrame(() => {

      navigation.navigate('Service', {
        details: data
      });

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
        Services
      </Text>
    </View >
  );

  function Categories({ id, title, subTitle, imageUrl, selected, onSelect, details }) {
    // console.log(details, "oo")
    return (

      <TouchableOpacity
        onPress={() => navigateService(details)}
        style={{
          marginVertical: 12,
          marginHorizontal: 5,
          width: 104,
          height: 126,
          borderRadius: 4,
          backgroundColor: '#fff',
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,

        }}
      >
        <View style={{ flex: 1, width: 100, height: 100, borderRadius: 4, alignSelf: 'center' }}>
          <Image style={{ flex: 1, width: 100, height: 100 }}
            source={{ uri: imageUrl }}

          />
          <View style={{
            flex: 1, backgroundColor: '#fff', flexDirection: 'column',
            justifyContent: 'flex-end', borderRadius: 6,
          }}>
            <View style={{ margin: 5 }}>
              <Text style={{
                fontSize: 12,
                color: '#0DABA8', lineHeight: 13
              }}>{title}</Text>
              <Text style={{
                fontSize: 10,
                color: '#828282', lineHeight: 14
              }}>{subTitle}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

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
    <SafeAreaView style={{ flex: 1 }}>
      <TopNav Title={Title} LeftAction={LeftAction} />
      <View style={{ flex: 1, alignSelf: 'center', marginVertical: 24, }}>
        <FlatList
          data={DATA_Categories}
          renderItem={({ item }) => (
            <Categories
              id={item.id}
              title={item.title}
              subTitle={item.subTitle}
              imageUrl={item.imageUrl}
              details={item.details}
              selected={!!selected.get(item.id)}
              onSelect={onSelect}
            />
          )}
          keyExtractor={item => item.id}
          extraData={selected}
          numColumns={3}
        />
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