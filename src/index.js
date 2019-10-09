import React from 'react';
import { StatusBar, YellowBox } from 'react-native';
import { Provider } from 'react-redux';

import '~/config/ReactotronConfig';

import store from '~/store';
import Routes from '~/routes';

if (__DEV__) {
  YellowBox.ignoreWarnings(['Remote debugger', 'forwardRef']);
}

// root
const App = () => (
  <Provider store={store}>
    <StatusBar barStyle="dark-content" backgroundColor="#fff" />
    <Routes />
  </Provider>
);

export default App;
