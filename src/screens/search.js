import React, {useState, useCallback} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {TopNavigationAction, Input, Text} from '@ui-kitten/components';
import {useSelector, useDispatch} from 'react-redux';
import {Search} from '../redux/actions/searchActions';
import PropertiesPlaceholder from '../components/propertiesStaging';
import TopNav from '../components/topNav';
import IconF from 'react-native-vector-icons/FontAwesome';
import IconA from 'react-native-vector-icons/AntDesign';
import numbro from 'numbro';

export const SearchScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {search} = useSelector((state) => state.search);
  console.log(search);

  const isSearch = null;

  //top nav
  const openDrawer = () => {
    requestAnimationFrame(() => {
      navigation.openDrawer();
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
      <Text style={styles.title}>Search</Text>
    </View>
  );
  const SearchIcon = () => (
    <View>
      <IconA style={[{color: '#00959E'}]} size={18} name={'search1'} />
    </View>
  );
  const [Svalue, setValueS] = useState('');
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
  const renderPlaceholders = () =>
    dummy.map((e, i) => <PropertiesPlaceholder key={i} />);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <TopNav Title={Title} LeftAction={LeftAction} />
      <Input
        value={Svalue}
        placeholder="Discover Properties"
        style={styles.inputLocations}
        textStyle={styles.inputText}
        onChangeText={setValueS}
        accessoryLeft={SearchIcon}
        placeholderTextColor={'#BDBDBD'}
        returnKeyType="search"
        onSubmitEditing={() => {
          console.log(Svalue);
          dispatch(Search(Svalue));
        }}
      />
      <ScrollView>
        {isSearch ? (
          <View style={styles.mainContainer}>
            {isSearch.take_two_images ? (
              <FlatList
                data={isSearch}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => (
                  <Properties
                    id={item?.searchable.id}
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
                data={isSearch}
                showsVerticalScrollIndicator={false}
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
      </ScrollView>
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
  inputLocations: {
    borderColor: '#f6f6f6',
    width: Dimensions.get('window').width - 50,
    alignSelf: 'center',
    margin: 10,
    textShadowColor: '0px 0px 2px rgba(0, 0, 0, 0.12)',
    borderRadius: 10,
  },
  inputText: {color: '#3A3A3A'},
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
  card: {
    marginVertical: 6,
    marginHorizontal: 6,
    width: Dimensions.get('window').width - 35,
    height: 173,
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
