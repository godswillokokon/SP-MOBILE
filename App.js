import React from 'react';
import {ApplicationProvider} from '@ui-kitten/components';
import {AppNavigatorScreens} from './src/navigate/index';
import {default as theme} from './custom-theme.json';
import * as eva from '@eva-design/eva';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {allReducers} from './src/redux/reducers/allReducers';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const store = createStore(allReducers, applyMiddleware(thunk));

const App = () => (
  <Provider store={store}>
    <ApplicationProvider {...eva} theme={{...eva.light, ...theme}}>
      <NavigationContainer>
        <AppNavigatorScreens />
      </NavigationContainer>
    </ApplicationProvider>
  </Provider>
);
export default App;
