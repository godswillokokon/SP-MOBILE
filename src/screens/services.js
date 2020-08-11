import React, {useState, useCallback, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Image,
  BackHandler,
} from 'react-native';
import {TopNavigationAction, Text} from '@ui-kitten/components';
import TopNav from '../components/topNav';
import IconA from 'react-native-vector-icons/AntDesign';
import PropertiesPlaceholder from '../components/propertiesStaging';

import {useSelector, useDispatch} from 'react-redux';
import {GetCareers} from '../redux/actions/careersActions';

export const ServicesScreen = ({navigation}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      navigateBack,
    );
    dispatch(GetCareers());

    return () => backHandler.remove();
  }, [dispatch, navigateBack]);
  const {careers} = useSelector((state) => state.careers);

  //top nav
  const navigateBack = () => {
    requestAnimationFrame(() => {
      navigation.navigate('Hamburger');
    });
  };
  const navigateService = (data) => {
    requestAnimationFrame(() => {
      navigation.navigate('Service', {
        details: data,
      });
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
      <Text style={styles.title}>Careers</Text>
    </View>
  );

  function Categories({
    id,
    name,
    description,
    image,
    selected,
    onSelect,
    approved_experts,
  }) {
    // console.log(approved_experts, "oo")
    return (
      <TouchableOpacity
        onPress={() => navigateService(approved_experts)}
        style={{
          marginVertical: 12,
          marginHorizontal: 5,
          width: 104,
          height: 126,
          borderRadius: 4,
          backgroundColor: '#fff',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}>
        <View
          style={{
            flex: 1,
            width: 100,
            height: 100,
            borderRadius: 4,
            alignSelf: 'center',
          }}>
          <Image
            style={{flex: 1, width: 100, height: 100}}
            source={{uri: image}}
          />
          <View
            style={{
              flex: 1,
              backgroundColor: '#fff',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              borderRadius: 6,
            }}>
            <View style={{margin: 5}}>
              <Text
                style={{
                  fontSize: 12,
                  color: '#0DABA8',
                  lineHeight: 13,
                }}>
                {name}
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  color: '#828282',
                  lineHeight: 14,
                  maxHeight: 50,
                }}>
                {description}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

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
    <SafeAreaView style={{flex: 1}}>
      <TopNav Title={Title} LeftAction={LeftAction} />
      <View style={{flex: 1, alignSelf: 'center', marginVertical: 24}}>
        <FlatList
          data={careers}
          renderItem={({item}) => (
            <Categories
              id={item.id}
              name={item.name}
              description={item.description}
              image={item.image}
              approved_experts={item.approved_experts}
              selected={!!selected.get(item.id)}
              onSelect={onSelect}
            />
          )}
          keyExtractor={(item) => item.id}
          extraData={selected}
          numColumns={3}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    // fontFamily: 'Muli',
    alignSelf: 'center',
    color: '#3A3A3A',
    fontWeight: 'bold',
  },
});
