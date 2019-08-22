import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, SafeWrapper } from './styles';

export default function Block({ safe, ...rest }) {
  if (safe) {
    return <SafeWrapper {...rest} />;
  }

  return <Wrapper {...rest} />;
}

Block.defaultProps = {
  safe: false,
};

Block.propTypes = {
  safe: PropTypes.bool,
};
