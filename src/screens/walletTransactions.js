import React, {useState, useCallback, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  BackHandler,
  ToastAndroid,
} from 'react-native';
import PropertiesPlaceholder from '../components/propertiesStaging';
import {
  MenuItem,
  OverflowMenu,
  TopNavigationAction,
  Text,
} from '@ui-kitten/components';
import TopNav from '../components/topNav';
import IconA from 'react-native-vector-icons/AntDesign';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';

import {useSelector, useDispatch} from 'react-redux';
import {GetTransactionFull} from '../redux/actions/walletActions';
import numbro from 'numbro';

let head;
let bg;
function Categories({id, description, date, amount, selected, onSelect, type}) {
  if (type === 'debit') {
    head = 'D';
    bg = '#EB5757';
  }
  if (type === 'credit') {
    head = 'C';
    bg = '#0DABA8';
  }
  if (type === 'installment') {
    head = 'P';
    bg = '#55ACEE';
  }

  return (
    <TouchableOpacity
      onPress={() => onSelect(id)}
      style={{
        width: Dimensions.get('window').width - 20,
        marginVertical: 15,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            backgroundColor: bg,
            width: 50,
            height: 50,
            borderRadius: 100,
            justifyContent: 'center',
          }}>
          <Text style={{alignSelf: 'center', color: '#fff', fontSize: 20}}>
            {head}
          </Text>
        </View>
        <View style={{justifyContent: 'center', marginHorizontal: 10}}>
          <Text
            style={{
              color: '#3A3A3A',
              fontSize: 13,
              fontWeight: 'bold',
              width: 170,
              height: 16,
            }}>
            {description}
          </Text>
          <Text style={{color: '#3A3A3A', fontSize: 12}}>{date}</Text>
        </View>
      </View>

      <Text style={{color: '#EB5757', fontSize: 16, alignSelf: 'center'}}>
        {`₦${numbro(amount).format({
          thousandSeparated: true,
        })}`}
      </Text>
    </TouchableOpacity>
  );
}

export const WalletTransationScreen = ({navigation}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      navigateBack,
    );
    dispatch(GetTransactionFull());

    return () => backHandler.remove();
  }, [dispatch, navigateBack]);
  const {transactionFull} = useSelector((state) => state.wallet);

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
  const renderPlaceholders = () =>
    dummy.map((e, i) => <PropertiesPlaceholder key={i} />);

  //top nav
  const navigateBack = () => {
    requestAnimationFrame(() => {
      // navigation.navigate('Draw');
      navigation.navigate('Wallet');
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
      <Text style={styles.title}>Wallet</Text>
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
      <IconMC style={[{color: '#3A3A3A'}]} name="sort-descending" size={20} />
      <Text style={{fontSize: 11, marginHorizontal: 2, color: '#3A3A3A'}}>
        Sort By
      </Text>
      <IconA style={[{color: '#3A3A3A', top: 2}]} name="down" size={13} />
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={{flex: 1}}>
      <TopNav Title={Title} LeftAction={LeftAction} />

      <View style={{flex: 1}}>
        <View
          style={{
            width: Dimensions.get('window').width - 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignSelf: 'center',
            marginVertical: 20,
          }}>
          <Text style={{color: '#3A3A3A', fontSize: 12}}>All Transactions</Text>
          <OverflowMenu
            anchor={renderSortToggle}
            visible={visibleSort}
            selectedIndex={selectedIndexSort}
            placement="top start"
            onSelect={onItemSelectSort}
            backdropStyle={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}
            onBackdropPress={() => setVisibleSort(false)}>
            <MenuItem title="Lastest" />
            <MenuItem title="Oldest" />
          </OverflowMenu>
        </View>
        <View
          style={{
            width: Dimensions.get('window').width - 20,
            alignSelf: 'center',
            backgroundColor: '#828282',
            height: 0.7,
          }}
        />

        {transactionFull ? (
          <View
            style={{
              width: Dimensions.get('window').width - 20,
              alignSelf: 'center',
              flex: 1,
            }}>
            <FlatList
              data={transactionFull}
              renderItem={({item}) => (
                <Categories
                  id={item.id}
                  description={item.description}
                  date={item.updated_at}
                  amount={item.amount}
                  type={item.type}
                  selected={!!selected.get(item.id)}
                  onSelect={onSelect}
                />
              )}
              keyExtractor={(item) => item.id.toString()}
              extraData={selected}
              numColumns={1}
            />
          </View>
        ) : (
          renderPlaceholders()
        )}
      </View>
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
});
