/* eslint-disable react-native/no-inline-styles */
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
  ImageBackground,
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
    // console.log(image, "oo")
    return (
      <TouchableOpacity
        // onPress={() => navigateService(approved_experts)}
        style={{
          marginVertical: 12,
          marginHorizontal: 5,
          // width: Dimensions.get('window').width - 10,
          // height: 200,
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
          justifyContent: 'center',
        }}>
        <View
          style={{
            flex: 1,
            width: Dimensions.get('window').width - 35,
            height: 200,
            borderRadius: 4,
            alignSelf: 'center',
          }}>
          <ImageBackground
            style={{
              // flex: 1,
              width: Dimensions.get('window').width - 35,
              height: 200,
            }}
            source={{uri: image}}>
            <View
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                position: 'absolute',
                width: Dimensions.get('window').width - 35,
                height: 200,
              }}
            />
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'flex-end',
                borderRadius: 6,
              }}>
              <View style={{}}>
                <Text
                  style={{
                    fontSize: 20,
                    color: '#9edddc',
                    alignSelf: 'center',
                    marginBottom: 15,
                  }}>
                  {name}
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    color: '#e6f6f6',
                    lineHeight: 20,
                    maxHeight: 100,
                    alignSelf: 'flex-start',
                  }}>
                  {description}
                </Text>
              </View>
            </View>
          </ImageBackground>
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
          keyExtractor={(item) => item.id.toString()}
          extraData={selected}
          numColumns={1}
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
