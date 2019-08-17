import React from 'react';
import { Alert } from 'react-native';
import PropTypes from 'prop-types';

import Layout from './Auth';

export default function Auth({ navigation }) {
  function handleLogin(data) {
    Alert.alert('Aviso', JSON.stringify(data));
    navigation.navigate('Home');
  }

  return <Layout onLogin={handleLogin} />;
}

Auth.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
