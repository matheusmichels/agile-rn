import React from 'react';
import { Button } from 'react-native-paper';
import PropTypes from 'prop-types';

import { Container } from '~/components';

export default function Layout({ onLogout }) {
  return (
    <Container full align justify>
      <Button onPress={onLogout}>Ir para login</Button>
    </Container>
  );
}

Layout.propTypes = {
  onLogout: PropTypes.func.isRequired,
};
