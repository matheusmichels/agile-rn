import React, { useContext, forwardRef } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import { FormContext } from '../Form';
import Block from '../Block';
import { Input as TextInput, MaskedInput } from './styles';

function Input({ name, label, type, ...rest }, ref) {
  const { values, errors, onChange } = useContext(FormContext);

  return (
    <>
      {label && <Text>{label}</Text>}
      <Block row>
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
      </Block>
      {<Text>{errors[name]}</Text>}
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
