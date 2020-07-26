import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  BackHandler,
} from 'react-native';
import {TopNavigationAction} from '@ui-kitten/components';
import {useSelector, useDispatch} from 'react-redux';
import {GetReservedProps} from '../redux/actions/propsActions';
import PropertiesPlaceholder from '../components/propertiesStaging';
import TopNav from '../components/topNav';
import IconA from 'react-native-vector-icons/AntDesign';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import IconF from 'react-native-vector-icons/FontAwesome';
import {MenuItem, OverflowMenu, Text} from '@ui-kitten/components';
import numbro from 'numbro';

export const ReservedPropsScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {reserved_houses} = useSelector((state) => state.properties);
  console.log(reserved_houses);

  useEffect(() => {
    dispatch(GetReservedProps());
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      navigateBack,
    );

    return () => backHandler.remove();
  }, [dispatch, navigateBack]);
  const isHouses = reserved_houses.house;
  const isLands = reserved_houses.land;

  //top nav
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const navigateBack = () => {
    requestAnimationFrame(() => {
      navigation.navigate('Tabs');
    });
  };
  
  const openDrawer = () => {
    requestAnimationFrame(() => {
      navigation.openDrawer();
    });
  };
  const navigateProperty = (data) => {
    requestAnimationFrame(() => {
      navigation.navigate('House', {
        slug: data,
      });
    });
  };

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
  function Properties({
    id,
    name,
    state,
    take_two_images,
    payment_type,
    lga,
    price,
    slug,
  }) {
    return (
      <TouchableOpacity
        onPress={() => navigateProperty(slug)}
        style={styles.card}>
        <ImageBackground
          style={styles.bgImg}
          source={{
            uri: take_two_images[0]?.img_url,
          }}
          imageStyle={styles.bgImgBorder}>
          <View style={styles.cardBody}>
            <View style={styles.cardBodySub}>
              <Text style={styles.propertyName}>{name}</Text>
              <Text style={styles.location}>
                {lga}, {state}
              </Text>
              <Text style={styles.paymentType}>
                Payment Type: {payment_type}
              </Text>
              <Text style={styles.amount}>
                ₦{numbro(price).format({thousandSeparated: true})}
              </Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  }

  const Left = () => <IconA color={'#00959E'} name="arrowleft" size={25} />;
  const LeftAction = () => (
    <TopNavigationAction
      icon={Left}
      onPress={navigateBack}
      style={[{padding: 5}]}
    />
  );
  const Title = () => (
    <View>
      <Text style={styles.title}>Reserved Properties</Text>
    </View>
  );
  //sort
  const [selectedIndexSort, setSelectedIndexSort] = useState(null);
  const [visibleSort, setVisibleSort] = useState(false);

  const onItemSelectSort = (SortIndex) => {
    setSelectedIndexSort(SortIndex);
    setVisibleSort(false);
  };
  // const hold = null;

  const renderSortToggle = () => (
    <TouchableOpacity
      onPress={() => setVisibleSort(true)}
      style={styles.sortToggle}>
      <IconMC color={'#828282'} name="sort-descending" size={20} />
      <Text style={styles.sortToggleText}>Sort By</Text>
      <IconA style={[{top: 2}]} color={'#828282'} name="down" size={13} />
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
    <TouchableOpacity
      onPress={() => setVisibleFilter(true)}
      style={styles.filterToggle}>
      <IconA color={'#828282'} name="filter" size={20} />
      <Text style={styles.filterToggleText}>Filter</Text>
      <IconA style={[{top: 2}]} color={'#828282'} name="down" size={13} />
    </TouchableOpacity>
  );
  const renderPlaceholders = () =>
    dummy.map((e, i) => <PropertiesPlaceholder key={i} />);
  return (
    <SafeAreaView style={styles.container}>
      <TopNav Title={Title} LeftAction={LeftAction} />
      <View style={styles.containerSub}>
        <OverflowMenu
          anchor={renderSortToggle}
          visible={visibleSort}
          selectedIndex={selectedIndexSort}
          placement="top start"
          onSelect={onItemSelectSort}
          backdropStyle={styles.backdrop}
          onBackdropPress={() => setVisibleSort(false)}>
          <MenuItem title="Rentals" />
          <MenuItem title="Sale" />
          <MenuItem title="Mortgage" />
        </OverflowMenu>
        <OverflowMenu
          anchor={renderFilterToggle}
          visible={visibleFilter}
          selectedIndex={selectedIndexFilter}
          placement="top end"
          onSelect={onItemSelectFilter}
          backdropStyle={styles.backdrop}
          onBackdropPress={() => setVisibleFilter(false)}>
          <MenuItem title="Sale" />
          <MenuItem title="Rent" />
          <MenuItem title="Sale" />
        </OverflowMenu>
      </View>
      <ScrollView style={{flex: 1}}>
        <View style={{flex: 1, marginVertical: 10,}}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              alignSelf: 'center',
            }}>
            Houses
          </Text>
          {isHouses ? (
            <View style={styles.mainContainer}>
              {isHouses.take_two_images ? (
                <FlatList
                  data={isHouses}
                  // showsVerticalScrollIndicator={false}
                  horizontal
                  renderItem={({item}) => (
                    <Properties
                      id={item?.id}
                      name={item?.name}
                      state={item?.state}
                      price={item?.price}
                      take_two_images={item?.take_two_images}
                      slug={item?.slug}
                      payment_type={item?.payment_type}
                      lga={item?.lga}
                    />
                  )}
                  keyExtractor={(item) => item.id.toString()}
                  numColumns={1}
                />
              ) : (
                <FlatList
                  data={isHouses}
                  // showsVerticalScrollIndicator={false}
                  horizontal
                  renderItem={({item}) => (
                    <Properties
                      id={item?.id}
                      name={item?.name}
                      state={item?.state}
                      price={item?.price}
                      take_two_images={item?.take_two_images}
                      slug={item?.slug}
                      payment_type={item?.payment_type}
                      lga={item?.lga}
                    />
                  )}
                  keyExtractor={(item) => item.id.toString()}
                  numColumns={1}
                />
              )}
            </View>
          ) : (
            renderPlaceholders()
          )}
        </View>
        <View style={{ flex: 1, marginVertical: 10,}}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              alignSelf: 'center',
            }}>
            Lands
          </Text>
          {isHouses ? (
            <View style={styles.mainContainer}>
              {isHouses.take_two_images ? (
                <FlatList
                  data={isLands}
                  // showsVerticalScrollIndicator={false}
                  horizontal
                  renderItem={({item}) => (
                    <Properties
                      id={item?.id}
                      name={item?.name}
                      state={item?.state}
                      price={item?.price}
                      take_two_images={item?.take_two_images}
                      slug={item?.slug}
                      payment_type={item?.payment_type}
                      lga={item?.lga}
                    />
                  )}
                  keyExtractor={(item) => item.id.toString()}
                  numColumns={1}
                />
              ) : (
                <FlatList
                  data={isLands}
                  // showsVerticalScrollIndicator={false}
                  horizontal
                  renderItem={({item}) => (
                    <Properties
                      id={item?.id}
                      name={item?.name}
                      state={item?.state}
                      price={item?.price}
                      take_two_images={item?.take_two_images}
                      slug={item?.slug}
                      payment_type={item?.payment_type}
                      lga={item?.lga}
                    />
                  )}
                  keyExtractor={(item) => item.id.toString()}
                  numColumns={1}
                />
              )}
            </View>
          ) : (
            renderPlaceholders()
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerSub: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width - 35,
    alignSelf: 'center',
    marginTop: 16,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  title: {
    fontSize: 18,
    alignSelf: 'center',
    color: '#3A3A3A',
    fontWeight: 'bold',
  },
  card: {
    marginHorizontal: 6,
    // width: Dimensions.get('window').width - 35,
    height: 200,
    borderRadius: 10,
    backgroundColor: 'transparent',
    flex: 1,
    alignSelf: 'center',
  },
  bgImg: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  bgImgBorder: {
    borderRadius: 10,
  },
  cardBody: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    borderRadius: 10,
  },
  cardBodySub: {
    margin: 25,
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  propertyName: {
    color: '#f7f7ee',
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 3,
  },
  location: {
    color: '#f7f7ee',
    fontSize: 12,
    marginVertical: 3,
  },
  paymentType: {
    color: '#f7f7ee',
    fontSize: 12,
    fontWeight: 'bold',
    marginVertical: 3,
  },
  amount: {
    color: '#f7f7ee',
    fontSize: 14,
    fontWeight: 'bold',
    marginVertical: 3,
  },
  sortToggle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sortToggleText: {
    fontSize: 11,
    marginHorizontal: 2,
    color: '#828282',
  },
  filterToggle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterToggleText: {
    fontSize: 11,
    marginHorizontal: 2,
    color: '#828282',
  },
  mainContainer: {
    justifyContent: 'center',
    flex: 1,
    paddingTop: 11,
    width: Dimensions.get('window').width - 35,
    alignSelf: 'center',
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
});
