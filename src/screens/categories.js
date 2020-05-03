import React, { useState, useCallback } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import {
  TopNavigationAction,
} from '@ui-kitten/components';
import TopNav from '../components/topNav';
import IconA from 'react-native-vector-icons/AntDesign';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import { MenuItem, OverflowMenu } from '@ui-kitten/components';

const DATA_Categories = [
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
  {
    id: '11',
    title: 'Rent',
    subTitle: '200 appartments for rent',
    imageUrl: 'https://res.cloudinary.com/ogcodes/image/upload/v1587369546/house.png'
  },
  {
    id: '22',
    title: 'Sale',
    subTitle: '200 appartments for sale',
    imageUrl: 'https://res.cloudinary.com/ogcodes/image/upload/v1587369546/house.png'
  },
  {
    id: '33',
    title: 'Rent',
    subTitle: '200 appartments for rent',
    imageUrl: 'https://res.cloudinary.com/ogcodes/image/upload/v1587369546/house.png'
  },
  {
    id: '44',
    title: 'Rent',
    subTitle: '200 appartments for rent',
    imageUrl: 'https://res.cloudinary.com/ogcodes/image/upload/v1587369546/house.png'
  },
  {
    id: '55',
    title: 'Sale',
    subTitle: '200 appartments for sale',
    imageUrl: 'https://res.cloudinary.com/ogcodes/image/upload/v1587369546/house.png'
  },
  {
    id: '66',
    title: 'Rent',
    subTitle: '200 appartments for rent',
    imageUrl: 'https://res.cloudinary.com/ogcodes/image/upload/v1587369546/house.png'
  },
  {
    id: '12',
    title: 'Rent',
    subTitle: '200 appartments for rent',
    imageUrl: 'https://res.cloudinary.com/ogcodes/image/upload/v1587369546/house.png'
  },
  {
    id: '12',
    title: 'Sale',
    subTitle: '200 appartments for sale',
    imageUrl: 'https://res.cloudinary.com/ogcodes/image/upload/v1587369546/house.png'
  },
  {
    id: '31',
    title: 'Rent',
    subTitle: '200 appartments for rent',
    imageUrl: 'https://res.cloudinary.com/ogcodes/image/upload/v1587369546/house.png'
  },
  {
    id: '41',
    title: 'Rent',
    subTitle: '200 appartments for rent',
    imageUrl: 'https://res.cloudinary.com/ogcodes/image/upload/v1587369546/house.png'
  },
  {
    id: '51',
    title: 'Sale',
    subTitle: '200 appartments for sale',
    imageUrl: 'https://res.cloudinary.com/ogcodes/image/upload/v1587369546/house.png'
  },
  {
    id: '61',
    title: 'Rent',
    subTitle: '200 appartments for rent',
    imageUrl: 'https://res.cloudinary.com/ogcodes/image/upload/v1587369546/house.png'
  },
];

function Categories({ id, title, subTitle, imageUrl, selected, onSelect }) {
  return (
    <TouchableOpacity
      onPress={() => onSelect(id)}
      style={{
        marginVertical: 6,
        marginHorizontal: 6,
        width: 103,
        height: 153,
        borderRadius: 6,
        backgroundColor: 'transparent',
        flex: 1
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

export const CategoriesScreen = ({ navigation }) => {
  //top nav
  const navigateBack = () => {
    requestAnimationFrame(() => {
      navigation.navigate('Draw');
      navigation.goBack();
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
        Categories
      </Text>
    </View >
  );

  //selected
  const [Svalue, setValueS] = useState('');

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
      <TopNav Title={Title} LeftAction={LeftAction} />
      <View style={{
        flexDirection: 'row', justifyContent: 'space-between',
        width: Dimensions.get('window').width - 20,
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
          <MenuItem title='Sale' />
          <MenuItem title='Rent' />
          <MenuItem title='Sale' />
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
              subTitle={item.subTitle}
              imageUrl={item.imageUrl}
              selected={!!selected.get(item.id)}
              onSelect={onSelect}
            />
          )}
          keyExtractor={item => item.id}
          extraData={selected}
          numColumns={3}
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

