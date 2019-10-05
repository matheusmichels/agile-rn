import React from 'react';
import { Alert } from 'react-native';

import Layout from './Register';

export default function Register() {
  function handleRegister(data) {
    Alert.alert('Info', JSON.stringify(data));
  }

  return <Layout onRegister={handleRegister} />;
}

Register.navigationOptions = {
  title: 'Register',
};
