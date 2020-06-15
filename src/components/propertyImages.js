import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from 'react-native';

export default PropertyImages = ({
  data,
  index,
  name,
  address,
  amount,
  selected,
  onSelect,
}) => {
  return (
    <TouchableOpacity onPress={() => onSelect(index)} style={styles.container}>
      <ImageBackground
        style={styles.imgBg}
        source={{uri: data}}
        // imageStyle={{ borderRadius: 6 }}
      >
        <View style={styles.main}>
          <View style={styles.subMain}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.address}>{address}</Text>
            <Text style={styles.amount}>{amount}</Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 2,
    marginHorizontal: 6,
    width: Dimensions.get('window').width - 60,
    height: 170,
    borderRadius: 6,
    backgroundColor: 'transparent',
  },
  imgBg: {
    flex: 1,
    width: '100%',
  },
  main: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    borderRadius: 6,
  },
  subMain: {
    margin: 25,
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  name: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 3,
  },
  address: {
    color: '#fff',
    fontSize: 12,
    marginVertical: 3,
  },
  amount: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    marginVertical: 3,
  },
});
