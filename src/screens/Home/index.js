import React from 'react';
import PropTypes from 'prop-types';

import Layout from './Home';

export default function Home({ navigation }) {
  function handleLogout() {
    navigation.navigate('Login');
  }

  return <Layout onLogout={handleLogout} />;
}

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
