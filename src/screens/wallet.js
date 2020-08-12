/* eslint-disable react-native/no-inline-styles */
import React, {useState, useCallback, useEffect, useRef} from 'react';
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
  TopNavigationAction,
  Text,
  Modal,
  Layout,
  Input,
} from '@ui-kitten/components';
import PaystackWebView from 'react-native-paystack-webview';
import {useSelector, useDispatch} from 'react-redux';
import {Credit, GetTransactionOverview} from '../redux/actions/walletActions';
import {GetUserData} from '../redux/actions/userActions';
import numbro from 'numbro';

import {v4 as uuidv4} from 'uuid';
import {Avatar} from 'react-native-paper';
import TopNav from '../components/topNav';
import IconA from 'react-native-vector-icons/AntDesign';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import IconS from 'react-native-vector-icons/SimpleLineIcons';


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

export const WalletScreen = ({navigation}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      navigateBack,
    );
    dispatch(GetTransactionOverview());
    dispatch(GetUserData());

    return () => backHandler.remove();
  }, [dispatch, navigateBack]);
  const {user} = useSelector((state) => state.user);
  const {transactionOverview} = useSelector((state) => state.wallet);
  console.log(transactionOverview);

  const [visibleInspect, setvisibleInspect] = useState(false);
  const [fundAmount, setFundAmount] = useState('');

  const toggleInspect = () => {
    requestAnimationFrame(() => {
      setvisibleInspect(!visibleInspect);
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
  const renderPlaceholders = () =>
    dummy.map((e, i) => <PropertiesPlaceholder key={i} />);

  const inspectElement = () => (
    <View style={{}}>
      <Layout style={styles.modalContainer}>
        <TouchableOpacity style={styles.modalX} onPress={toggleInspect}>
          <Text style={styles.modalXtext}>X</Text>
        </TouchableOpacity>
        <View style={styles.modalBody}>
          <Text style={styles.modalHeader}>Enter Credit Amount</Text>
          <View style={styles.modalButtons}>
            <Input
              value={fundAmount}
              placeholder="20,000"
              style={styles.inputEmail}
              textStyle={styles.inputText}
              labelStyle={styles.inputLabel}
              captionTextStyle={styles.inputCaption}
              onChangeText={setFundAmount}
              // accessoryRight={MailIcon}
              returnKeyType="next"
              keyboardType="number-pad"
              placeholderTextColor={'#fff'}
              accessibilityLabel="Amount"
              // disabled={load}
            />
          </View>
          <TouchableOpacity
            onPress={() => FundFinal()}
            style={styles.modalOffline}>
            <Text style={styles.modalBtnText}>Next</Text>
          </TouchableOpacity>
        </View>
      </Layout>
    </View>
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const navigateBack = () => {
    requestAnimationFrame(() => {
      navigation.navigate('Tabs');
    });
  };
  //top nav
  const navigateTransactions = () => {
    requestAnimationFrame(() => {
      navigation.navigate('WalletTransation');
    });
  };
  const Left = () => <IconA color={'#00959E'} name="arrowleft" size={25} />;

  const LeftAction = () => (
    <TopNavigationAction
      icon={Left}
      onPress={navigateBack}
      style={styles.left}
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
  // let lastAct = new Date('Mon, 10 Aug 2020 16:21:22 GMT')();
  // new Date(created_at).toDateString()
  // console.log(lastAct);

  const childRef = useRef();
  const showToast = (message) => {
    ToastAndroid.show(message, ToastAndroid.LONG, ToastAndroid.TOP, 25, 50);
  };
  const Fund = () => {
    user.verified
      ? setvisibleInspect(!visibleInspect)
      : showToast('Get your account Verified');
  };
  const FundFinal = () => {
    toggleInspect();
    childRef.current.StartTransaction();
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <TopNav Title={Title} LeftAction={LeftAction} />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingTop: 20,
          width: Dimensions.get('window').width - 20,
          alignSelf: 'center',
        }}>
        <View style={{flexDirection: 'row'}}>
          <Avatar.Image
            source={{
              uri: user.picture,
            }}
            size={71}
          />
          <View style={{alignSelf: 'center', marginLeft: 10}}>
            <Text style={{fontSize: 14, fontWeight: 'bold', color: '#000'}}>
              {user.name}
            </Text>
            <Text style={{fontSize: 12, color: '#828282'}}>{user.email}</Text>
          </View>
        </View>
        <TouchableOpacity style={{flexDirection: 'row', alignSelf: 'center'}}>
          <View>
            <PaystackWebView
              // buttonText="Rent"
              showPayButton={false}
              ref={childRef}
              paystackKey="pk_test_cc5a16f36a9c190775dcc8eeefeeeddd3b209d46"
              paystackSecretKey="sk_test_f9e9909d4b7bc2e45b1c0cd26bd4761551543197"
              amount={fundAmount}
              billingEmail={user.email}
              billingMobile={user.phone}
              billingName={user.name}
              ActivityIndicatorColor="#0DABA8"
              SafeAreaViewContainer={{marginHorizontal: 15}}
              SafeAreaViewContainerModal={{backgroundColor: '#33393a'}}
              refNumber={uuidv4()}
              handleWebViewMessage={(e) => {
                // handle the message
                console.log(e, 'message');
              }}
              onCancel={(e) => {
                // handle response here
                console.log(e, 'failed');
              }}
              onSuccess={(res) => {
                // handle response here
                console.log(res, 'success');
                const amount = fundAmount;
                const payment_plan = 'outright';
                const property_type = 'save';
                const reference = res.data.reference;
                const data = {
                  amount,
                  payment_plan,
                  property_type,
                  reference,
                };
                dispatch(Credit({...data}));
                setTimeout(() => {
                  dispatch(GetUserData());
                dispatch(GetTransactionOverview());
                }, 3000);
              }}
              autoStart={false}
              textStyles={styles.modalBtnText}
              btnStyles={styles.modalOnline}
            />
            <TouchableOpacity style={{padding: 5}} onPress={() => Fund()}>
              <Text
                style={{
                  color: '#0DABA8',
                  fontSize: 12,
                  fontWeight: 'bold',
                  alignSelf: 'center',
                  marginHorizontal: 5,
                }}>
                Fund Wallet
              </Text>
            </TouchableOpacity>
          </View>

          <IconMC
            style={[{color: '#0DABA8'}]}
            size={10}
            name={'credit-card-plus'}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: '#0DABA8',
          height: 160,
          width: Dimensions.get('window').width - 20,
          alignSelf: 'center',
          marginTop: 28,
          borderRadius: 6,
        }}>
        <View
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            position: 'absolute',
            width: Dimensions.get('window').width - 220,
            height: 150,
            alignSelf: 'flex-end',
            borderBottomLeftRadius: 100,
            borderTopLeftRadius: 10,
          }}
        />
        <View
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            position: 'absolute',
            width: Dimensions.get('window').width - 260,
            height: 120,
            alignSelf: 'flex-end',
            borderBottomLeftRadius: 100,
            borderTopLeftRadius: 10,
          }}
        />
        <View
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            position: 'absolute',
            width: Dimensions.get('window').width - 320,
            height: 50,
            alignSelf: 'flex-start',
            borderBottomRightRadius: 100,
            borderTopRightRadius: 10,
          }}
        />
        <View
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            position: 'absolute',
            width: Dimensions.get('window').width - 330,
            height: 30,
            alignSelf: 'flex-start',
            borderBottomRightRadius: 100,
            borderTopRightRadius: 10,
          }}
        />
        <View
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            position: 'absolute',
            width: Dimensions.get('window').width - 320,
            height: 50,
            top: 110,
            left: 80,
            borderBottomRightRadius: 30,
            borderTopRightRadius: 10,
          }}
        />
        <View
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            position: 'absolute',
            width: Dimensions.get('window').width - 340,
            height: 35,
            top: 110,
            left: 80,
            borderBottomRightRadius: 30,
            borderTopRightRadius: 10,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            flex: 1,
            alignItems: 'center',
          }}>
          <IconS name="wallet" color="#fff" size={80} style={{}} />
          <View>
            <Text style={{color: '#fff', fontSize: 16, fontWeight: 'bold'}}>
              Property Balance
            </Text>
            <Text style={{color: '#fff', fontSize: 28, fontWeight: 'bold'}}>
              {`₦${numbro(user.property_balance.balance).format({
                thousandSeparated: true,
              })}`}
            </Text>
          </View>
        </View>
        <Text
          style={{
            color: '#fff',
            fontSize: 12,
            marginBottom: 13,
            marginLeft: 40,
          }}>
          Last wallet activity {}
        </Text>
      </View>
      <View style={{flex: 1}}>
        <View
          style={{
            width: Dimensions.get('window').width - 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignSelf: 'center',
            marginVertical: 20,
          }}>
          <Text style={{color: '#3A3A3A', fontSize: 12}}>
            Recent Transactions
          </Text>
          <TouchableOpacity onPress={navigateTransactions}>
            <Text style={{color: '#3A3A3A', fontSize: 12}}>Sell All</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: Dimensions.get('window').width - 20,
            alignSelf: 'center',
            backgroundColor: '#828282',
            height: 0.7,
          }}
        />
        {transactionOverview ? (
          <View
            style={{
              width: Dimensions.get('window').width - 20,
              alignSelf: 'center',
              flex: 1,
            }}>
            <FlatList
              data={transactionOverview}
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
      <Modal
        visible={visibleInspect}
        animationType="slide"
        onBackdropPress={toggleInspect}
        backdropStyle={styles.backdrop}
        transparent={false}>
        {inspectElement()}
      </Modal>
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
  inputText: {color: '#fff'},
  inputLabel: {color: '#fff'},
  inputCaption: {color: '#fff'},
  inputEmail: {
    margin: 2,
    borderColor: 'transparent',
    backgroundColor: '#3A3A3A',
    borderBottomColor: 'white',
    width: 150,
  },
  modalContainer: {
    flex: 1,
    flexDirection: 'column',
    height: 200,
    width: Dimensions.get('window').width - 50,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: 'center',
  },
  modalX: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: 'white',
    borderRadius: 30,
    alignSelf: 'flex-end',
    flexDirection: 'row',
    bottom: 20,
    left: 15,
    height: 35,
    width: 35,
    justifyContent: 'center',
  },
  modalXtext: {
    alignSelf: 'center',
    fontSize: 15,
    color: '#0DABA8',
    fontWeight: 'bold',
  },
  modalBody: {
    flex: 1,
    width: Dimensions.get('window').width - 50,
    alignItems: 'center',
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    // justifyContent: 'center'
  },
  modalHeader: {
    color: '#3A3A3A',
    fontSize: 18,
  },
  modalInfo: {
    color: '#828282',
    fontSize: 13,
    margin: 15,
    textAlign: 'center',
  },
  modalButtons: {
    flexDirection: 'row',
    marginVertical: 15,
    width: 250,
    // backgroundColor: 'red',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  modalOffline: {
    backgroundColor: '#0DABA8',
    // paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 4,
    width: 100,
  },
  modalOnline: {
    backgroundColor: '#0DABA8',
    paddingHorizontal: 25,
    paddingVertical: 5,
    borderRadius: 4,
    width: 100,
    left: 50,
  },
  modalBtnText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    alignSelf: 'center',
  },
});
