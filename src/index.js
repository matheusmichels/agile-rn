import React from 'react';
import { StatusBar, YellowBox } from 'react-native';
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
    <StatusBar barStyle="dark-content" backgroundColor="#fff" />
    <Routes />
  </Provider>
);

export default App;
