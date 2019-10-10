import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, SafeView, KeyboardView } from './styles';

export default function Block({ container, children, ...rest }) {
  if (container) {
    return (
      <SafeView>
        <KeyboardView>
          <Wrapper container={container} {...rest}>
            {children}
          </Wrapper>
        </KeyboardView>
      </SafeView>
    );
  }

  return (
    <Wrapper container={container} {...rest}>
      {children}
    </Wrapper>
  );
}

Block.defaultProps = {
  container: false,
};

Block.propTypes = {
  container: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
