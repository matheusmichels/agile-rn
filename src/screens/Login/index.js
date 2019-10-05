import React from 'react';
import { Alert } from 'react-native';
import PropTypes from 'prop-types';

import Layout from './Login';

export default function Signin({ navigation }) {
  function handleLogin(data) {
    Alert.alert('Info', JSON.stringify(data));
  }

  function handleRegister() {
    navigation.navigate('Register');
  }

  return <Layout onLogin={handleLogin} onRegister={handleRegister} />;
}

Signin.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

Signin.navigationOptions = {
  header: null,
};
