import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import IconI from 'react-native-vector-icons/Ionicons';

export default PropertyImages = ({
  data,
  index,
  category,
  address,
  amount,
  selected,
  onSelect,
}) => {
  // console.log(data, "keys")

  return (
    <TouchableOpacity
      onPress={() => onSelect(index)}
      style={{
        marginVertical: 2,
        marginHorizontal: 6,
        width: Dimensions.get('window').width - 60,
        height: 170,
        borderRadius: 6,
        backgroundColor: 'transparent',
      }}>
      <ImageBackground
        style={{flex: 1, width: '100%'}}
        source={{uri: data}}
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
              margin: 25,
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
              {category}
            </Text>
            <Text style={{color: '#fff', fontSize: 12, marginVertical: 3}}>
              {address}
            </Text>
            <Text
              style={{
                color: '#fff',
                fontSize: 14,
                fontWeight: 'bold',
                marginVertical: 3,
              }}>
              {amount}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};
