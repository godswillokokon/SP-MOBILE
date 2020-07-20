import React, {useState, useCallback, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
  BackHandler,
  FlatList,
  Linking,
  Platform,
} from 'react-native';
import PaystackWebView from 'react-native-paystack-webview';
import {useSelector, useDispatch} from 'react-redux';
import {GetHouse} from '../redux/actions/propsActions';
import {MakePayment} from '../redux/actions/paymentActions';
import {TopNavigationAction, Modal, Layout, Text} from '@ui-kitten/components';
import {moderateScale} from 'react-native-size-matters';
import numbro from 'numbro';
import PropertyPlaceholder from '../components/propertyStaging';
import TopNav from '../components/topNav';
import IconA from 'react-native-vector-icons/AntDesign';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import IconM from 'react-native-vector-icons/MaterialIcons';
import IconF from 'react-native-vector-icons/FontAwesome';
import PropertyImages from '../components/propertyImages';
import VideoPlayer from 'react-native-video-controls';

export const HouseScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {house} = useSelector((state) => state.properties);
  const isHouse = house.house;
  useEffect(() => {
    const slug = navigation.state.params.slug;
    dispatch(GetHouse(slug));
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      navigateBack,
    );

    return () => backHandler.remove();
  }, [dispatch, navigateBack, navigation.state.params.slug]);
  const {user} = useSelector((state) => state.user);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const navigateBack = () => {
    requestAnimationFrame(() => {
      navigation.navigate('Houses');
    });
  };
  const [visibleInspect, setvisibleInspect] = useState(false);
  const [inspectVideo, setInspectVideo] = useState(false);

  const toggleInspectVideo = () => {
    requestAnimationFrame(() => {
      setInspectVideo(!inspectVideo);
    });
  };

  const toggleInspect = () => {
    requestAnimationFrame(() => {
      setvisibleInspect(!visibleInspect);
    });
  };
  const openGps = (lat, lng) => {
    let scheme = Platform.OS === 'ios' ? 'maps:' : 'geo:';
    let url = scheme + `${lat},${lng}`;
    Linking.openURL(url);
  };
  const inspectModalMap = () => {
    requestAnimationFrame(() => {
      isHouse.lat && isHouse.lng
        ? openGps(isHouse.lat, isHouse.lng)
        : setvisibleInspect(!visibleInspect);
    });
  };
  const inspectModalVideo = () => {
    requestAnimationFrame(() => {
      isHouse.video_url
        ? setInspectVideo(!inspectVideo)
        : setvisibleInspect(!visibleInspect);
    });
  };

  const Left = () => <IconA color={'#00959E'} name="arrowleft" size={25} />;

  const LeftAction = () => (
    <TopNavigationAction
      icon={Left}
      onPress={navigateBack}
      style={styles.left}
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
  let amenities = [];
  if (isHouse) {
    if (isHouse.amenities.includes('Air Conditioning')) {
      const ac = (
        <View style={styles.iconsPadding}>
          <IconMC
            style={styles.icon}
            color={'#313131'}
            name="air-conditioner"
            size={23}
          />
          <Text style={styles.iconText}>Air Conditioning</Text>
        </View>
      );
      amenities.push(ac);
    }
    if (isHouse.amenities.includes('Internet')) {
      const internet = (
        <View style={styles.iconsPadding}>
          <IconMC
            style={styles.icon}
            color={'#313131'}
            name="signal-variant"
            size={23}
          />
          <Text style={styles.iconText}>Wi-Fi</Text>
        </View>
      );
      amenities.push(internet);
    }
    if (isHouse.amenities.includes('Swimming Pool')) {
      const pool = (
        <View style={styles.iconsPadding}>
          <IconM style={styles.icon} color={'#313131'} name="pool" size={25} />
          <Text style={styles.iconText}>Swimming Pool</Text>
        </View>
      );
      amenities.push(pool);
    }
    if (isHouse.amenities.includes('Near Church')) {
      const church = (
        <View style={styles.iconsPadding}>
          <IconMC
            style={styles.icon}
            color={'#313131'}
            name="church"
            size={25}
          />
          <Text style={styles.iconText}>Near Church</Text>
        </View>
      );
      amenities.push(church);
    }
    if (isHouse.amenities.includes('Near Estate')) {
      const estate = (
        <View style={styles.iconsPadding}>
          <IconMC
            style={styles.icon}
            color={'#313131'}
            name="home-group"
            size={23}
          />
          <Text style={styles.iconText}>Near Estate</Text>
        </View>
      );
      amenities.push(estate);
    }

    if (isHouse.amenities.includes('Dish Washer')) {
      const washer = (
        <View style={styles.iconsPadding}>
          <IconMC
            style={styles.icon}
            color={'#313131'}
            name="dishwasher"
            size={25}
          />
          <Text style={styles.iconText}>Dish Washer</Text>
        </View>
      );
      amenities.push(washer);
    }
    if (isHouse.amenities.includes('Computer')) {
      const computer = (
        <View style={styles.iconsPadding}>
          <IconM
            style={styles.icon}
            color={'#313131'}
            name="computer"
            size={25}
          />
          <Text style={styles.iconText}>Computer</Text>
        </View>
      );
      amenities.push(computer);
    }
    if (isHouse.amenities.includes('Balcony')) {
      const balcony = (
        <View style={styles.iconsPadding}>
          <IconF
            style={styles.icon}
            color={'#313131'}
            name="minus-square-o"
            size={23}
          />
          <Text style={styles.iconText}>Balcony</Text>
        </View>
      );
      amenities.push(balcony);
    }
    if (isHouse.amenities.includes('Cable TV')) {
      const tv = (
        <View style={styles.iconsPadding}>
          <IconM
            style={styles.icon}
            color={'#313131'}
            name="live-tv"
            size={23}
          />
          <Text style={styles.iconText}>Cable TV</Text>
        </View>
      );
      amenities.push(tv);
    }
    if (isHouse.amenities.includes('Terrace')) {
      const terrace = (
        <View style={styles.iconsPadding}>
          <IconF style={styles.icon} color={'#313131'} name="yelp" size={25} />
          <Text style={styles.iconText}>Terrace</Text>
        </View>
      );
      amenities.push(terrace);
    }
  }
  const inspectVideoElement = () => (
    <View style={{}}>
      <Layout style={styles.modalContainerVideo}>
        <TouchableOpacity style={styles.modalX} onPress={toggleInspectVideo}>
          <Text style={styles.modalXtext}>X</Text>
        </TouchableOpacity>
        <View style={styles.modalBody}>
          <VideoPlayer
            source={{uri: isHouse.video_url}}
            seekColor={'#0DABA8'}
            // tapAnywhereToPause={true}
            style={{borderRadius: 10}}
            navigator={navigation}
            disableFullscreen
            onError={(err) => {
              console.log(err);
            }}
          />
        </View>
      </Layout>
    </View>
  );
  const inspectElement = () => (
    <View style={{}}>
      <Layout style={styles.modalContainer}>
        <TouchableOpacity style={styles.modalX} onPress={toggleInspect}>
          <Text style={styles.modalXtext}>X</Text>
        </TouchableOpacity>
        <View style={styles.modalBody}>
          <Text style={styles.modalHeader}>Inspect Property</Text>
          <Text style={styles.modalInfo}>
            Take a tour to our sites today, from our virtual tour to the
            physical tour. We ensure we show you everything you need to know
            about this property for an amount of ₦
            {numbro(1000).format({
              thousandSeparated: true,
            })}{' '}
            only
          </Text>
          <View style={styles.modalButtons}>
            <View style={styles.modalOffline}>
              <Text style={styles.modalBtnText}>Offline</Text>
            </View>
            <PaystackWebView
              buttonText="Online"
              showPayButton={true}
              paystackKey="pk_test_cc5a16f36a9c190775dcc8eeefeeeddd3b209d46"
              paystackSecretKey="sk_test_f9e9909d4b7bc2e45b1c0cd26bd4761551543197"
              amount={1000}
              billingEmail={user.email}
              billingMobile={user.phone}
              billingName={user.name}
              ActivityIndicatorColor="#0DABA8"
              SafeAreaViewContainer={{flex: 1}}
              SafeAreaViewContainerModal={{backgroundColor: '#33393a'}}
              handleWebViewMessage={(e) => {
                // handle the message
                console.log(e, 'message');
              }}
              onCancel={(e) => {
                // handle response here
                console.log(e, 'failed');
              }}
              onSuccess={(res) => {
                // handle response here
                console.log(res, 'success');
                const email = user.email;
                const property_slug = isHouse.slug;
                const amount = 1000;
                const payment_plan = 'online-inspection';
                const property_type = 'house';
                const reference = res.data.reference;
                const data = {
                  property_slug,
                  amount,
                  payment_plan,
                  email,
                  property_type,
                  reference,
                };
                dispatch(MakePayment({ ...data }));
                setInspectVideo(!inspectVideo);
                setvisibleInspect(!visibleInspect);
              }}
              autoStart={false}
              textStyles={styles.modalBtnText}
              btnStyles={styles.modalOnline}
            />
          </View>
        </View>
      </Layout>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <TopNav Title={Title} LeftAction={LeftAction} />
      {isHouse ? (
        <ScrollView
          style={styles.scrollContainer}
          showsVerticalScrollIndicator={false}>
          <View style={styles.images}>
            {isHouse.take_two_images ? (
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
                      name={isHouse.name}
                      address={`${isHouse.lga}, ${isHouse.state}`}
                      amount={`₦${numbro(isHouse.price).format({
                        thousandSeparated: true,
                      })}`}
                      selected={selected}
                      onSelect={onSelect}
                    />
                  );
                })}
              </ScrollView>
            ) : null}
            {isHouse.house_image ? (
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                fadingEdgeLength={0}>
                {isHouse.house_image.map((image, i) => {
                  return (
                    <PropertyImages
                      data={image.img_url}
                      key={i}
                      index={i}
                      name={isHouse.name}
                      address={`${isHouse.lga}, ${isHouse.state}`}
                      amount={`₦${numbro(isHouse.price).format({
                        thousandSeparated: true,
                      })}`}
                      selected={selected}
                      onSelect={onSelect}
                    />
                  );
                })}
              </ScrollView>
            ) : null}
          </View>
          <View style={styles.inspectSection}>
            <TouchableOpacity
              onPress={() => inspectModalMap()}
              style={styles.inspect}>
              <Image
                style={styles.inspectImage}
                source={require('../assets/mapIcon.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => inspectModalVideo()}
              style={styles.inspect}>
              <Image
                style={styles.inspectImage}
                source={require('../assets/videoIcon.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.inspectTextSection}>
            <Text style={styles.inspectText}>Map View</Text>
            <Text style={styles.inspectText}>Live Video</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailsHeader}>Property Details</Text>
            <Text style={styles.detailsInfo}>{isHouse.overview}</Text>
          </View>
          <View style={styles.amenities}>
            <Text style={styles.header}>Property Facilities</Text>
            <View style={styles.amenitiesInfo}>
              <FlatList
                data={amenities}
                horizontal
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => item}
                keyExtractor={(item) => item.id}
                numColumns={1}
              />
            </View>
          </View>
          <View style={styles.overview}>
            <Text style={styles.header}>Property Overview</Text>
            {isHouse.house_image ? (
              <View>
                <View style={styles.propertyRow}>
                  <View style={styles.propertyRowItems}>
                    <Text style={styles.overviewTitle}>Garage</Text>
                    <Text style={styles.overviewInfo}>{isHouse.car_park}</Text>
                  </View>
                  <View style={styles.propertyRowItems}>
                    <Text style={styles.overviewTitle}>Bathrooms</Text>
                    <Text style={styles.overviewInfo}>{isHouse.bathrooms}</Text>
                  </View>
                </View>
                <View style={styles.propertyRow}>
                  <View style={styles.propertyRowItems}>
                    <Text style={styles.overviewTitle}>Rooms</Text>
                    <Text style={styles.overviewInfo}>{isHouse.rooms}</Text>
                  </View>
                  <View style={styles.propertyRowItems}>
                    <Text style={styles.overviewTitle}>Mobile</Text>
                    <Text style={styles.overviewInfo}>{isHouse.contact}</Text>
                  </View>
                </View>
              </View>
            ) : null}
            <View style={styles.propertyRow}>
              <View style={styles.propertyRowItems}>
                <Text style={styles.overviewTitle}>Payment</Text>
                <Text style={styles.overviewInfo}>{isHouse.payment_type}</Text>
              </View>
              <View style={styles.propertyRowItems}>
                <Text style={styles.overviewTitle}>Category</Text>
                <Text style={styles.overviewInfo}>
                  {isHouse.house_category.house_category}
                </Text>
              </View>
            </View>

            <View style={styles.propertyRow}>
              <View style={styles.propertyRowItems}>
                <Text style={styles.overviewTitle}>Year Built</Text>
                <Text style={styles.overviewInfo}>{isHouse.year_built}</Text>
              </View>
              <View style={styles.propertyRowItems}>
                <Text style={styles.overviewTitle}>Home Area</Text>
                <Text style={styles.overviewInfo}>
                  {isHouse.home_area} SqrFt
                </Text>
              </View>
            </View>

            <View style={styles.propertyRow}>
              <View style={styles.propertyRowItems}>
                <Text style={styles.overviewTitle}>Material</Text>
                <Text style={styles.overviewInfo}>{isHouse.material}</Text>
              </View>
              <View style={styles.propertyRowItems}>
                <Text style={styles.overviewTitle}>Dimension</Text>
                <Text style={styles.overviewInfo}>{isHouse.dimension}</Text>
              </View>
            </View>
            <View style={styles.propertyRow}>
              <View style={styles.propertyRowItemsLoc}>
                <Text style={styles.overviewTitle}>Location </Text>
                <Text style={styles.overviewInfo}>{isHouse.location}</Text>
              </View>
            </View>
          </View>
          <PaystackWebView
            buttonText={isHouse.transaction}
            showPayButton={true}
            paystackKey="pk_test_cc5a16f36a9c190775dcc8eeefeeeddd3b209d46"
            paystackSecretKey="sk_test_f9e9909d4b7bc2e45b1c0cd26bd4761551543197"
            amount={1000}
            billingEmail="godswillokokon3@gmail.com"
            billingMobile="08177024847"
            billingName="Godswill Okokon"
            ActivityIndicatorColor="black"
            handleWebViewMessage={(e) => {
              // handle the message
              console.log(e, 'message');
            }}
            onCancel={(e) => {
              // handle response here
              console.log(e, 'failed');
            }}
            onSuccess={(res) => {
              // handle response here
              console.log(res, 'success');
              const email = user.email;
              const property_slug = isHouse.slug;
              const amount = 1000;
              const payment_plan = 'online-inspection';
              const property_type = 'house';
              const reference = res.data.reference;
              const data = {
                property_slug,
                amount,
                payment_plan,
                email,
                property_type,
                reference,
              };
              dispatch(MakePayment({...data}));
            }}
            autoStart={false}
            textStyles={styles.buttonText}
            btnStyles={styles.button}
          />
          <Modal
            visible={visibleInspect}
            animationType="slide"
            onBackdropPress={toggleInspect}
            backdropStyle={styles.backdrop}
            transparent={false}>
            {inspectElement()}
          </Modal>
          <Modal
            visible={inspectVideo}
            animationType="slide"
            onBackdropPress={toggleInspectVideo}
            backdropStyle={styles.backdrop}
            transparent={false}>
            {inspectVideoElement()}
          </Modal>
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
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    alignSelf: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  modalContainerVideo: {
    flex: 1,
    flexDirection: 'column',
    // height: 500,
    height: Dimensions.get('window').height - 100,
    width: Dimensions.get('window').width - 50,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: 'center',
  },
  modalContainer: {
    flex: 1,
    flexDirection: 'column',
    height: 230,
    width: Dimensions.get('window').width - 50,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: 'center',
  },
  modalX: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: 'white',
    borderRadius: 30,
    alignSelf: 'flex-end',
    flexDirection: 'row',
    bottom: 20,
    left: 15,
    height: 35,
    width: 35,
    justifyContent: 'center',
  },
  modalXtext: {
    alignSelf: 'center',
    fontSize: 15,
    color: '#0DABA8',
    fontWeight: 'bold',
  },
  modalBody: {
    flex: 1,
    width: Dimensions.get('window').width - 50,
    alignItems: 'center',
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    // justifyContent: 'center'
  },
  modalHeader: {
    color: '#3A3A3A',
    fontSize: 18,
  },
  modalInfo: {
    color: '#828282',
    fontSize: 13,
    margin: 15,
    textAlign: 'center',
  },
  modalButtons: {
    flexDirection: 'row',
    marginVertical: 15,
    width: 250,
    // backgroundColor: 'red',
    alignSelf: 'center',
  },
  modalOffline: {
    backgroundColor: '#0DABA8',
    paddingHorizontal: 25,
    paddingVertical: 5,
    borderRadius: 4,
    width: 100,
  },
  modalOnline: {
    backgroundColor: '#0DABA8',
    paddingHorizontal: 25,
    paddingVertical: 5,
    borderRadius: 4,
    width: 100,
    left: 50,
  },
  modalBtnText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flex: 1,
    alignSelf: 'center',
    marginVertical: 24,
  },
  images: {
    height: 200,
    width: Dimensions.get('window').width - 35,
    alignSelf: 'center',
  },
  inspectSection: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginVertical: -5,
  },
  inspect: {
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
  },
  inspectImage: {
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
  },
  inspectTextSection: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginVertical: 8,
  },
  inspectText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#3A3A3A',
    marginHorizontal: 20,
    alignSelf: 'center',
  },
  details: {
    width: Dimensions.get('window').width - 35,
    alignSelf: 'center',
    marginVertical: 10,
  },
  header: {
    color: '#3A3A3A',
    fontSize: 14,
    fontWeight: 'bold',
  },
  detailsInfo: {
    color: '#828282',
    fontSize: 12,
    lineHeight: 14,
    marginVertical: 9,
    textAlign: 'justify',
  },
  amenities: {
    width: Dimensions.get('window').width - 35,
    alignSelf: 'center',
  },
  amenitiesInfo: {
    marginVertical: 9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginHorizontal: -15,
  },
  overview: {
    width: Dimensions.get('window').width - 35,
    alignSelf: 'center',
    marginVertical: 10,
  },
  propertyRow: {
    marginVertical: 9,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  propertyRowItemsLoc: {
    flexDirection: 'row',
    // width: 150,
    justifyContent: 'space-between',
  },
  propertyRowItems: {
    flexDirection: 'row',
    width: 150,
    justifyContent: 'space-between',
  },
  overviewTitle: {
    color: '#313131',
    fontSize: 12,
  },
  overviewInfo: {
    color: '#828282',
    fontSize: 12,
  },
  iconsPadding: {padding: 2, marginHorizontal: 17},
  icon: {alignSelf: 'center'},
  iconText: {
    color: '#000000',
    fontSize: 10,
  },
  left: {padding: 5},
});
