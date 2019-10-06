import React, { useRef } from 'react';
import { Button } from 'react-native';
import PropTypes from 'prop-types';
import * as yup from 'yup';

import { Block, Form, Input, Picker } from '~/components';

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup
    .string()
    .email()
    .required(),
  password: yup.string().required(),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref('password'), null], "passwords don't match"),
  sex: yup
    .string()
    .required()
    .nullable(),
});

export default function Layout({ onRegister }) {
  const formRef = useRef();

  return (
    <Block full justify safe>
      <Form
        schema={schema}
        onSubmit={onRegister}
        ref={formRef}
        distance={[20]}
        align
      >
        <Input name="name" label="Name" />
        <Input name="email" label="Email" keyboardType="email-address" />
        <Input name="password" label="Password" secureTextEntry />
        <Input
          name="confirmPassword"
          label="Confirm Password"
          secureTextEntry
        />
        <Picker
          name="sex"
          label="Sex"
          data={[{ id: 1, label: 'Male' }, { id: 2, label: 'Female' }]}
        />

        <Button title="Create account" onPress={() => formRef.current.send()} />
      </Form>
    </Block>
  );
}

Layout.propTypes = {
  onRegister: PropTypes.func.isRequired,
};
