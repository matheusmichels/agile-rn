import React, { useContext, forwardRef } from 'react';
import { Text } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import PropTypes from 'prop-types';

import { FormContext } from '../Form';
import Block from '../Block';
import { Input as TextInput } from './styles';

function Input({ name, type, ...rest }, ref) {
  const { values, errors, onChange } = useContext(FormContext);

  return (
    <>
      <Block row>
        {type ? (
          <TextInput
            value={values[name]}
            onChangeText={value =>
              onChange({
                name,
                value,
              })
            }
            render={props => <TextInputMask type={type} {...props} ref={ref} />}
            {...rest}
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
  type: null,
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default forwardRef(Input);
