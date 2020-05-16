import React from 'react';
import { ApplicationProvider } from '@ui-kitten/components';
import { AppNavigatorScreens } from './src/navigate/index';
import { default as theme } from './custom-theme.json';
import * as eva from '@eva-design/eva';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './src/redux/config/store'


const App = () => (
  <Provider store={store}>
    <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
      <NavigationContainer>
        <AppNavigatorScreens />
      </NavigationContainer>
    </ApplicationProvider>
  </Provider>
);
export default App;