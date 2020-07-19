import React from 'react';
import {ApplicationProvider, Layout, Button} from '@ui-kitten/components';
import {AppNavigatorScreens} from './src/navigate/index';
import {default as theme} from './custom-theme.json';
import * as eva from '@eva-design/eva';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {allReducers} from './src/redux/reducers/allReducers';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {default as mapping} from './mapping.json';

// const strictTheme = {['text-font-family']: 'OpenSans'}; // <-- Your Font
// const customMapping = {strict: strictTheme};

const store = createStore(allReducers, applyMiddleware(thunk));


const App = () => (
  <Provider store={store}>
    <ApplicationProvider
      {...eva}
      theme={{...eva.light, ...theme}}
      mapping={mapping} >
      <NavigationContainer>
        <AppNavigatorScreens />
      </NavigationContainer>
    </ApplicationProvider>
  </Provider>
  // <ApplicationProvider
  //   {...eva}
  //   theme={{...eva.dark, ...theme}}
  //   customMapping={mapping}>
  //   <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
  //     <Button>HOME</Button>
  //   </Layout>
  // </ApplicationProvider>
);
export default App;
