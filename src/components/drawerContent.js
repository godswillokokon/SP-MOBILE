/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {Text } from '@ui-kitten/components';
import {useSelector, useDispatch} from 'react-redux';
import {Logout} from '../redux/actions/userActions';

import {Avatar} from 'react-native-paper';
import IconM from 'react-native-vector-icons/MaterialIcons';
import IconF from 'react-native-vector-icons/FontAwesome';
import IconA from 'react-native-vector-icons/AntDesign';
import IconI from 'react-native-vector-icons/Ionicons';
import IconE from 'react-native-vector-icons/Entypo';

export const DrawerContent = ({props}) => {
  const dispatch = useDispatch();
  const {user} = useSelector((state) => state.user);
  const navigateCategories = () => {
    requestAnimationFrame(() => {
      props.navigation.navigate('Categories');
    });
  };
  const logout = () => {
    requestAnimationFrame(() => {
      dispatch(Logout(props));
    });
  };
  const navigateServices = () => {
    requestAnimationFrame(() => {
      props.navigation.navigate('Services');
    });
  };

  const navigateSettings = () => {
    requestAnimationFrame(() => {
      props.navigation.navigate('Settings');
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={{flex: 1}}>
          <View style={{flex: 1}}>
            <ImageBackground
              source={{
                uri:
                  'https://res.cloudinary.com/ogcodes/image/upload/v1588292643/drawer_head.png',
              }}
              style={{
                height: 150,
              }}>
              <View
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  position: 'absolute',
                  width: Dimensions.get('window').width,
                  height: 150,
                }}
              />
              <View
                style={{
                  alignSelf: 'center',
                  flex: 1,
                  justifyContent: 'center',
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Avatar.Image
                    source={{
                      uri: user.picture,
                    }}
                    size={71}
                  />
                  <View style={{alignSelf: 'center', marginLeft: 10}}>
                    <Text
                      style={{fontSize: 14, fontWeight: 'bold', color: '#fff'}}>
                      {user.name}
                    </Text>
                    <Text style={{fontSize: 12, color: '#fff'}}>
                      Real estate investor
                    </Text>
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View
            style={{
              flex: 1,
              width: Dimensions.get('window').width,
              height: Dimensions.get('window').height,
              flexDirection: 'column',
            }}>
            <View style={{flex: 1, width: Dimensions.get('window').width}}>
              <Text
                style={{
                  marginTop: 50,
                  marginLeft: 20,
                  fontSize: 17,
                  color: '#828282',
                }}>
                General
              </Text>
              <View
                style={{
                  marginTop: 10,
                  marginLeft: 35,
                  height: 200,
                  width: 210,
                }}>
                <TouchableOpacity
                  onPress={navigateCategories}
                  style={{flexDirection: 'row', marginVertical: 5}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      flex: 17,
                      alignItems: 'center',
                    }}>
                    <IconA
                      name="switcher"
                      color="#828282"
                      size={18}
                      style={{}}
                    />
                    <Text
                      style={{marginLeft: 10, fontSize: 15, color: '#3A3A3A'}}>
                      Categories
                    </Text>
                  </View>

                  <IconF
                    name="angle-right"
                    color="#00959E"
                    size={25}
                    style={{alignSelf: 'flex-end', flex: 1}}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  style={{flexDirection: 'row', marginVertical: 5}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      flex: 17,
                      alignItems: 'center',
                    }}>
                    <IconM
                      name="business-center"
                      color="#828282"
                      size={20}
                      style={{right: 2}}
                    />
                    <Text
                      style={{marginLeft: 6, fontSize: 15, color: '#3A3A3A'}}>
                      Careers
                    </Text>
                  </View>

                  <IconF
                    name="angle-right"
                    color="#00959E"
                    size={25}
                    style={{alignSelf: 'flex-end', flex: 1}}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={navigateServices}
                  style={{flexDirection: 'row', marginVertical: 5}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      flex: 17,
                      alignItems: 'center',
                    }}>
                    <IconI
                      name="md-business"
                      color="#828282"
                      size={20}
                      style={{}}
                    />
                    <Text
                      style={{marginLeft: 10, fontSize: 15, color: '#3A3A3A'}}>
                      Services
                    </Text>
                  </View>

                  <IconF
                    name="angle-right"
                    color="#00959E"
                    size={25}
                    style={{alignSelf: 'flex-end', flex: 1}}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={{flex: 2, width: Dimensions.get('window').width}}>
              <Text
                style={{
                  marginLeft: 20,
                  fontSize: 17,
                  color: '#828282',
                }}>
                Account
              </Text>
              <View
                style={{
                  marginTop: 10,
                  marginLeft: 35,
                  height: 150,
                  width: 210,
                }}>
                <TouchableOpacity
                  onPress={navigateSettings}
                  style={{flexDirection: 'row', marginVertical: 5}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      flex: 17,
                      alignItems: 'center',
                    }}>
                    <IconA
                      name="setting"
                      color="#828282"
                      size={18}
                      style={{}}
                    />
                    <Text
                      style={{marginLeft: 10, fontSize: 15, color: '#3A3A3A'}}>
                      Settings
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{flexDirection: 'row', marginVertical: 5}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      flex: 17,
                      alignItems: 'center',
                    }}>
                    <IconE
                      name="line-graph"
                      color="#828282"
                      size={18}
                      style={{}}
                    />
                    <Text
                      style={{marginLeft: 10, fontSize: 15, color: '#3A3A3A'}}>
                      Invest
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{flexDirection: 'row', marginVertical: 5}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      flex: 17,
                      alignItems: 'center',
                    }}>
                    <IconE
                      name="documents"
                      color="#828282"
                      size={18}
                      style={{}}
                    />
                    <Text
                      style={{marginLeft: 10, fontSize: 15, color: '#3A3A3A'}}>
                      Terms & Condition
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => logout()}
                  style={{flexDirection: 'row', marginVertical: 5}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      flex: 17,
                      alignItems: 'center',
                    }}>
                    <IconA name="logout" color="#828282" size={18} style={{}} />
                    <Text
                      style={{marginLeft: 10, fontSize: 15, color: '#3A3A3A'}}>
                      Logout
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
