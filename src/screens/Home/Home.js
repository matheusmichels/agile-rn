import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { Block, Text } from '~/components';

export default function Layout({ onLogout }) {
  return (
    <Block full align justify safe>
      <TouchableOpacity onPress={onLogout}>
        <Text>Ir para login</Text>
      </TouchableOpacity>
    </Block>
  );
}

Layout.propTypes = {
  onLogout: PropTypes.func.isRequired,
};
