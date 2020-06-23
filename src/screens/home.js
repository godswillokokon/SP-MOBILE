/* eslint-disable react-native/no-inline-styles */
import React, {useState, useCallback, useEffect} from 'react';
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
  ScrollView,
} from 'react-native';
import {TopNavigationAction} from '@ui-kitten/components';
import {useSelector, useDispatch} from 'react-redux';
import {GetUserData} from '../redux/actions/userActions';
import IconA from 'react-native-vector-icons/AntDesign';
import IconF from 'react-native-vector-icons/FontAwesome5';
import IconE from 'react-native-vector-icons/EvilIcons';
import IconI from 'react-native-vector-icons/Ionicons';
import {moderateScale} from 'react-native-size-matters';
import TopNav from '../components/topNav';

const DATA_Categories = [
  {
    id: '1',
    title: 'Rent',
    subTitle: '200 appartments for rent',
    imageUrl:
      'https://res.cloudinary.com/ogcodes/image/upload/v1587369546/house.png',
  },
  {
    id: '2',
    title: 'Sale',
    subTitle: '200 appartments for sale',
    imageUrl:
      'https://res.cloudinary.com/ogcodes/image/upload/v1587369546/house.png',
  },
  {
    id: '3',
    title: 'Rent',
    subTitle: '200 appartments for rent',
    imageUrl:
      'https://res.cloudinary.com/ogcodes/image/upload/v1587369546/house.png',
  },
  {
    id: '4',
    title: 'Rent',
    subTitle: '200 appartments for rent',
    imageUrl:
      'https://res.cloudinary.com/ogcodes/image/upload/v1587369546/house.png',
  },
  {
    id: '5',
    title: 'Sale',
    subTitle: '200 appartments for sale',
    imageUrl:
      'https://res.cloudinary.com/ogcodes/image/upload/v1587369546/house.png',
  },
  {
    id: '6',
    title: 'Rent',
    subTitle: '200 appartments for rent',
    imageUrl:
      'https://res.cloudinary.com/ogcodes/image/upload/v1587369546/house.png',
  },
];
const DATA_RealEstates = [
  {
    id: '1',
    title: 'Rent',
    subTitle: '200 appartments for rent',
    imageUrl:
      'https://res.cloudinary.com/ogcodes/image/upload/v1587369546/house.png',
  },
  {
    id: '2',
    title: 'Sale',
    subTitle: '200 appartments for sale',
    imageUrl:
      'https://res.cloudinary.com/ogcodes/image/upload/v1587369546/house.png',
  },
  {
    id: '3',
    title: 'Rent',
    subTitle: '200 appartments for rent',
    imageUrl:
      'https://res.cloudinary.com/ogcodes/image/upload/v1587369546/house.png',
  },
  {
    id: '4',
    title: 'Rent',
    subTitle: '200 appartments for rent',
    imageUrl:
      'https://res.cloudinary.com/ogcodes/image/upload/v1587369546/house.png',
  },
  {
    id: '5',
    title: 'Sale',
    subTitle: '200 appartments for sale',
    imageUrl:
      'https://res.cloudinary.com/ogcodes/image/upload/v1587369546/house.png',
  },
  {
    id: '6',
    title: 'Rent',
    subTitle: '200 appartments for rent',
    imageUrl:
      'https://res.cloudinary.com/ogcodes/image/upload/v1587369546/house.png',
  },
];
const DATA_LatestEstates = [
  {
    id: '1',
    title: 'Rent',
    subTitle: '200 appartments for rent',
    imageUrl:
      'https://res.cloudinary.com/ogcodes/image/upload/v1587369546/house.png',
  },
  {
    id: '2',
    title: 'Sale',
    subTitle: '200 appartments for sale',
    imageUrl:
      'https://res.cloudinary.com/ogcodes/image/upload/v1587369546/house.png',
  },
  {
    id: '3',
    title: 'Rent',
    subTitle: '200 appartments for rent',
    imageUrl:
      'https://res.cloudinary.com/ogcodes/image/upload/v1587369546/house.png',
  },
  {
    id: '4',
    title: 'Rent',
    subTitle: '200 appartments for rent',
    imageUrl:
      'https://res.cloudinary.com/ogcodes/image/upload/v1587369546/house.png',
  },
  {
    id: '5',
    title: 'Sale',
    subTitle: '200 appartments for sale',
    imageUrl:
      'https://res.cloudinary.com/ogcodes/image/upload/v1587369546/house.png',
  },
  {
    id: '6',
    title: 'Rent',
    subTitle: '200 appartments for rent',
    imageUrl:
      'https://res.cloudinary.com/ogcodes/image/upload/v1587369546/house.png',
  },
];
const DATA_LatestLands = [
  {
    id: '1',
    title: 'Rent',
    subTitle: '200 appartments for rent',
    imageUrl:
      'https://res.cloudinary.com/ogcodes/image/upload/v1587405110/Rectangle_44.png',
  },
  {
    id: '2',
    title: 'Sale',
    subTitle: '200 appartments for sale',
    imageUrl:
      'https://res.cloudinary.com/ogcodes/image/upload/v1587405110/Rectangle_44.png',
  },
  {
    id: '3',
    title: 'Rent',
    subTitle: '200 appartments for rent',
    imageUrl:
      'https://res.cloudinary.com/ogcodes/image/upload/v1587405110/Rectangle_44.png',
  },
  {
    id: '4',
    title: 'Rent',
    subTitle: '200 appartments for rent',
    imageUrl:
      'https://res.cloudinary.com/ogcodes/image/upload/v1587405110/Rectangle_44.png',
  },
  {
    id: '5',
    title: 'Sale',
    subTitle: '200 appartments for sale',
    imageUrl:
      'https://res.cloudinary.com/ogcodes/image/upload/v1587405110/Rectangle_44.png',
  },
  {
    id: '6',
    title: 'Rent',
    subTitle: '200 appartments for rent',
    imageUrl:
      'https://res.cloudinary.com/ogcodes/image/upload/v1587405110/Rectangle_44.png',
  },
];

//Categories

function Categories({id, title, subTitle, imageUrl, selected, onSelect}) {
  return (
    <TouchableOpacity
      onPress={() => onSelect(id)}
      style={{
        marginVertical: 2,
        marginHorizontal: 6,
        width: 125,
        borderRadius: 6,
        backgroundColor: 'transparent',
      }}>
      <ImageBackground
        style={{flex: 1, width: '100%'}}
        source={{uri: imageUrl}}
        imageStyle={{borderRadius: 6}}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            borderRadius: 6,
          }}>
          <View style={{margin: 10}}>
            <Text
              style={{
                fontSize: 14,
                color: '#fff',
              }}>
              {title}
            </Text>
            <Text
              style={{
                fontSize: 10,
                color: '#fff',
              }}>
              {subTitle}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

// RealEstates
function RealEstates({id, title, subTitle, imageUrl, selected, onSelect}) {
  return (
    <TouchableOpacity
      onPress={() => onSelect(id)}
      style={{
        marginVertical: 2,
        marginHorizontal: 6,
        width: 170,
        height: 200,
        borderRadius: 6,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.06,
        shadowRadius: 1.41,
        elevation: 1,
        padding: 4.5,
      }}>
      <ImageBackground
        style={{flex: 3, width: '100%'}}
        source={{uri: imageUrl}}
        imageStyle={{borderRadius: 6}}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            borderRadius: 6,
          }}>
          <View style={{margin: 10}}>
            <Text
              style={{
                fontSize: 14,
                color: '#fff',
              }}>
              {title}
            </Text>
            <Text
              style={{
                fontSize: 10,
                color: '#fff',
              }}>
              {subTitle}
            </Text>
          </View>
        </View>
      </ImageBackground>
      <View
        style={{
          height: 60,
          borderBottomLeftRadius: 17,
          borderBottomRightRadius: 15,
          justifyContent: 'center',
          padding: 1,
        }}>
        <Text
          style={{
            alignSelf: 'center',
            color: '#3A3A3A',
            fontSize: 13,
            fontWeight: 'bold',
            lineHeight: 18,
            width: 155,
          }}>
          Ancient Bungalo Ancient
        </Text>
        <Text
          style={{color: '#828282', fontSize: 10, width: 155, marginLeft: -5}}>
          <IconE style={[{color: '#00959E'}]} size={15} name={'location'} /> 45
          ntoe asi layout , Calabar
        </Text>
        <View style={{flexDirection: 'row', margin: 1}}>
          <IconI style={[{color: '#00959E'}]} size={15} name={'md-star'} />
          <IconI style={[{color: '#00959E'}]} size={15} name={'md-star'} />
          <IconI style={[{color: '#00959E'}]} size={15} name={'md-star'} />
          <IconI style={[{color: '#00959E'}]} size={15} name={'md-star'} />
          <IconI
            style={[{color: '#00959E'}]}
            size={15}
            name={'md-star-outline'}
          />
          <Text style={{color: '#828282', fontSize: 10}}> (234) Reviews</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

///LatestLands

function LatestLands({id, title, subTitle, imageUrl, selected, onSelect}) {
  return (
    <TouchableOpacity
      onPress={() => onSelect(id)}
      style={{
        marginVertical: 2,
        marginHorizontal: 6,
        // width: Dimensions.get('window').width - 40,
        height: 200,
        borderRadius: 6,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.06,
        shadowRadius: 1.41,

        elevation: 1,
        padding: 4.5,
      }}>
      <ImageBackground
        style={{flex: 3, width: '100%'}}
        source={{uri: imageUrl}}
        imageStyle={{borderRadius: 6}}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            borderRadius: 6,
          }}
        />
      </ImageBackground>
      <View
        style={{
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
          padding: 1,
          flex: 1,
        }}>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'space-between',
            // width: Dimensions.get('window').width - 55,
          }}>
          <Text
            style={{
              alignSelf: 'flex-start',
              color: '#3A3A3A',
              fontSize: 13,
              fontWeight: 'bold',
            }}>
            Ancient Bungalo Ancient
          </Text>
          <Text
            style={{
              alignSelf: 'flex-start',
              color: '#3A3A3A',
              fontSize: 13,
              fontWeight: 'bold',
            }}>
            ₦360
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'space-between',
            // width: Dimensions.get('window').width - 55,
          }}>
          <Text
            style={{
              color: '#828282',
              fontSize: 13,
              width: 175,
              marginLeft: -5,
            }}>
            <IconE style={[{color: '#00959E'}]} size={15} name={'location'} />
            45 ntoe asi layout, Calabar
          </Text>
          <View style={{flexDirection: 'row', margin: 1}}>
            <IconI style={[{color: '#00959E'}]} size={15} name={'md-star'} />
            <IconI style={[{color: '#00959E'}]} size={15} name={'md-star'} />
            <IconI style={[{color: '#00959E'}]} size={15} name={'md-star'} />
            <IconI style={[{color: '#00959E'}]} size={15} name={'md-star'} />
            <IconI
              style={[{color: '#00959E'}]}
              size={15}
              name={'md-star-outline'}
            />
            <Text style={{color: '#828282', fontSize: 10}}>(234) Reviews</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

//latest estates
function LatestEstates({id, title, subTitle, imageUrl, selected, onSelect}) {
  return (
    <TouchableOpacity
      onPress={() => onSelect(id)}
      style={{
        marginVertical: 2,
        marginHorizontal: 6,
        width: 170,
        height: 200,
        borderRadius: 6,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.06,
        shadowRadius: 1.41,
        elevation: 1,
        padding: 4.5,
      }}>
      <ImageBackground
        style={{flex: 3, width: '100%'}}
        // source={{ uri: imageUrl }}
        imageStyle={{borderRadius: 6}}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            borderRadius: 6,
          }}
        />
      </ImageBackground>
      <View
        style={{
          height: 60,
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
          justifyContent: 'center',
          padding: 1,
        }}>
        <Text
          style={{
            alignSelf: 'center',
            color: '#3A3A3A',
            fontSize: 13,
            fontWeight: 'bold',
            lineHeight: 18,
            width: 155,
          }}>
          Ancient Bungalo Ancient
        </Text>
        <Text
          style={{color: '#828282', fontSize: 10, width: 155, marginLeft: -5}}>
          <IconE style={[{color: '#00959E'}]} size={15} name={'location'} /> 45
          ntoe asi layout , Calabar
        </Text>
        <View style={{flexDirection: 'row', margin: 1}}>
          <IconI style={[{color: '#00959E'}]} size={15} name={'md-star'} />
          <IconI style={[{color: '#00959E'}]} size={15} name={'md-star'} />
          <IconI style={[{color: '#00959E'}]} size={15} name={'md-star'} />
          <IconI style={[{color: '#00959E'}]} size={15} name={'md-star'} />
          <IconI
            style={[{color: '#00959E'}]}
            size={15}
            name={'md-star-outline'}
          />
          <Text style={{color: '#828282', fontSize: 10}}> (234) Reviews</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  // const resetAction = StackActions.reset({
  //   index: 0,
  //   actions: [NavigationActions.navigate({routeName: 'Draw'})],
  // });

  // navigation.dispatch(resetAction);

  useEffect(() => {
    dispatch(GetUserData());
  }, [dispatch]);

  //top nav
  const navigateBack = () => {
    requestAnimationFrame(() => {
      navigation.goBack();
    });
  };
  const openDrawer = () => {
    requestAnimationFrame(() => {
      navigation.openDrawer();
    });
  };
  const navigateCategories = () => {
    requestAnimationFrame(() => {
      navigation.navigate('Categories');
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
      <Image
        source={require('../assets/logo.png')}
        style={{
          width: 200,
          height: 50,
          transform: [
            {
              scaleX: moderateScale(0.5, 0.1),
            },
            {
              scaleY: moderateScale(0.5, 0.1),
            },
          ],
        }}
      />
    </View>
  );

  //selected
  const [selected, setSelected] = useState(new Map());

  const onSelect = useCallback(
    (id) => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));
      setSelected(newSelected);
    },
    [selected],
  );
  return (
    <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
      <TopNav Title={Title} LeftAction={LeftAction} />
      <ScrollView>
        <View
          style={{
            width: Dimensions.get('window').width - 10,
            justifyContent: 'center',
            alignSelf: 'center',
            flex: 1,
          }}>
          <View style={{height: 255, margin: 5}}>
            <View
              style={{
                alignSelf: 'flex-start',
                width: 100,
                height: 30,
                flex: 0.1,
              }}>
              <Text style={{fontSize: 17, color: '#3A3A3A', marginLeft: 5}}>
                Categories
              </Text>
            </View>
            <View style={{alignSelf: 'flex-end', width: 100, height: 30}}>
              <TouchableOpacity onPress={navigateCategories}>
                <Text
                  style={{
                    fontSize: 13,
                    color: '#00959E',
                    alignSelf: 'flex-end',
                  }}>
                  See all >
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{flex: 1}}>
              <FlatList
                data={DATA_Categories}
                horizontal
                renderItem={({item}) => (
                  <Categories
                    id={item.id}
                    title={item.title}
                    subTitle={item.subTitle}
                    imageUrl={item.imageUrl}
                    selected={!!selected.get(item.id)}
                    onSelect={onSelect}
                  />
                )}
                keyExtractor={(item) => item.id}
                extraData={selected}
              />
            </View>
          </View>
          <View style={{height: 255, margin: 5}}>
            <View
              style={{
                alignSelf: 'flex-start',
                width: 200,
                height: 30,
                flex: 0.1,
              }}>
              <Text style={{fontSize: 17, color: '#3A3A3A', marginLeft: 5}}>
                Featured Properties
              </Text>
            </View>
            <View
              style={{
                alignSelf: 'flex-end',
                width: 100,
                height: 30,
                flex: 0.1,
              }}>
              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: 13,
                    color: '#00959E',
                    alignSelf: 'flex-end',
                  }}>
                  See all >
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{flex: 1}}>
              <FlatList
                data={DATA_LatestLands}
                horizontal
                renderItem={({item}) => (
                  <LatestLands
                    id={item.id}
                    title={item.title}
                    subTitle={item.subTitle}
                    imageUrl={item.imageUrl}
                    selected={!!selected.get(item.id)}
                    onSelect={onSelect}
                  />
                )}
                keyExtractor={(item) => item.id}
                extraData={selected}
              />
            </View>
          </View>
          <View style={{height: 255, margin: 5}}>
            <View
              style={{
                alignSelf: 'flex-start',
                width: 200,
                height: 30,
                flex: 0.1,
              }}>
              <Text style={{fontSize: 17, color: '#3A3A3A', marginLeft: 5}}>
                Latest Lands
              </Text>
            </View>
            <View
              style={{
                alignSelf: 'flex-end',
                width: 100,
                height: 30,
                flex: 0.1,
              }}>
              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: 13,
                    color: '#00959E',
                    alignSelf: 'flex-end',
                  }}>
                  See all >
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{flex: 1}}>
              <FlatList
                data={DATA_RealEstates}
                horizontal
                renderItem={({item}) => (
                  <RealEstates
                    id={item.id}
                    title={item.title}
                    subTitle={item.subTitle}
                    imageUrl={item.imageUrl}
                    selected={!!selected.get(item.id)}
                    onSelect={onSelect}
                  />
                )}
                keyExtractor={(item) => item.id}
                extraData={selected}
              />
            </View>
          </View>
          <View style={{height: 255, margin: 5}}>
            <View
              style={{
                alignSelf: 'flex-start',
                width: 200,
                height: 30,
                flex: 0.1,
              }}>
              <Text style={{fontSize: 17, color: '#3A3A3A', marginLeft: 5}}>
                Latest Houses
              </Text>
            </View>
            <View
              style={{
                alignSelf: 'flex-end',
                width: 100,
                height: 30,
                flex: 0.1,
              }}>
              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: 13,
                    color: '#00959E',
                    alignSelf: 'flex-end',
                  }}>
                  See all >
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{flex: 1}}>
              <FlatList
                data={DATA_LatestEstates}
                horizontal
                renderItem={({item}) => (
                  <LatestEstates
                    id={item.id}
                    title={item.title}
                    subTitle={item.subTitle}
                    imageUrl={item.imageUrl}
                    selected={!!selected.get(item.id)}
                    onSelect={onSelect}
                  />
                )}
                keyExtractor={(item) => item.id}
                extraData={selected}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputLocations: {
    borderColor: '#f6f6f6',
    width: Dimensions.get('window').width - 50,
    alignSelf: 'center',
    margin: 10,
    textShadowColor: '0px 0px 2px rgba(0, 0, 0, 0.12)',
    borderRadius: 10,
  },
  inputText: {color: '#3A3A3A'},
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
});
