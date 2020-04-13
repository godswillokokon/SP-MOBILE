import React from 'react';
import { ApplicationProvider } from '@ui-kitten/components';
import { AppNavigatorScreens } from './src/navigate/index';
import { default as appTheme } from './custom-theme.json';
import * as eva from '@eva-design/eva';
import 'react-native-gesture-handler';

const theme = { ...appTheme };

const App = () => (
  <React.Fragment>
    <ApplicationProvider {...eva} theme={theme, eva.light}>
      <AppNavigatorScreens />
    </ApplicationProvider>
  </React.Fragment>
);
export default App;