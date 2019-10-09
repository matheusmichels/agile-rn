import React, {
  useState,
  createContext,
  forwardRef,
  useImperativeHandle,
} from 'react';
import PropTypes from 'prop-types';

import Block from '~/components/utils/Block';

import { KeyboardView } from './styles';

export const FormContext = createContext();

function Form({ children, schema, onSubmit, ...rest }, ref) {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  function handleChange({ name, value }) {
    setValues(oldValues => ({
      ...oldValues,
      [name]: value,
    }));
  }

  function handleValidate() {
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

  useImperativeHandle(ref, () => ({
    send() {
      handleValidate();
    },
  }));

  return (
    <FormContext.Provider
      value={{
        values,
        errors,
        onChange: handleChange,
      }}
    >
      <Block {...rest}>
        <KeyboardView>{children}</KeyboardView>
      </Block>
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
};

export default forwardRef(Form);
