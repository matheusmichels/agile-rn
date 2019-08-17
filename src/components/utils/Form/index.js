import React, { useState, createContext } from 'react';
import { Button } from 'react-native-paper';
import PropTypes from 'prop-types';

import Container from '~/components/utils/Container';

export const FormContext = createContext();

export default function Form({
  children,
  schema,
  onSubmit,
  buttonLabel,
  ...rest
}) {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  function handleChange({ name, value }) {
    setValues(oldValues => ({
      ...oldValues,
      [name]: value,
    }));
  }

  function handleSubmit() {
    if (schema) {
      schema
        .validate(values, { abortEarly: false, stripUnknown: true })
        .then(() => {
          setErrors({});
          onSubmit(values);
        })
        .catch(err => {
          let newErrors = {};
          err.inner.forEach(error => {
            newErrors = { ...newErrors, [error.path]: error.errors[0] };
          });

          setErrors(newErrors);
        });
    } else {
      onSubmit(values);
    }
  }

  return (
    <FormContext.Provider value={{ values, errors, onChange: handleChange }}>
      <Container {...rest}>
        {children}
        <Button
          mode="contained"
          onPress={handleSubmit}
          style={{ alignSelf: 'center' }}
        >
          {buttonLabel}
        </Button>
      </Container>
    </FormContext.Provider>
  );
}

Form.defaultProps = {
  schema: null,
};

Form.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  schema: PropTypes.shape({
    validate: PropTypes.func,
  }),
  onSubmit: PropTypes.func.isRequired,
  buttonLabel: PropTypes.string.isRequired,
};
