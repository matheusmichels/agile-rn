import React, { useContext, forwardRef } from 'react';
import PropTypes from 'prop-types';

import { FormContext } from '../Form';
import Block from '../Block';
import Text from '../Text';
import { Input as TextInput, MaskedInput } from './styles';

function Input({ name, label, type, ...rest }, ref) {
  const { values, errors, onChange } = useContext(FormContext);

  return (
    <>
      <Block distance={[0, 5]}>{label && <Text>{label}</Text>}</Block>
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
    </>
  );
}

Input.defaultProps = {
  label: null,
  type: null,
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
};

export default forwardRef(Input);
