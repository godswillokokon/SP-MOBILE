import SplashScreen from 'react-native-splash-screen';
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const LandingScreen = ({navigation}) => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  const LandingOne = () => {
    requestAnimationFrame(() => {
      navigation.navigate('Landing');
    });
  };
  const LandingTwo = () => {
    requestAnimationFrame(() => {
      navigation.navigate('LandingTwo');
    });
  };
  const LandingThree = () => {
    requestAnimationFrame(() => {
      navigation.navigate('LandingThree');
    });
  };
  const Skip = () => {
    requestAnimationFrame(() => {
      navigation.navigate('Login');
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/one.png')}
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            position: 'absolute',
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
          }}
        />
        <View tyle={{alignSelf: 'flex-start'}}>
          <TouchableOpacity
            style={{
              alignContent: 'space-around',
              width: 50,
              alignSelf: 'flex-end',
              margin: 15,
            }}>
            <Text
              onPress={Skip}
              style={{
                alignSelf: 'center',
                fontStyle: 'normal',
                fontSize: 18,
                color: '#fff',
                textShadowColor: '#000',
                fontWeight: 'bold',
              }}>
              Skip
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: 300,
            margin: 15,
            position: 'absolute',
            top: 200,
            zIndex: 1,
          }}>
          <Text
            style={{
              fontSize: 42,
              color: '#fff',
              lineHeight: 42,
              marginVertical: 5,
            }}>
            Well Furnished Apartments
          </Text>
          <Text
            style={{
              marginVertical: 5,
              fontSize: 20,
              color: '#fff',
              lineHeight: 23,
            }}>
            we always have you coverd, no stress. move into a well furnish and
            decorated house.
          </Text>
        </View>

        <LinearGradient
          colors={[
            '#00000100',
            '#00000159',
            '#00000175',
            '#00000191',
            '#000001b8',
            '#000001b8',
            '#000001b8',
            '#000001',
          ]}
          style={{flex: 0.5}}
        />
        <View
          style={{
            height: 40,
            backgroundColor: '#00959E',
            position: 'absolute',
            bottom: 0,
            width: Dimensions.get('window').width,
            flexDirection: 'row',
          }}>
          <View
            style={{
              width: 80,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginLeft: 10,
            }}>
            <TouchableOpacity onPress={LandingOne}>
              <View
                style={{
                  backgroundColor: '#CFCDCD',
                  width: 10,
                  height: 10,
                  borderRadius: 30,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={LandingTwo}>
              <View
                style={{
                  backgroundColor: '#fff',
                  width: 10,
                  height: 10,
                  borderRadius: 30,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={LandingThree}>
              <View
                style={{
                  backgroundColor: '#fff',
                  width: 10,
                  height: 10,
                  borderRadius: 30,
                }}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={LandingTwo}
            style={{position: 'absolute', right: 0, marginRight: 15}}>
            <Text style={{marginTop: 7, fontSize: 18, color: '#fff'}}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
export const LandingTwoScreen = ({navigation}) => {
  const LandingOne = () => {
    requestAnimationFrame(() => {
      navigation.navigate('Landing');
    });
  };
  const LandingTwo = () => {
    requestAnimationFrame(() => {
      navigation.navigate('LandingTwo');
    });
  };
  const LandingThree = () => {
    requestAnimationFrame(() => {
      navigation.navigate('LandingThree');
    });
  };
  const Skip = () => {
    requestAnimationFrame(() => {
      navigation.navigate('Login');
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/two.png')}
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            position: 'absolute',
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
          }}
        />
        <View tyle={{alignSelf: 'flex-start'}}>
          <TouchableOpacity
            onPress={Skip}
            style={{
              alignContent: 'space-around',
              width: 50,
              alignSelf: 'flex-end',
              margin: 15,
            }}>
            <Text
              style={{
                alignSelf: 'center',
                fontStyle: 'normal',
                fontSize: 18,
                color: '#fff',
                textShadowColor: '#000',
                fontWeight: 'bold',
              }}>
              Skip
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: 300,
            margin: 15,
            position: 'absolute',
            top: 200,
            zIndex: 1,
          }}>
          <Text
            style={{
              fontSize: 40,
              color: '#fff',
              lineHeight: 42,
              marginVertical: 5,
            }}>
            Affordable, to suit your budget
          </Text>
          <Text
            style={{
              marginVertical: 5,
              fontSize: 20,
              color: '#fff',
              lineHeight: 23,
            }}>
            don't have enough money to purchase that dream home? let's save for
            it together with “spread save for property".
          </Text>
        </View>

        <LinearGradient
          colors={[
            '#00000100',
            '#00000159',
            '#00000175',
            '#00000191',
            '#000001b8',
            '#000001b8',
            '#000001b8',
            '#000001',
          ]}
          style={{flex: 0.5}}
        />
        <View
          style={{
            height: 40,
            backgroundColor: '#00959E',
            position: 'absolute',
            bottom: 0,
            width: Dimensions.get('window').width,
            flexDirection: 'row',
          }}>
          <View
            style={{
              width: 80,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginLeft: 10,
            }}>
            <TouchableOpacity onPress={LandingOne}>
              <View
                style={{
                  backgroundColor: '#fff',
                  width: 10,
                  height: 10,
                  borderRadius: 30,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={LandingTwo}>
              <View
                style={{
                  backgroundColor: '#CFCDCD',
                  width: 10,
                  height: 10,
                  borderRadius: 30,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={LandingThree}>
              <View
                style={{
                  backgroundColor: '#fff',
                  width: 10,
                  height: 10,
                  borderRadius: 30,
                }}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={LandingThree}
            style={{position: 'absolute', right: 0, marginRight: 15}}>
            <Text style={{marginTop: 7, fontSize: 18, color: '#fff'}}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export const LandingThreeScreen = ({navigation}) => {
  const LandingOne = () => {
    requestAnimationFrame(() => {
      navigation.navigate('Landing');
    });
  };
  const LandingTwo = () => {
    requestAnimationFrame(() => {
      navigation.navigate('LandingTwo');
    });
  };
  const LandingThree = () => {
    requestAnimationFrame(() => {
      navigation.navigate('LandingThree');
    });
  };
  const Login = () => {
    requestAnimationFrame(() => {
      navigation.navigate('Login');
    });
  };
  const Skip = () => {
    requestAnimationFrame(() => {
      navigation.navigate('Login');
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/three.png')}
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            position: 'absolute',
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
          }}
        />
        <View tyle={{alignSelf: 'flex-start'}}>
          <TouchableOpacity
            onPress={Skip}
            style={{
              alignContent: 'space-around',
              width: 50,
              alignSelf: 'flex-end',
              margin: 15,
            }}>
            <Text
              style={{
                alignSelf: 'center',
                fontStyle: 'normal',
                fontSize: 18,
                color: '#fff',
                textShadowColor: '#000',
                fontWeight: 'bold',
              }}>
              Skip
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: 300,
            margin: 15,
            position: 'absolute',
            top: 200,
            zIndex: 1,
          }}>
          <Text
            style={{
              fontSize: 40,
              color: '#fff',
              lineHeight: 42,
              marginVertical: 5,
            }}>
            Move easily from old to new houses
          </Text>
          <Text
            style={{
              marginVertical: 5,
              fontSize: 20,
              color: '#fff',
              lineHeight: 23,
            }}>
            You no longer need to worry about moving all those heavy stuffs when
            relocating, we’ve got 24/7 reliable relocation team ready to serve
            you.
          </Text>
        </View>

        <LinearGradient
          colors={[
            '#00000100',
            '#00000159',
            '#00000175',
            '#00000191',
            '#000001b8',
            '#000001b8',
            '#000001b8',
            '#000001',
          ]}
          style={{flex: 0.5}}
        />
        <View
          style={{
            height: 40,
            backgroundColor: '#00959E',
            position: 'absolute',
            bottom: 0,
            width: Dimensions.get('window').width,
            flexDirection: 'row',
          }}>
          <View
            style={{
              width: 80,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginLeft: 10,
            }}>
            <TouchableOpacity onPress={LandingOne}>
              <View
                style={{
                  backgroundColor: '#fff',
                  width: 10,
                  height: 10,
                  borderRadius: 30,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={LandingTwo}>
              <View
                style={{
                  backgroundColor: '#fff',
                  width: 10,
                  height: 10,
                  borderRadius: 30,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={LandingThree}>
              <View
                style={{
                  backgroundColor: '#CFCDCD',
                  width: 10,
                  height: 10,
                  borderRadius: 30,
                }}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={Login}
            style={{position: 'absolute', right: 0, marginRight: 15}}>
            <Text style={{marginTop: 7, fontSize: 18, color: '#fff'}}>
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
});
