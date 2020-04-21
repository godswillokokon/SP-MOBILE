import SplashScreen from 'react-native-splash-screen';
import React, { useState, useEffect } from 'react';
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
  ScrollView
} from 'react-native';
import {
  TopNavigation,
  TopNavigationAction,
  Input
} from '@ui-kitten/components';
import IconA from 'react-native-vector-icons/AntDesign';
import IconF from 'react-native-vector-icons/FontAwesome5';
import IconE from 'react-native-vector-icons/EvilIcons';
import IconI from 'react-native-vector-icons/Ionicons';
import { moderateScale } from 'react-native-size-matters';

const DATA = [
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
function Item({ id, title, subTitle, imageUrl, selected, onSelect }) {
  return (
    <TouchableOpacity
      onPress={() => onSelect(id)}
      style={{
        // flex: 1,
        // padding: 20,
        marginVertical: 2,
        marginHorizontal: 6,
        width: 100,
        borderRadius: 6,
        backgroundColor: 'transparent'
        // backgroundColor: 'rgba(0, 0, 0, 0.5)'

      }}
    // style={[
    //   styles.item,
    //   { backgroundColor: selected ? '#6e3b6e' : '#f9c2ff' },
    // ]}
    >
      <ImageBackground style={{ flex: 1, width: '100%', }}
        source={{ uri: 'https://res.cloudinary.com/ogcodes/image/upload/v1587369546/house.png' }}
        // source={{ uri: imageUrl }}
        // source={require('../assets/login.png')}
        imageStyle={{ borderRadius: 6, }}
      >
        <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.4)', flexDirection: 'column', justifyContent: 'flex-end', borderRadius: 6, }}>
          <View style={{ margin: 10 }}>
            <Text style={{
              fontSize: 14,
              color: '#fff',
            }}>{title}</Text>
            <Text style={{
              fontSize: 10,
              color: '#fff',
            }}>{subTitle}</Text>
          </View>

        </View>

      </ImageBackground>

    </TouchableOpacity>
  );
}

// asdfghjk
function FeaturedItem({ id, title, subTitle, imageUrl, selected, onSelect }) {
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
        // justifyContent: 'center',
        // alignItems: 'center',
        // alignContent: 'center'
      }}
    >
      <ImageBackground style={{ flex: 3, width: '100%', }}
        source={{ uri: 'https://res.cloudinary.com/ogcodes/image/upload/v1587369546/house.png' }}
        imageStyle={{ borderRadius: 6, }}
      >
        <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.4)', flexDirection: 'column', justifyContent: 'flex-end', borderRadius: 6, }}>
          <View style={{ margin: 10 }}>
            <Text style={{
              fontSize: 14,
              color: '#fff',
            }}>{title}</Text>
            <Text style={{
              fontSize: 10,
              color: '#fff',
            }}>{subTitle}</Text>
          </View>
        </View>
      </ImageBackground>
      <View style={{
        height: 60, borderBottomLeftRadius: 15, borderBottomRightRadius: 15, justifyContent: 'center',
        padding: 1,
      }}>
        <Text style={{ alignSelf: 'center', color: '#3A3A3A', fontSize: 13, fontWeight: 'bold', alignSelf: 'center', lineHeight: 18, width: 155, }}>Ancient Bungalo Ancient</Text>
        <Text style={{ color: '#828282', fontSize: 10, width: 155, marginLeft: -5 }}> <IconE style={[{ color: '#FCAD0A' }]} size={15} name={'location'} /> 45 ntoe asi layout , Calabar</Text>
        <View style={{ flexDirection: 'row', margin: 1 }}>
          <IconI style={[{ color: '#FCAD0A' }]} size={15} name={'md-star'} />
          <IconI style={[{ color: '#FCAD0A' }]} size={15} name={'md-star'} />
          <IconI style={[{ color: '#FCAD0A' }]} size={15} name={'md-star'} />
          <IconI style={[{ color: '#FCAD0A' }]} size={15} name={'md-star'} />
          <IconI style={[{ color: '#FCAD0A' }]} size={15} name={'md-star-outline'} />
          <Text style={{ color: '#828282', fontSize: 10 }}>  (234) Reviews</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

///fdgtgdhdhsjsjs


function PropertiesItem({ id, title, subTitle, imageUrl, selected, onSelect }) {
  return (
    <TouchableOpacity
      onPress={() => onSelect(id)}
      style={{
        marginVertical: 2,
        marginHorizontal: 6,
        width: Dimensions.get('window').width - 40,
        height: 200,
        // borderRadius: 20,
        borderRadius: 6,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.06,
        shadowRadius: 1.41,

        elevation: 1,
        padding: 4.5
      }}
    >
      <ImageBackground style={{ flex: 3, width: '100%', }}
        source={{ uri: 'https://res.cloudinary.com/ogcodes/image/upload/v1587405110/Rectangle_44.png' }}
        imageStyle={{ borderRadius: 6, }}
      >
        <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.4)', flexDirection: 'column', justifyContent: 'flex-end', borderRadius: 6, }}>

        </View>
      </ImageBackground>
      <View style={{
        borderBottomLeftRadius: 15, borderBottomRightRadius: 15,
        padding: 1, flex: 1
      }}>
        <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between', width: Dimensions.get('window').width - 55, }}>
          <Text style={{ alignSelf: 'flex-start', color: '#3A3A3A', fontSize: 13, fontWeight: 'bold', }}>Ancient Bungalo Ancient</Text>
          <Text style={{ alignSelf: 'flex-start', color: '#3A3A3A', fontSize: 13, fontWeight: 'bold', }}>₦360</Text>

        </View>
        <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between', width: Dimensions.get('window').width - 55, }}>
          <Text style={{ color: '#828282', fontSize: 13, width: 175, marginLeft: -5, }}>
            <IconE style={[{ color: '#FCAD0A' }]} size={15} name={'location'} />45 ntoe asi layout, Calabar</Text>
          <View style={{ flexDirection: 'row', margin: 1 }}>
            <IconI style={[{ color: '#FCAD0A' }]} size={15} name={'md-star'} />
            <IconI style={[{ color: '#FCAD0A' }]} size={15} name={'md-star'} />
            <IconI style={[{ color: '#FCAD0A' }]} size={15} name={'md-star'} />
            <IconI style={[{ color: '#FCAD0A' }]} size={15} name={'md-star'} />
            <IconI style={[{ color: '#FCAD0A' }]} size={15} name={'md-star-outline'} />
            <Text style={{ color: '#828282', fontSize: 10 }}>(234) Reviews</Text>
          </View>
        </View>
      </View>

    </TouchableOpacity>
  );
}




export const HomeScreen = ({ navigation }) => {
  const navigateBack = () => {
    requestAnimationFrame(() => {
      navigation.goBack();
    })
  };
  const SearchIcon = () => (
    <View>
      <IconA style={[{ color: '#FCAD0A' }]} size={18} name={'search1'} />
    </View>
  );


  const Left = () => (
    <IconF style={[{ color: '#FCAD0A', }]} name='bars' size={25} />
  );

  const LeftAction = () => (
    <TopNavigationAction icon={Left} onPress={navigateBack} style={[{ padding: 5 }]} />
  );
  const Title = () => (
    <View >
      <Image source={require('../assets/logo.png')} style={{
        width: 200, height: 50,
        transform: [{
          scaleX: moderateScale(0.5, 0.1)
        }, {
          scaleY: moderateScale(0.5, 0.1)
        }]
      }} />
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



  const [Svalue, setValueS] = useState('');

  const [selected, setSelected] = React.useState(new Map());

  const onSelect = React.useCallback(
    id => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));
      // { console.log(imageUrl) }
      setSelected(newSelected);
    },
    [selected],
  );
  return (
    <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
      <TopNavigation title={Title} alignment={'center'}
        accessoryLeft={LeftAction} accessoryRight={RightAction} />
      <ScrollView>
        <Input
          value={Svalue}
          placeholder='Search Locations'
          style={styles.inputLocations}
          textStyle={styles.inputText}
          onChangeText={setValueS}
          accessoryLeft={SearchIcon}
          textStyle={styles.placeholder}
          placeholderTextColor={'#BDBDBD'}
        />
        <View style={{ height: 255, margin: 5, }}>
          <View style={{ alignSelf: 'flex-start', width: 100, height: 30, flex: 0.1 }}>
            <Text style={{ fontSize: 15, color: '#3A3A3A', marginLeft: 5 }}>Categories</Text>
          </View>
          <View style={{ alignSelf: 'flex-end', width: 100, height: 30 }}>
            <TouchableOpacity>
              <Text style={{ fontSize: 13, color: '#FCAD0A', alignSelf: 'flex-end', flex: 0.1 }}>See all</Text>
            </TouchableOpacity>

          </View>
          <View style={{ flex: 1, }}>
            <FlatList
              data={DATA}
              horizontal
              renderItem={({ item }) => (
                <Item
                  id={item.id}
                  title={item.title}
                  subTitle={item.subTitle}
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
          <View style={{ alignSelf: 'flex-start', width: 200, height: 30, flex: 0.1 }}>
            <Text style={{ fontSize: 15, color: '#3A3A3A', marginLeft: 5 }}>Featured Estates</Text>
          </View>
          <View style={{ alignSelf: 'flex-end', width: 100, height: 30, flex: 0.1 }}>
            <TouchableOpacity>
              <Text style={{ fontSize: 13, color: '#FCAD0A', alignSelf: 'flex-end' }}>See all</Text>
            </TouchableOpacity>

          </View>
          <View style={{ flex: 1, }}>
            <FlatList
              data={DATA}
              horizontal
              renderItem={({ item }) => (
                <FeaturedItem
                  id={item.id}
                  title={item.title}
                  subTitle={item.subTitle}
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
          <View style={{ alignSelf: 'flex-start', width: 200, height: 30, flex: 0.1 }}>
            <Text style={{ fontSize: 15, color: '#3A3A3A', marginLeft: 5 }}>Featured Properties</Text>
          </View>
          <View style={{ alignSelf: 'flex-end', width: 100, height: 30, flex: 0.1, }}>
            <TouchableOpacity>
              <Text style={{ fontSize: 13, color: '#FCAD0A', alignSelf: 'flex-end', }}>See all</Text>
            </TouchableOpacity>

          </View>
          <View style={{ flex: 1, }}>
            <FlatList
              data={DATA}
              horizontal
              renderItem={({ item }) => (
                <PropertiesItem
                  id={item.id}
                  title={item.title}
                  subTitle={item.subTitle}
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
          <View style={{ alignSelf: 'flex-start', width: 200, height: 30, flex: 0.1 }}>
            <Text style={{ fontSize: 15, color: '#3A3A3A', marginLeft: 5 }}>Latest Real Estates</Text>
          </View>
          <View style={{ alignSelf: 'flex-end', width: 100, height: 30, flex: 0.1 }}>
            <TouchableOpacity>
              <Text style={{ fontSize: 13, color: '#FCAD0A', alignSelf: 'flex-end' }}>See all</Text>
            </TouchableOpacity>

          </View>
          <View style={{ flex: 1, }}>
            <FlatList
              data={DATA}
              horizontal
              renderItem={({ item }) => (
                <FeaturedItem
                  id={item.id}
                  title={item.title}
                  subTitle={item.subTitle}
                  selected={!!selected.get(item.id)}
                  onSelect={onSelect}
                />
              )}
              keyExtractor={item => item.id}
              extraData={selected}
            />
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>

  )
};

const styles = StyleSheet.create({
  inputLocations: {
    borderColor: '#f6f6f6',
    width: Dimensions.get('window').width - 50, alignSelf: 'center',
    margin: 10, textShadowColor: '0px 0px 2px rgba(0, 0, 0, 0.12)',
    borderRadius: 10

  },
  inputText: { color: '#3A3A3A' },
  placeholder: {
    fontSize: 12,
    fontFamily: 'Muli',
  },
  item: {
    borderRadius: 6,
    padding: 20,
    marginVertical: 2,
    marginHorizontal: 6,
  },
  title: {
    fontSize: 32,
  },
})