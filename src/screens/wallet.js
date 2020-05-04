import React, { useState, useCallback } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {
  TopNavigationAction,
} from '@ui-kitten/components';
import {
  Avatar,
} from 'react-native-paper';
import TopNav from '../components/topNav';
import IconA from 'react-native-vector-icons/AntDesign';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import IconS from 'react-native-vector-icons/SimpleLineIcons';

const DATA_Categories = [
  {
    id: '1',
    title: 'Transfer to Naruto Uzumaki',
    date: '24th April 2020',
    amount: '23, 000.00',
    type: 'transfer'
  },
  {
    id: '2',
    title: 'Credited Wallet',
    date: '20th April 2020',
    amount: '50, 000.00',
    type: 'credit'
  },
  {
    id: '3',
    title: 'Monthly Property Installment',
    date: '4th April 2020',
    amount: '200, 000.00',
    type: 'installment'
  },
  {
    id: '4',
    title: 'Transfer to Obito Uchiha',
    date: '2nd March 2020',
    amount: '3, 000.00',
    type: 'transfer'
  },
  {
    id: '5',
    title: 'Credited Wallet',
    date: '2nd March 2020',
    amount: '19, 000.00',
    type: 'credit'
  },
  {
    id: '6',
    title: 'Transfer to Madara Uchiha',
    date: '10th January 2020',
    amount: '3, 000.00',
    type: 'transfer'
  },
];
function Categories({ id, title, date, amount, selected, onSelect, type }) {


  if (type == 'transfer') { head = "T"; bg = "#EB5757" };
  if (type == 'credit') { head = "C"; bg = "#0DABA8" };
  if (type == 'installment') { head = "P"; bg = "#55ACEE" };


  return (

    <TouchableOpacity
      onPress={() => onSelect(id)}
      style={{
        width: Dimensions.get('window').width - 20,
        marginVertical: 15,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}
    >
      <View style={{ flexDirection: 'row', }}>
        <View style={{
          backgroundColor: bg, width: 50, height: 50, borderRadius: 100, justifyContent: 'center',
        }}>
          <Text style={{ alignSelf: 'center', color: '#fff', fontSize: 20 }}>{head}</Text>
        </View>
        <View style={{ justifyContent: 'center', marginHorizontal: 10 }}>
          <Text style={{ color: '#3A3A3A', fontSize: 13, fontWeight: 'bold', width: 170, height: 16 }}>{title}</Text>
          <Text style={{ color: '#3A3A3A', fontSize: 12 }}>{date}</Text>
        </View>
      </View>

      <Text style={{ color: '#EB5757', fontSize: 16, alignSelf: 'center', }}>
        ₦{amount}
      </Text>
    </TouchableOpacity>
  );
}


export const WalletScreen = ({ navigation }) => {
  //top nav
  const navigateBack = () => {
    requestAnimationFrame(() => {
      navigation.navigate('Draw');
    })
  };
  const navigateTransactions = () => {
    requestAnimationFrame(() => {
      navigation.navigate('WalletTransation');
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
        Wallet
      </Text>
    </View >
  );

  //selected
  const [selected, setSelected] = useState(new Map());

  const onSelect = useCallback(
    id => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));
      setSelected(newSelected);
    },
    [selected],
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNav Title={Title} LeftAction={LeftAction} />

      <View style={{
        flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20, width: Dimensions.get('window').width - 20,
        alignSelf: 'center'
      }}>
        <View style={{ flexDirection: 'row' }}>
          <Avatar.Image
            source={{
              uri: 'https://res.cloudinary.com/ogcodes/image/upload/v1581349441/e4i61gkcr7hvixpaqkgb.jpg'
            }}
            size={71}
          />
          <View style={{ alignSelf: 'center', marginLeft: 10 }}>
            <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#000' }}>Godswill Effiong Okokon</Text>
            <Text style={{ fontSize: 12, color: '#828282' }}>Real estate investor</Text>
          </View>
        </View>
        <TouchableOpacity style={{ flexDirection: 'row', alignSelf: 'center' }}>
          <Text style={{ color: '#0DABA8', fontSize: 12, fontWeight: 'bold', alignSelf: 'center', marginHorizontal: 5 }}>Fund Wallet</Text>
          <IconMC style={[{ color: '#0DABA8' }]} size={10} name={'credit-card-plus'} />
        </TouchableOpacity>
      </View>
      <View style={{
        backgroundColor: '#0DABA8', height: 160, width: Dimensions.get('window').width - 20, alignSelf: 'center',
        marginTop: 28, borderRadius: 6
      }}>
        <View style={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)', position: 'absolute',
          width: Dimensions.get('window').width - 220,
          height: 150,
          alignSelf: 'flex-end',
          borderBottomLeftRadius: 100,
          borderTopLeftRadius: 10
        }} />
        <View style={{
          backgroundColor: 'rgba(255, 255, 255, 0.2)', position: 'absolute',
          width: Dimensions.get('window').width - 260,
          height: 120,
          alignSelf: 'flex-end',
          borderBottomLeftRadius: 100,
          borderTopLeftRadius: 10
        }} />
        <View style={{
          backgroundColor: 'rgba(255, 255, 255, 0.2)', position: 'absolute',
          width: Dimensions.get('window').width - 320,
          height: 50,
          alignSelf: 'flex-start',
          borderBottomRightRadius: 100,
          borderTopRightRadius: 10
        }} />
        <View style={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)', position: 'absolute',
          width: Dimensions.get('window').width - 330,
          height: 30,
          alignSelf: 'flex-start',
          borderBottomRightRadius: 100,
          borderTopRightRadius: 10
        }} />
        <View style={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)', position: 'absolute',
          width: Dimensions.get('window').width - 320,
          height: 50,
          top: 110,
          left: 80,
          borderBottomRightRadius: 30,
          borderTopRightRadius: 10
        }} />
        <View style={{
          backgroundColor: 'rgba(255, 255, 255, 0.2)', position: 'absolute',
          width: Dimensions.get('window').width - 340,
          height: 35,
          top: 110,
          left: 80,
          borderBottomRightRadius: 30,
          borderTopRightRadius: 10
        }} />
        <View style={{
          flexDirection: 'row', justifyContent: 'space-around', flex: 1,
          alignItems: 'center'
        }}>
          <IconS name='wallet' color='#fff' size={80} style={{}} />
          <View>
            <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>
              Total
            </Text>
            <Text style={{ color: '#fff', fontSize: 28, fontWeight: 'bold' }}>
              ₦23, 000.00
            </Text>
          </View>
        </View>
        <Text style={{ color: '#fff', fontSize: 12, marginBottom: 13, marginLeft: 40 }}>Last wallet activity 2 days ago</Text>
      </View>
      <View style={{ flex: 1 }}>
        <View style={{
          width: Dimensions.get('window').width - 20, flexDirection: 'row', justifyContent: 'space-between',
          alignSelf: 'center', marginVertical: 20
        }}>
          <Text style={{ color: '#3A3A3A', fontSize: 12 }}>
            Recent Transactions
          </Text>
          <TouchableOpacity onPress={navigateTransactions}>
            <Text style={{ color: '#3A3A3A', fontSize: 12 }}>
              Sell All
          </Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: Dimensions.get('window').width - 20, alignSelf: 'center', backgroundColor: '#828282', height: 0.7 }} />

        <View style={{ width: Dimensions.get('window').width - 20, alignSelf: 'center', flex: 1 }}>
          <FlatList
            data={DATA_Categories}
            renderItem={({ item }) => (
              <Categories
                id={item.id}
                title={item.title}
                date={item.date}
                amount={item.amount}
                type={item.type}
                selected={!!selected.get(item.id)}
                onSelect={onSelect}
              />
            )}
            keyExtractor={item => item.id}
            extraData={selected}
            numColumns={1}
          />
        </View>
      </View>
    </SafeAreaView >
  )

};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontFamily: 'Muli',
    alignSelf: 'center',
    color: '#3A3A3A',
    fontWeight: 'bold',
  },
})