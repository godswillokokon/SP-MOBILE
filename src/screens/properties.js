import React, { useState, useCallback } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import {
  TopNavigationAction,
  Input
} from '@ui-kitten/components';
import TopNav from '../components/topNav';
import IconA from 'react-native-vector-icons/AntDesign';
import IconI from 'react-native-vector-icons/Ionicons';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import IconM from 'react-native-vector-icons/MaterialIcons';
import IconF from 'react-native-vector-icons/FontAwesome';
import { Button, Layout, MenuItem, OverflowMenu } from '@ui-kitten/components';
import { moderateScale } from 'react-native-size-matters';



export const PropertiesScreen = ({ navigation }) => {
  //top nav
  const navigateBack = () => {
    requestAnimationFrame(() => {
      navigation.navigate('Draw');
      navigation.goBack();
    })
  };
  const navigateProperty = (data) => {
    // console.log(data.title, "props")
    requestAnimationFrame(() => {
      navigation.navigate('Property', {
        details: data
      });

    })
  };

  const DATA_Categories = [
    {
      id: '1',
      title: 'Modern Bungalo',
      addr: '45 ntoe asi layout , Calabar',
      imageUrl: 'https://res.cloudinary.com/ogcodes/image/upload/v1587369546/house.png',
      amount: '₦300,000 / Yearly',
      details: {
        id: '1',
        title: 'Modern Bungalo',
        addr: '45 ntoe asi layout , Calabar',
        imageUrls: ['https://res.cloudinary.com/ogcodes/image/upload/v1587405110/Rectangle_44.png', 'https://res.cloudinary.com/ogcodes/image/upload/v1587369546/house.png', 'https://res.cloudinary.com/ogcodes/image/upload/v1587405110/Rectangle_44.png', 'https://res.cloudinary.com/ogcodes/image/upload/v1587369546/house.png', 'https://res.cloudinary.com/ogcodes/image/upload/v1587405110/Rectangle_44.png'],
        amount: '₦300,000 / Yearly',
        coords: {
          latitude: '4.977207',
          longitude: '8.342142'
        },
        agent: {
          name: 'Anna Erim',
          organization: 'Lekki Housing Agent',
          phone: '08177024847',
          mail: 'anna@gmail.com',
          image: 'https://res.cloudinary.com/ogcodes/image/upload/v1581349441/e4i61gkcr7hvixpaqkgb.jpg'
        },
        info: 'It won’t be easy to click out of holiday mode in this stylishly contemporary residence for the modern pleasure-seeker. Cool, calm and sophisticated with a youthful edge, this functional home is enveloped in light and comfort. Crisp white walls, timber floors and high ceilings create a style as timeless as the sparkling ocean view. The calming sea vista, captured through the extensive use of glass, will help you forget your city stress.',
        facility: {
          Airconditioning: 4,
          Pool: 1,
          Bedrooms: 4,
          Bathrooms: 3,
          Carparks: 2,
        },
        overview: {
          yearBuilt: '2005',
          material: 'Brick',
          type: 'Rent',
          homeArea: '130sqtft',
          location: 'Calabar',
          dimension: '20x30 ft'
        },
        video: 'https://res.cloudinary.com/ogcodes/video/upload/v1581599586/cmf7rzcmwmbaxp1pwyec.mp4'
      },

    },
    {
      id: '2',
      title: 'Two story twister',
      addr: '45 ntoe asi layout , Calabar',
      imageUrl: 'https://res.cloudinary.com/ogcodes/image/upload/v1587369546/house.png',
      amount: '₦300,000 / Yearly',
      details: {
        id: '2',
        title: 'Two story twister',
        addr: '45 ntoe asi layout , Calabar',
        imageUrls: ['https://res.cloudinary.com/ogcodes/image/upload/v1587405110/Rectangle_44.png', 'https://res.cloudinary.com/ogcodes/image/upload/v1587369546/house.png', 'https://res.cloudinary.com/ogcodes/image/upload/v1587405110/Rectangle_44.png', 'https://res.cloudinary.com/ogcodes/image/upload/v1587369546/house.png', 'https://res.cloudinary.com/ogcodes/image/upload/v1587405110/Rectangle_44.png'],
        amount: '₦300,000 / Yearly',
        coords: {
          latitude: '4.977207',
          longitude: '8.342142'
        },
        agent: {
          name: 'Anna Erim',
          organization: 'Lekki Housing Agent',
          phone: '08177024847',
          mail: 'anna@gmail.com',
          image: 'https://res.cloudinary.com/ogcodes/image/upload/v1581349441/e4i61gkcr7hvixpaqkgb.jpg'
        },
        info: 'It won’t be easy to click out of holiday mode in this stylishly contemporary residence for the modern pleasure-seeker. Cool, calm and sophisticated with a youthful edge, this functional home is enveloped in light and comfort. Crisp white walls, timber floors and high ceilings create a style as timeless as the sparkling ocean view. The calming sea vista, captured through the extensive use of glass, will help you forget your city stress.',
        facility: {
          Airconditioning: 4,
          Pool: 1,
          Bedrooms: 4,
          Bathrooms: 3,
          Carparks: 2,
        },
        overview: {
          yearBuilt: '2005',
          material: 'Brick',
          type: 'Rent',
          homeArea: '130sqtft',
          location: 'Calabar',
          dimension: '20x30 ft'
        },
        video: 'https://res.cloudinary.com/ogcodes/video/upload/v1581599586/cmf7rzcmwmbaxp1pwyec.mp4'
      },
    },
    {
      id: '4',
      title: 'Modern Bungalo',
      addr: '45 ntoe asi layout , Calabar',
      imageUrl: 'https://res.cloudinary.com/ogcodes/image/upload/v1587369546/house.png',
      amount: '₦300,000 / Yearly',
      details: {
        id: '4',
        title: 'Modern Bungalo',
        addr: '45 ntoe asi layout , Calabar',
        imageUrls: ['https://res.cloudinary.com/ogcodes/image/upload/v1587405110/Rectangle_44.png', 'https://res.cloudinary.com/ogcodes/image/upload/v1587369546/house.png', 'https://res.cloudinary.com/ogcodes/image/upload/v1587405110/Rectangle_44.png', 'https://res.cloudinary.com/ogcodes/image/upload/v1587369546/house.png', 'https://res.cloudinary.com/ogcodes/image/upload/v1587405110/Rectangle_44.png'],
        amount: '₦300,000 / Yearly',
        coords: {
          latitude: '4.977207',
          longitude: '8.342142'
        },
        agent: {
          name: 'Anna Erim',
          organization: 'Lekki Housing Agent',
          phone: '08177024847',
          mail: 'anna@gmail.com',
          image: 'https://res.cloudinary.com/ogcodes/image/upload/v1581349441/e4i61gkcr7hvixpaqkgb.jpg'
        },
        info: 'It won’t be easy to click out of holiday mode in this stylishly contemporary residence for the modern pleasure-seeker. Cool, calm and sophisticated with a youthful edge, this functional home is enveloped in light and comfort. Crisp white walls, timber floors and high ceilings create a style as timeless as the sparkling ocean view. The calming sea vista, captured through the extensive use of glass, will help you forget your city stress.',
        facility: {
          Airconditioning: 4,
          Pool: 1,
          Bedrooms: 4,
          Bathrooms: 3,
          Carparks: 2,
        },
        overview: {
          yearBuilt: '2005',
          material: 'Brick',
          type: 'Rent',
          homeArea: '130sqtft',
          location: 'Calabar',
          dimension: '20x30 ft'
        },
        video: 'https://res.cloudinary.com/ogcodes/video/upload/v1581599586/cmf7rzcmwmbaxp1pwyec.mp4'
      },
    },
    {
      id: '5',
      title: 'Two story twister',
      addr: '45 ntoe asi layout , Calabar',
      imageUrl: 'https://res.cloudinary.com/ogcodes/image/upload/v1587369546/house.png',
      amount: '₦300,000 / Yearly',
      details: {
        id: '5',
        title: 'Two story twister',
        addr: '45 ntoe asi layout , Calabar',
        imageUrls: ['https://res.cloudinary.com/ogcodes/image/upload/v1587405110/Rectangle_44.png', 'https://res.cloudinary.com/ogcodes/image/upload/v1587369546/house.png', 'https://res.cloudinary.com/ogcodes/image/upload/v1587405110/Rectangle_44.png', 'https://res.cloudinary.com/ogcodes/image/upload/v1587369546/house.png', 'https://res.cloudinary.com/ogcodes/image/upload/v1587405110/Rectangle_44.png'],
        amount: '₦300,000 / Yearly',
        coords: {
          latitude: '4.977207',
          longitude: '8.342142'
        },
        agent: {
          name: 'Anna Erim',
          organization: 'Lekki Housing Agent',
          phone: '08177024847',
          mail: 'anna@gmail.com',
          image: 'https://res.cloudinary.com/ogcodes/image/upload/v1581349441/e4i61gkcr7hvixpaqkgb.jpg'
        },
        info: 'It won’t be easy to click out of holiday mode in this stylishly contemporary residence for the modern pleasure-seeker. Cool, calm and sophisticated with a youthful edge, this functional home is enveloped in light and comfort. Crisp white walls, timber floors and high ceilings create a style as timeless as the sparkling ocean view. The calming sea vista, captured through the extensive use of glass, will help you forget your city stress.',
        facility: {
          Airconditioning: 4,
          Pool: 1,
          Bedrooms: 4,
          Bathrooms: 3,
          Carparks: 2,
        },
        overview: {
          yearBuilt: '2005',
          material: 'Brick',
          type: 'Rent',
          homeArea: '130sqtft',
          location: 'Calabar',
          dimension: '20x30 ft'
        },
        video: 'https://res.cloudinary.com/ogcodes/video/upload/v1581599586/cmf7rzcmwmbaxp1pwyec.mp4'
      },
    },
    {
      id: '6',
      title: 'Modern Crip',
      addr: '45 ntoe asi layout , Calabar',
      imageUrl: 'https://res.cloudinary.com/ogcodes/image/upload/v1587369546/house.png',
      amount: '₦300,000 / Yearly',
      details: {
        id: '6',
        title: 'Modern Crip',
        addr: '45 ntoe asi layout , Calabar',
        imageUrls: ['https://res.cloudinary.com/ogcodes/image/upload/v1587405110/Rectangle_44.png', 'https://res.cloudinary.com/ogcodes/image/upload/v1587369546/house.png', 'https://res.cloudinary.com/ogcodes/image/upload/v1587405110/Rectangle_44.png', 'https://res.cloudinary.com/ogcodes/image/upload/v1587369546/house.png', 'https://res.cloudinary.com/ogcodes/image/upload/v1587405110/Rectangle_44.png'],
        amount: '₦300,000 / Yearly',
        coords: {
          latitude: '4.977207',
          longitude: '8.342142'
        },
        agent: {
          name: 'Anna Erim',
          organization: 'Lekki Housing Agent',
          phone: '08177024847',
          mail: 'anna@gmail.com',
          image: 'https://res.cloudinary.com/ogcodes/image/upload/v1581349441/e4i61gkcr7hvixpaqkgb.jpg'
        },
        info: 'It won’t be easy to click out of holiday mode in this stylishly contemporary residence for the modern pleasure-seeker. Cool, calm and sophisticated with a youthful edge, this functional home is enveloped in light and comfort. Crisp white walls, timber floors and high ceilings create a style as timeless as the sparkling ocean view. The calming sea vista, captured through the extensive use of glass, will help you forget your city stress.',
        facility: {
          Airconditioning: 4,
          Pool: 1,
          Bedrooms: 4,
          Bathrooms: 3,
          Carparks: 2,
        },
        overview: {
          yearBuilt: '2005',
          material: 'Brick',
          type: 'Rent',
          homeArea: '130sqtft',
          location: 'Calabar',
          dimension: '20x30 ft'
        },
        video: 'https://res.cloudinary.com/ogcodes/video/upload/v1581599586/cmf7rzcmwmbaxp1pwyec.mp4'
      },
    },
  ];

  function Categories({ id, title, addr, imageUrl, selected, onSelect, amount, details }) {

    return (
      <TouchableOpacity
        onPress={() => navigateProperty(details)}
        style={{
          marginVertical: 6,
          marginHorizontal: 6,
          width: Dimensions.get('window').width - 15,
          height: 173,
          borderRadius: 6,
          backgroundColor: 'transparent',
          flex: 1,
          alignSelf: 'center'
        }}
      >
        <ImageBackground style={{ flex: 1, width: '100%', }}
          source={{ uri: imageUrl }}
          imageStyle={{ borderRadius: 6, }}
        >
          <View style={{
            flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.4)', flexDirection: 'column',
            justifyContent: 'flex-end', borderRadius: 6,
          }}>

            <View style={{
              margin: 20, justifyContent: 'space-between', flexDirection: 'column',

            }}>
              <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', marginVertical: 3 }}>
                {title}
              </Text>
              <Text style={{ color: '#fff', fontSize: 12, marginVertical: 3 }}>
                {addr}
              </Text>
              <Text style={{ color: '#fff', fontSize: 14, fontWeight: 'bold', marginVertical: 3 }}>
                {amount}
              </Text>
              <View style={{ flexDirection: 'row', marginVertical: 3 }}>
                <IconI style={[{ color: '#00959E' }]} size={13} name={'md-star'} />
                <IconI style={[{ color: '#00959E' }]} size={13} name={'md-star'} />
                <IconI style={[{ color: '#00959E' }]} size={13} name={'md-star'} />
                <IconI style={[{ color: '#00959E' }]} size={13} name={'md-star'} />
                <IconI style={[{ color: '#00959E' }]} size={13} name={'md-star-outline'} />
              </View>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  }

  const Left = () => (
    <IconA style={[{ color: '#00959E', }]} name='arrowleft' size={25} />
  );

  const LeftAction = () => (
    <TopNavigationAction icon={Left} onPress={navigateBack} style={[{ padding: 5 }]} />
  );
  const Title = () => (
    <View >
      <Text style={styles.title}>
        Properties
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
  //sort
  const [selectedIndexSort, setSelectedIndexSort] = useState(null);
  const [visibleSort, setVisibleSort] = useState(false);

  const onItemSelectSort = (SortIndex) => {
    setSelectedIndexSort(SortIndex);
    setVisibleSort(false);
  };

  const renderSortToggle = () => (
    <TouchableOpacity onPress={() => setVisibleSort(true)} style={{ flexDirection: 'row', alignItems: 'center', }}>
      <IconMC style={[{ color: '#828282', }]} name='sort-descending' size={20} />
      <Text style={{ fontSize: 11, marginHorizontal: 2, color: '#828282' }}>Sort By</Text>
      <IconA style={[{ color: '#828282', top: 2 }]} name='down' size={13} />
    </TouchableOpacity>

  );
  //filter
  const [selectedIndexFilter, setSelectedIndexFilter] = useState(null);
  const [visibleFilter, setVisibleFilter] = useState(false);

  const onItemSelectFilter = (FilterIndex) => {
    setSelectedIndexFilter(FilterIndex);
    setVisibleFilter(false);
  };

  const renderFilterToggle = () => (
    <TouchableOpacity onPress={() => setVisibleFilter(true)} style={{ flexDirection: 'row', alignItems: 'center', }}>
      <IconA style={[{ color: '#828282', }]} name='filter' size={20} />
      <Text style={{ fontSize: 11, marginHorizontal: 2, color: '#828282', }}>Filter</Text>
      <IconA style={[{ color: '#828282', top: 2 }]} name='down' size={13} />
    </TouchableOpacity>

  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNav Title={Title} LeftAction={LeftAction} RightAction={RightAction} />
      <View style={{
        flexDirection: 'row', justifyContent: 'space-between',
        width: Dimensions.get('window').width - 15,
        alignSelf: 'center', marginTop: 16
      }}>
        <OverflowMenu
          anchor={renderSortToggle}
          visible={visibleSort}
          selectedIndex={selectedIndexSort}
          placement='top start'
          onSelect={onItemSelectSort}
          backdropStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          onBackdropPress={() => setVisibleSort(false)}>
          <MenuItem title='Rentals' />
          <MenuItem title='Sale' />
          <MenuItem title='Mortgage' />
        </OverflowMenu>

        <OverflowMenu
          anchor={renderFilterToggle}
          visible={visibleFilter}
          selectedIndex={selectedIndexFilter}
          placement='top end'
          onSelect={onItemSelectFilter}
          backdropStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          onBackdropPress={() => setVisibleFilter(false)}>
          <MenuItem title='Sale' />
          <MenuItem title='Rent' />
          <MenuItem title='Sale' />
        </OverflowMenu>

      </View>
      <View style={styles.MainContainer}>
        <FlatList
          data={DATA_Categories}
          renderItem={({ item }) => (
            <Categories
              id={item.id}
              title={item.title}
              addr={item.addr}
              amount={item.amount}
              imageUrl={item.imageUrl}
              details={item.details}
              selected={!!selected.get(item.id)}
              onSelect={onSelect}
            />
          )}
          keyExtractor={item => item.id}
          extraData={selected}
          numColumns={1}
        />
      </View>
    </SafeAreaView>
  )

};

const styles = StyleSheet.create({
  container: {
    minHeight: 144,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Muli',
    alignSelf: 'center',
    color: '#3A3A3A',
    fontWeight: 'bold',
  },
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    paddingTop: 11,
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
})

