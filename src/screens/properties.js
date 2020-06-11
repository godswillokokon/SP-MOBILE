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
} from 'react-native';
import {TopNavigationAction} from '@ui-kitten/components';
import {useSelector, useDispatch} from 'react-redux';
import {GetHouses} from '../redux/actions/propsActions';
import PropertiesPlaceholder from '../components/placeholder';
import TopNav from '../components/topNav';
import IconA from 'react-native-vector-icons/AntDesign';
import IconI from 'react-native-vector-icons/Ionicons';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import IconF from 'react-native-vector-icons/FontAwesome';
import {MenuItem, OverflowMenu} from '@ui-kitten/components';

export const PropertiesScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {properties} = useSelector((state) => state.properties);

  useEffect(() => {
    dispatch(GetHouses());
  }, [dispatch]);
  console.log(properties.properties, 'pro');
  const houses = properties.properties;
  //top nav
  const openDrawer = () => {
    requestAnimationFrame(() => {
      navigation.openDrawer();
    });
  };
  const navigateProperty = (data) => {
    requestAnimationFrame(() => {
      navigation.navigate('Property', {
        details: data,
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
  // const price = houses.price;
  // const state = houses.state;
  // let imageUrls = houses.take_two_images.img_urls;
  // console.log(imageUrls, 'imadg');
  function Properties({
    id,
    name,
    state,
    imageUrl,
    selected,
    onSelect,
    year_built,
    lga,
    price,
    details = houses,
  }) {
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
          alignSelf: 'center',
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
            <View
              style={{
                margin: 20,
                justifyContent: 'space-between',
                flexDirection: 'column',
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 16,
                  fontWeight: 'bold',
                  marginVertical: 3,
                }}>
                {name}
              </Text>
              <Text style={{color: '#fff', fontSize: 12, marginVertical: 3}}>
                {state}
              </Text>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 14,
                  fontWeight: 'bold',
                  marginVertical: 3,
                }}>
                {price}
              </Text>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 16,
                  fontWeight: 'bold',
                  marginVertical: 3,
                }}>
                {year_built}
              </Text>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 16,
                  fontWeight: 'bold',
                  marginVertical: 3,
                }}>
                {lga}
              </Text>
              <View style={{flexDirection: 'row', marginVertical: 3}}>
                <IconI
                  style={[{color: '#00959E'}]}
                  size={13}
                  name={'md-star'}
                />
                <IconI
                  style={[{color: '#00959E'}]}
                  size={13}
                  name={'md-star'}
                />
                <IconI
                  style={[{color: '#00959E'}]}
                  size={13}
                  name={'md-star'}
                />
                <IconI
                  style={[{color: '#00959E'}]}
                  size={13}
                  name={'md-star'}
                />
                <IconI
                  style={[{color: '#00959E'}]}
                  size={13}
                  name={'md-star-outline'}
                />
              </View>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  }

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
      <Text style={styles.title}>Properties</Text>
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
  //sort
  const [selectedIndexSort, setSelectedIndexSort] = useState(null);
  const [visibleSort, setVisibleSort] = useState(false);

  const onItemSelectSort = (SortIndex) => {
    setSelectedIndexSort(SortIndex);
    setVisibleSort(false);
  };

  const renderSortToggle = () => (
    <TouchableOpacity
      onPress={() => setVisibleSort(true)}
      style={{flexDirection: 'row', alignItems: 'center'}}>
      <IconMC style={[{color: '#828282'}]} name="sort-descending" size={20} />
      <Text style={{fontSize: 11, marginHorizontal: 2, color: '#828282'}}>
        Sort By
      </Text>
      <IconA style={[{color: '#828282', top: 2}]} name="down" size={13} />
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
      style={{flexDirection: 'row', alignItems: 'center'}}>
      <IconA style={[{color: '#828282'}]} name="filter" size={20} />
      <Text style={{fontSize: 11, marginHorizontal: 2, color: '#828282'}}>
        Filter
      </Text>
      <IconA style={[{color: '#828282', top: 2}]} name="down" size={13} />
    </TouchableOpacity>
  );
  const renderPlaceholders = () =>
    dummy.map((e, i) => <PropertiesPlaceholder key={i} />);
  const hold = null;
  return (
    <SafeAreaView style={{flex: 1}}>
      <TopNav Title={Title} LeftAction={LeftAction} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: Dimensions.get('window').width - 15,
          alignSelf: 'center',
          marginTop: 16,
        }}>
        <OverflowMenu
          anchor={renderSortToggle}
          visible={visibleSort}
          selectedIndex={selectedIndexSort}
          placement="top start"
          onSelect={onItemSelectSort}
          backdropStyle={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}
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
          backdropStyle={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}
          onBackdropPress={() => setVisibleFilter(false)}>
          <MenuItem title="Sale" />
          <MenuItem title="Rent" />
          <MenuItem title="Sale" />
        </OverflowMenu>
      </View>
      {houses ? (
        <View style={styles.MainContainer}>
          <FlatList
            data={houses}
            renderItem={({item}) => (
              <Properties
                id={item.id}
                name={item.name}
                state={item.state}
                price={item.price}
                imageUrl={item.imageUrl}
                details={item.details}
                year_built={item.year_built}
                lga={item.lga}
                selected={!!selected.get(item.id)}
                onSelect={onSelect}
              />
            )}
            keyExtractor={(item) => item.id}
            extraData={selected}
            numColumns={1}
          />
        </View>
      ) : (
        renderPlaceholders()
      )}
    </SafeAreaView>
  );
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
});
