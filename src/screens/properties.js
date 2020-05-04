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
  ScrollView
} from 'react-native';
import {
  TopNavigationAction,
  Input
} from '@ui-kitten/components';
import TopNav from '../components/topNav';
import IconA from 'react-native-vector-icons/AntDesign';
import IconI from 'react-native-vector-icons/Ionicons';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button, Layout, MenuItem, OverflowMenu } from '@ui-kitten/components';

const DATA_Categories = [
  {
    id: '1',
    title: 'Modern Bungalo',
    addr: '45 ntoe asi layout , Calabar',
    imageUrl: 'https://res.cloudinary.com/ogcodes/image/upload/v1587369546/house.png',
    amount: '₦300,000 / Yearly'
  },
  {
    id: '2',
    title: 'Two story twister',
    addr: '45 ntoe asi layout , Calabar',
    imageUrl: 'https://res.cloudinary.com/ogcodes/image/upload/v1587369546/house.png',
    amount: '₦300,000 / Yearly'
  },
  {
    id: '3',
    title: 'Cave House',
    addr: '45 ntoe asi layout , Calabar',
    imageUrl: 'https://res.cloudinary.com/ogcodes/image/upload/v1587369546/house.png',
    amount: '₦300,000 / Yearly'
  },
  {
    id: '4',
    title: 'Modern Bungalo',
    addr: '45 ntoe asi layout , Calabar',
    imageUrl: 'https://res.cloudinary.com/ogcodes/image/upload/v1587369546/house.png',
    amount: '₦300,000 / Yearly'
  },
  {
    id: '5',
    title: 'Two story twister',
    addr: '45 ntoe asi layout , Calabar',
    imageUrl: 'https://res.cloudinary.com/ogcodes/image/upload/v1587369546/house.png',
    amount: '₦300,000 / Yearly'
  },
  {
    id: '6',
    title: 'Modern Crip',
    addr: '45 ntoe asi layout , Calabar',
    imageUrl: 'https://res.cloudinary.com/ogcodes/image/upload/v1587369546/house.png',
    amount: '₦300,000 / Yearly'
  },
];

function Categories({ id, title, addr, imageUrl, selected, onSelect, amount }) {
  return (
    <TouchableOpacity
      onPress={() => onSelect(id)}
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
          {/* <View style={{ margin: 10 }}>
            <Text style={{
              fontSize: 14,
              color: '#fff',
            }}>{title}</Text>
            <Text style={{
              fontSize: 10,
              color: '#fff',
            }}>{subTitle}</Text>
          </View> */}
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

export const PropertiesScreen = ({ navigation }) => {
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
        Properties
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

