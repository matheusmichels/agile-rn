import React from 'react';
import { StatusBar, YellowBox } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';

import store from '~/store';

import Routes from '~/routes';

// developer mode
if (__DEV__) {
  YellowBox.ignoreWarnings(['Remote debugger']);
}

// root
const App = () => (
  <Provider store={store}>
    <PaperProvider theme={DefaultTheme}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Routes />
    </PaperProvider>
  </Provider>
);

export default App;
