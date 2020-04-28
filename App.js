import React from 'react';
import { ApplicationProvider } from '@ui-kitten/components';
import { AppNavigatorScreens } from './src/navigate/index';
// import { AppNavigator } from './src/navigate/navigator';
import { default as appTheme } from './custom-theme.json';
import * as eva from '@eva-design/eva';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';


const theme = { ...appTheme };

const App = () => (
  <React.Fragment>
    <ApplicationProvider {...eva} theme={theme, eva.light}>
      <NavigationContainer>
        <AppNavigatorScreens />
      </NavigationContainer>

    </ApplicationProvider>
  </React.Fragment>
);
export default App;