import React from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import { Wrapper, SafeWrapper } from './styles';

export default function Container({ safe, scroll, ...rest }) {
  if (safe && scroll) {
    return (
      <ScrollView>
        <SafeWrapper {...rest} />
      </ScrollView>
    );
  }
  if (safe) {
    return <SafeWrapper {...rest} />;
  }
  if (scroll) {
    return (
      <ScrollView>
        <Wrapper {...rest} />
      </ScrollView>
    );
  }

  return <Wrapper {...rest} />;
}

Container.defaultProps = {
  safe: false,
  scroll: false,
};

Container.propTypes = {
  safe: PropTypes.bool,
  scroll: PropTypes.bool,
};
