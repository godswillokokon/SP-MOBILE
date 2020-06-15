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
import {TopNavigationAction, Modal, Layout} from '@ui-kitten/components';
import {moderateScale} from 'react-native-size-matters';
import numbro from 'numbro';
import PropertyPlaceholder from '../components/propertyStaging';
import TopNav from '../components/topNav';
import IconA from 'react-native-vector-icons/AntDesign';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import IconM from 'react-native-vector-icons/MaterialIcons';
import IconF from 'react-native-vector-icons/FontAwesome';
import PropertyImages from '../components/propertyImages';

export const PropertyScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {house} = useSelector((state) => state.properties);
  const isHouse = house.house;

  useEffect(() => {
    let slug = navigation.state.params.slug;
    dispatch(GetHouse(slug));
  }, [dispatch, navigation.state.params.slug]);

  const navigateBack = () => {
    requestAnimationFrame(() => {
      navigation.navigate('Properties');
    });
  };
  const [visibleInspect, setvisibleInspect] = useState(false);
  const toggleInspect = () => {
    requestAnimationFrame(() => {
      setvisibleInspect(!visibleInspect);
    });
  };
  const inspectModal = () => {
    requestAnimationFrame(() => {
      setvisibleInspect(!visibleInspect);
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
  const mapElement = () => (
    <View style={{}}>
      <Layout style={styles.modalContainer}>
        <TouchableOpacity style={styles.modalX} onPress={inspectModal}>
          <Text style={styles.modalXtext}>X</Text>
        </TouchableOpacity>
        <View style={styles.modalBody}>
          <Text style={styles.modalHeader}>Inspect Property</Text>
          <Text style={styles.modalInfo}>
            Take a tour to our sites today, from our virtual tour to the
            physical tour. We ensure we show you everything you need to know
            about this property for a fee of ₦
            {numbro(1000).format({
              thousandSeparated: true,
            })}{' '}
            only
          </Text>
          <View style={styles.modalButtons}>
            <TouchableOpacity style={styles.modalOffline}>
              <Text style={styles.modalBtnText}>Offline</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalOnline}>
              <Text style={styles.modalBtnText}>Online</Text>
            </TouchableOpacity>
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
          </View>
          <View style={styles.inspectSection}>
            <TouchableOpacity onPress={inspectModal} style={styles.inspect}>
              <Image
                style={styles.inspectImage}
                source={require('../assets/mapIcon.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={inspectModal} style={styles.inspect}>
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
              {amenities.map((e, i) => e)}
            </View>
          </View>
          <View style={styles.overview}>
            <Text style={styles.header}>Property Overview</Text>
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
                <Text style={styles.overviewTitle}>Status</Text>
                <Text style={styles.overviewInfo}>{isHouse.status}</Text>
              </View>
            </View>

            <View style={styles.propertyRow}>
              <View style={styles.propertyRowItems}>
                <Text style={styles.overviewTitle}>Type</Text>
                <Text style={styles.overviewInfo}>{isHouse.transaction}</Text>
              </View>
              <View style={styles.propertyRowItems}>
                <Text style={styles.overviewTitle}>Dimension</Text>
                <Text style={styles.overviewInfo}>{isHouse.dimension} FT</Text>
              </View>
            </View>
            <View style={styles.propertyRow}>
              <View style={styles.propertyRowItems}>
                <Text style={styles.overviewTitle}>Location</Text>
                <Text style={styles.overviewInfo}>{isHouse.location}</Text>
              </View>
              <View style={styles.propertyRowItems}>
                <Text style={styles.overviewTitle}>Sub Category</Text>
                <Text style={styles.overviewInfo}>
                  {isHouse.house_subcategory.subcategory_name}
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{isHouse.transaction}</Text>
          </TouchableOpacity>
          <Modal
            visible={visibleInspect}
            animationType="slide"
            onBackdropPress={toggleInspect}
            backdropStyle={styles.backdrop}
            transparent={false}>
            {mapElement()}
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
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
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
  },
  modalOffline: {
    backgroundColor: '#0DABA8',
    paddingHorizontal: 25,
    paddingVertical: 5,
    borderRadius: 4,
    marginHorizontal: 10,
  },
  modalOnline: {
    backgroundColor: '#0DABA8',
    paddingHorizontal: 25,
    paddingVertical: 5,
    borderRadius: 4,
    marginHorizontal: 10,
  },
  modalBtnText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
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
  iconsPadding: {padding: 2},
  icon: {alignSelf: 'center'},
  iconText: {
    color: '#000000',
    fontSize: 10,
  },
  left: {padding: 5},
});
