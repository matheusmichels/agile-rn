import React from 'react';
import { Button } from 'react-native-paper';
import PropTypes from 'prop-types';

import { Block } from '~/components';

export default function Layout({ onLogout }) {
  return (
    <Block full align justify safe>
      <Button onPress={onLogout}>Ir para login</Button>
    </Block>
  );
}

Layout.propTypes = {
  onLogout: PropTypes.func.isRequired,
};
