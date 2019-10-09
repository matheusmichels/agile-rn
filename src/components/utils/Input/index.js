import React, { useContext, forwardRef } from 'react';
import PropTypes from 'prop-types';

import { FormContext } from '../Form';
import Block from '../Block';
import Text from '../Text';
import { TextInput, MaskedInput } from './styles';

function Input({ name, label, type, weight, ...rest }, ref) {
  const { values, errors, onChange } = useContext(FormContext);

  return (
    <Block weight={weight}>
      {label && (
        <Block distance={[0, 5]}>
          <Text>{label}</Text>
        </Block>
      )}
      {type ? (
        <MaskedInput
          value={values[name]}
          onChangeText={value =>
            onChange({
              name,
              value,
            })
          }
          type={type}
          {...rest}
          ref={ref}
        />
      ) : (
        <TextInput
          value={values[name]}
          onChangeText={value =>
            onChange({
              name,
              value,
            })
          }
          {...rest}
          ref={ref}
        />
      )}
      <Block distance={[0, 5]}>
        <Text grey3>{errors[name]}</Text>
      </Block>
    </Block>
  );
}

Input.defaultProps = {
  label: null,
  type: null,
  weight: null,
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
  weight: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
};

export default forwardRef(Input);
