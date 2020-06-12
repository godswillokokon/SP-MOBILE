import React, {useState, useCallback} from 'react';
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
import {Avatar} from 'react-native-paper';
import {TopNavigationAction} from '@ui-kitten/components';
import {moderateScale} from 'react-native-size-matters';

import TopNav from '../components/topNav';
import IconA from 'react-native-vector-icons/AntDesign';
import IconI from 'react-native-vector-icons/Ionicons';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import IconM from 'react-native-vector-icons/MaterialIcons';
import IconF from 'react-native-vector-icons/FontAwesome';
import PropertyImages from '../components/propertyImages';

export const PropertyScreen = ({navigation}) => {
  let header = 'head';
  let body = 'navigation.state.params.details';
  let images = [
    'https://res.cloudinary.com/tech-18/image/upload/v1591039035/Spread%20Properties/h2u1mejrj849mpgrlmr3.jpg',
    'https://res.cloudinary.com/tech-18/image/upload/v1591039035/Spread%20Properties/h2u1mejrj849mpgrlmr3.jpg',
    'https://res.cloudinary.com/tech-18/image/upload/v1591039035/Spread%20Properties/h2u1mejrj849mpgrlmr3.jpg',
  ];

  //top nav requestAnimationFrame(() => {

  const navigateBack = () => {
    requestAnimationFrame(() => {
      navigation.goBack();
      // navigation.navigate('Properties');
    });
  };
  const navigateAgent = () => {
    requestAnimationFrame(() => {
      navigation.navigate('Agent');
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
      <Text style={styles.title}>{header}</Text>
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
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <TopNav Title={Title} LeftAction={LeftAction} />
      <ScrollView style={{flex: 1, alignSelf: 'center', marginVertical: 24}}>
        <View style={{height: 200}}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            fadingEdgeLength={0}>
            {images.map((image, i) => {
              return (
                <PropertyImages
                  data="https://res.cloudinary.com/tech-18/image/upload/v1591039035/Spread%20Properties/h2u1mejrj849mpgrlmr3.jpg"
                  key={i}
                  index={i}
                  title="head"
                  address="15 ahgsggdgd"
                  amount="200000"
                  selected={selected}
                  onSelect={onSelect}
                />
              );
            })}
          </ScrollView>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            marginVertical: -5,
          }}>
          <TouchableOpacity
            style={{
              width: 50,
              height: 50,
              borderRadius: 100,
              shadowColor: '#000',
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
            }}>
            <Image
              style={{
                width: 100,
                height: 100,
                transform: [
                  {
                    scaleX: moderateScale(0.3, 0.1),
                  },
                  {
                    scaleY: moderateScale(0.3, 0.1),
                  },
                ],
                alignSelf: 'center',
              }}
              source={require('../assets/mapIcon.png')}
              imageStyle={{}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 50,
              height: 50,
              borderRadius: 100,
              shadowColor: '#000',
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
              alignContent: 'center',
            }}>
            <Image
              style={{
                width: 100,
                height: 100,
                transform: [
                  {
                    scaleX: moderateScale(0.3, 0.1),
                  },
                  {
                    scaleY: moderateScale(0.3, 0.1),
                  },
                ],
                alignSelf: 'center',
                // backgroundColor: 'red'
              }}
              source={require('../assets/videoIcon.png')}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            marginVertical: 8,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: '#3A3A3A',
              width: 80,
              marginHorizontal: 16,
            }}>
            Map View
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: '#3A3A3A',
              width: 80,
              marginHorizontal: 16,
            }}>
            Live Video
          </Text>
        </View>
        <TouchableOpacity
          onPress={navigateAgent}
          style={{
            width: Dimensions.get('window').width,
            borderColor: '#E5E5E5',
            borderWidth: 1,
            marginVertical: 18,
            height: 80,
            justifyContent: 'space-evenly',
            flexDirection: 'row',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <Avatar.Image
              source={
                {
                  // uri: body.agent.image,
                }
              }
              size={50}
            />
            <View style={{alignSelf: 'center', marginLeft: 10}}>
              <Text
                style={{fontSize: 14, fontWeight: 'bold', color: '#3A3A3A'}}>
                {/* {body.agent.name} */}
              </Text>
              <Text style={{fontSize: 12, color: '#828282'}}>
                {/* {body.agent.organization} */}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <TouchableOpacity
              style={{
                marginHorizontal: 14,
                width: 35,
                height: 35,
                borderRadius: 100,
                shadowColor: '#000',
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
              <IconMC
                style={[{color: '#3DA917', alignSelf: 'center'}]}
                name="phone"
                size={23}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                marginHorizontal: 14,
                width: 35,
                height: 35,
                borderRadius: 100,
                shadowColor: '#000',
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
              <IconMC
                style={[{color: '#F14336', alignSelf: 'center'}]}
                name="gmail"
                size={23}
              />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>

        <View
          style={{
            width: Dimensions.get('window').width - 20,
            alignSelf: 'center',
          }}>
          <Text style={{color: '#3A3A3A', fontSize: 14, fontWeight: 'bold'}}>
            Property Details
          </Text>
          <Text
            style={{
              color: '#828282',
              fontSize: 10,
              lineHeight: 14,
              marginVertical: 9,
            }}>
            {/* {body.info} */}
          </Text>
        </View>

        <View
          style={{
            width: Dimensions.get('window').width - 20,
            alignSelf: 'center',
          }}>
          <Text style={{color: '#3A3A3A', fontSize: 14, fontWeight: 'bold'}}>
            Property Facilities
          </Text>
          <View
            style={{
              marginVertical: 9,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <View>
              <IconMC
                style={[{color: '#313131', alignSelf: 'center'}]}
                name="air-conditioner"
                size={23}
              />
              <Text style={{color: '#000000', fontSize: 10, marginVertical: 2}}>
                {/* {body.facility.Airconditioning} Air-conditioning */}
              </Text>
            </View>
            <View>
              <IconM
                style={[{color: '#313131', alignSelf: 'center'}]}
                name="pool"
                size={25}
              />
              <Text style={{color: '#000000', fontSize: 10, marginVertical: 2}}>
                {/* {body.facility.Pool} Pool */}
              </Text>
            </View>
            <View>
              <IconI
                style={[{color: '#313131', alignSelf: 'center'}]}
                name="ios-bed"
                size={25}
              />
              <Text style={{color: '#000000', fontSize: 10, marginVertical: 2}}>
                {/* {body.facility.Bedrooms} bedrooms */}
              </Text>
            </View>
            <View>
              <IconF
                style={[{color: '#313131', alignSelf: 'center'}]}
                name="bath"
                size={25}
              />
              <Text style={{color: '#000000', fontSize: 10, marginVertical: 2}}>
                {/* {body.facility.Bathrooms} bathrooms */}
              </Text>
            </View>
            <View>
              <IconMC
                style={[{color: '#313131', alignSelf: 'center'}]}
                name="garage"
                size={25}
              />
              <Text style={{color: '#000000', fontSize: 10, marginVertical: 2}}>
                {/* {body.facility.Carparks} carparks */}
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            width: Dimensions.get('window').width - 20,
            alignSelf: 'center',
            marginVertical: 10,
          }}>
          <Text style={{color: '#3A3A3A', fontSize: 14, fontWeight: 'bold'}}>
            Property Overview
          </Text>
          <View
            style={{
              marginVertical: 9,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                width: 120,
                justifyContent: 'space-between',
              }}>
              <Text style={{color: '#313131', fontSize: 12}}>Year built</Text>
              <Text style={{color: '#828282', fontSize: 12}}>
                {/* {body.overview.yearBuilt} */}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: 120,
                justifyContent: 'space-between',
              }}>
              <Text style={{color: '#313131', fontSize: 12}}>Home Area</Text>
              <Text style={{color: '#828282', fontSize: 12}}>
                {/* {body.overview.homeArea} */}
              </Text>
            </View>
          </View>

          <View
            style={{
              marginVertical: 9,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                width: 120,
                justifyContent: 'space-between',
              }}>
              <Text style={{color: '#313131', fontSize: 12}}>Material</Text>
              <Text style={{color: '#828282', fontSize: 12}}>
                {/* {body.overview.material} */}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: 120,
                justifyContent: 'space-between',
              }}>
              <Text style={{color: '#313131', fontSize: 12}}>Location</Text>
              <Text style={{color: '#828282', fontSize: 12}}>
                {/* {body.overview.location} */}
              </Text>
            </View>
          </View>

          <View
            style={{
              marginVertical: 9,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                width: 120,
                justifyContent: 'space-between',
              }}>
              <Text style={{color: '#313131', fontSize: 12}}>Type</Text>
              <Text style={{color: '#828282', fontSize: 12}}>
                {/* {body.overview.type} */}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: 120,
                justifyContent: 'space-between',
              }}>
              <Text style={{color: '#313131', fontSize: 12}}>Dimension</Text>
              <Text style={{color: '#828282', fontSize: 12}}>
                {/* {body.overview.dimension} */}
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Rent</Text>
        </TouchableOpacity>
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
  button: {
    justifyContent: 'center',
    width: 98,
    height: 40,
    backgroundColor: '#0DABA8',
    borderRadius: 4,
    alignSelf: 'center',
    marginVertical: 16,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: 'Muli',
    alignSelf: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
});
