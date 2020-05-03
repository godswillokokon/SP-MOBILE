import React from 'react';
import { ApplicationProvider } from '@ui-kitten/components';
import { AppNavigatorScreens } from './src/navigate/index';
import { default as theme } from './custom-theme.json';
import * as eva from '@eva-design/eva';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';


// const theme = { ...appTheme };

const App = () => (
  <React.Fragment>
    {/* <ApplicationProvider {...eva} theme={theme, eva.light}> */}
    <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
      <NavigationContainer>
        <AppNavigatorScreens />
      </NavigationContainer>
    </ApplicationProvider>
  </React.Fragment>
);
export default App;