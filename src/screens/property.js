/* eslint-disable react-native/no-inline-styles */
import React, {useState, useCallback, useEffect} from 'react';
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
import {useSelector, useDispatch} from 'react-redux';
import {GetHouse} from '../redux/actions/propsActions';
import {Avatar} from 'react-native-paper';
import {TopNavigationAction} from '@ui-kitten/components';
import {moderateScale} from 'react-native-size-matters';
import numbro from 'numbro';
import PropertyPlaceholder from '../components/propertyStaging';

import TopNav from '../components/topNav';
import IconA from 'react-native-vector-icons/AntDesign';
import IconE from 'react-native-vector-icons/Entypo';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import IconM from 'react-native-vector-icons/MaterialIcons';
import IconF from 'react-native-vector-icons/FontAwesome';
import PropertyImages from '../components/propertyImages';

export const PropertyScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {house} = useSelector((state) => state.properties);
  const isHouse = house.house;
  // console.log(isHouse, 'prps');

  useEffect(() => {
    let slug = navigation.state.params.slug;
    dispatch(GetHouse(slug));
  }, [dispatch, navigation.state.params.slug]);

  // console.log(house)
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
      navigation.navigate('Properties');
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
      {isHouse ? <Text style={styles.title}>{isHouse.name}</Text> : null}
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
  const dummy = [
    {
      id: '1',
    },
    {
      id: '2',
    },
    {
      id: '3',
    },
    {
      id: '4',
    },
    {
      id: '5',
    },
  ];
  const renderPlaceholders = () =>
    dummy.map((e, i) => <PropertyPlaceholder key={i} />);
  const hold = null;
  let amenities = [];
  if (isHouse) {
    if (isHouse.amenities.includes('Air Conditioning')) {
      const ac = (
        <View style={{padding: 2}}>
          <IconMC
            style={[{color: '#313131', alignSelf: 'center'}]}
            name="air-conditioner"
            size={23}
          />
          <Text style={{color: '#000000', fontSize: 10}}>Air Conditioning</Text>
        </View>
      );
      amenities.push(ac);
    }
    if (isHouse.amenities.includes('Internet')) {
      const internet = (
        <View style={{padding: 2}}>
          <IconMC
            style={[{color: '#313131', alignSelf: 'center'}]}
            name="signal-variant"
            size={23}
          />
          <Text style={{color: '#000000', fontSize: 10}}>Wi-Fi</Text>
        </View>
      );
      amenities.push(internet);
    }
    if (isHouse.amenities.includes('Swimming Pool')) {
      const pool = (
        <View style={{padding: 2}}>
          <IconM
            style={[{color: '#313131', alignSelf: 'center'}]}
            name="pool"
            size={25}
          />
          <Text style={{color: '#000000', fontSize: 10}}>Swimming Pool</Text>
        </View>
      );
      amenities.push(pool);
    }
    if (isHouse.amenities.includes('Near Church')) {
      const church = (
        <View style={{padding: 2}}>
          <IconMC
            style={[{color: '#313131', alignSelf: 'center'}]}
            name="church"
            size={25}
          />
          <Text style={{color: '#000000', fontSize: 10}}>Near Church</Text>
        </View>
      );
      amenities.push(church);
    }
    if (isHouse.amenities.includes('Near Estate')) {
      const estate = (
        <View style={{padding: 2}}>
          <IconMC
            style={[{color: '#313131', alignSelf: 'center'}]}
            name="home-group"
            size={23}
          />
          <Text style={{color: '#000000', fontSize: 10}}>Near Estate</Text>
        </View>
      );
      amenities.push(estate);
    }

    if (isHouse.amenities.includes('Dish Washer')) {
      const washer = (
        <View style={{padding: 2}}>
          <IconMC
            style={[{color: '#313131', alignSelf: 'center'}]}
            name="dishwasher"
            size={25}
          />
          <Text style={{color: '#000000', fontSize: 10}}>Dish Washer</Text>
        </View>
      );
      amenities.push(washer);
    }
    if (isHouse.amenities.includes('Computer')) {
      const computer = (
        <View style={{padding: 2}}>
          <IconM
            style={[{color: '#313131', alignSelf: 'center'}]}
            name="computer"
            size={25}
          />
          <Text style={{color: '#000000', fontSize: 10}}>Computer</Text>
        </View>
      );
      amenities.push(computer);
    }
    if (isHouse.amenities.includes('Balcony')) {
      const balcony = (
        <View style={{padding: 2}}>
          <IconF
            style={[{color: '#313131', alignSelf: 'center'}]}
            name="minus-square-o"
            size={23}
          />
          <Text style={{color: '#000000', fontSize: 10}}>Balcony</Text>
        </View>
      );
      amenities.push(balcony);
    }
    if (isHouse.amenities.includes('Cable TV')) {
      const tv = (
        <View style={{padding: 2}}>
          <IconM
            style={[{color: '#313131', alignSelf: 'center'}]}
            name="live-tv"
            size={23}
          />
          <Text style={{color: '#000000', fontSize: 10}}>Cable TV</Text>
        </View>
      );
      amenities.push(tv);
    }
    if (isHouse.amenities.includes('Terrace')) {
      const terrace = (
        <View style={{padding: 2}}>
          <IconF
            style={[{color: '#313131', alignSelf: 'center'}]}
            name="yelp"
            size={25}
          />
          <Text style={{color: '#000000', fontSize: 10}}>Terrace</Text>
        </View>
      );
      amenities.push(terrace);
    }
  }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <TopNav Title={Title} LeftAction={LeftAction} />
      {isHouse ? (
        <ScrollView
          style={{flex: 1, alignSelf: 'center', marginVertical: 24}}
          showsVerticalScrollIndicator={false}>
          <View
            style={{
              height: 200,
              width: Dimensions.get('window').width - 35,
              alignSelf: 'center',
            }}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              fadingEdgeLength={0}>
              {isHouse.take_two_images.map((image, i) => {
                return (
                  <PropertyImages
                    data={image.img_url}
                    key={i}
                    index={i}
                    category={isHouse.name}
                    sub_category={isHouse.house_category.house_subcategory}
                    address={`${isHouse.lga}, ${isHouse.state}`}
                    transaction={isHouse.transaction}
                    year_built={isHouse.year_built}
                    amount={`₦${numbro(isHouse.price).format({
                      thousandSeparated: true,
                    })}`}
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
                imageStyle={{padding: 2}}
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
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              style={{
                marginHorizontal: 14,
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
                justifyContent: 'center',
                elevation: 4,
                backgroundColor: '#fff',
                alignSelf: 'center',
              }}>
              <IconMC
                style={[{color: '#3DA917', alignSelf: 'center'}]}
                name="phone"
                size={23}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: '#3A3A3A',
                marginHorizontal: 16,
              }}>
              Talk to an Agent
            </Text>
          </View>

          <View
            style={{
              width: Dimensions.get('window').width - 35,
              alignSelf: 'center',
              marginVertical: 10,
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
              {isHouse.overview}
            </Text>
          </View>

          <View
            style={{
              width: Dimensions.get('window').width - 35,
              alignSelf: 'center',
            }}>
            <Text style={{color: '#3A3A3A', fontSize: 14, fontWeight: 'bold'}}>
              Property Facilities
            </Text>
            <View
              style={{
                marginVertical: 9,
                flexDirection: 'row',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
              }}>
              {amenities.map((e, i) => e)}
            </View>
          </View>

          <View
            style={{
              width: Dimensions.get('window').width - 35,
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
                  width: 150,
                  justifyContent: 'space-between',
                }}>
                <Text style={{color: '#313131', fontSize: 12}}>Payment</Text>
                <Text style={{color: '#828282', fontSize: 12}}>
                  {isHouse.payment_type}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  width: 150,
                  justifyContent: 'space-between',
                }}>
                <Text style={{color: '#313131', fontSize: 12}}>Category</Text>
                <Text style={{color: '#828282', fontSize: 12}}>
                  {isHouse.house_category.house_category}
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
                  width: 150,
                  justifyContent: 'space-between',
                }}>
                <Text style={{color: '#313131', fontSize: 12}}>Year Built</Text>
                <Text style={{color: '#828282', fontSize: 12}}>
                  {isHouse.year_built}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  width: 150,
                  justifyContent: 'space-between',
                }}>
                <Text style={{color: '#313131', fontSize: 12}}>Home Area</Text>
                <Text style={{color: '#828282', fontSize: 12}}>
                  {isHouse.home_area} SqrFt
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
                  width: 150,
                  justifyContent: 'space-between',
                }}>
                <Text style={{color: '#313131', fontSize: 12}}>Material</Text>
                <Text style={{color: '#828282', fontSize: 12}}>
                  {isHouse.material}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  width: 150,
                  justifyContent: 'space-between',
                }}>
                <Text style={{color: '#313131', fontSize: 12}}>Status</Text>
                <Text style={{color: '#828282', fontSize: 12}}>
                  {isHouse.status}
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
                  width: 150,
                  justifyContent: 'space-between',
                }}>
                <Text style={{color: '#313131', fontSize: 12}}>Type</Text>
                <Text style={{color: '#828282', fontSize: 12}}>
                  {isHouse.transaction}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  width: 150,
                  justifyContent: 'space-between',
                }}>
                <Text style={{color: '#313131', fontSize: 12}}>Dimension</Text>
                <Text style={{color: '#828282', fontSize: 12}}>
                  {isHouse.dimension} FT
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
                  width: 150,
                  justifyContent: 'space-between',
                }}>
                <Text style={{color: '#313131', fontSize: 12}}>Location</Text>
                <Text style={{color: '#828282', fontSize: 12}}>
                  {isHouse.location}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  width: 150,
                  justifyContent: 'space-between',
                }}>
                <Text style={{color: '#313131', fontSize: 12}}>
                  Sub Category
                </Text>
                <Text style={{color: '#828282', fontSize: 12}}>
                  {isHouse.house_subcategory.subcategory_name}
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{isHouse.transaction}</Text>
          </TouchableOpacity>
        </ScrollView>
      ) : (
        renderPlaceholders()
      )}
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
