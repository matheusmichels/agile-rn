import React, { useRef } from 'react';
import { Button } from 'react-native';
import PropTypes from 'prop-types';
import * as yup from 'yup';

import { Block, Form, Input } from '~/components';

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
  city: yup.string().required(),
  code: yup.string().required(),
});

export default function Layout({ onRegister }) {
  const formRef = useRef();

  return (
    <Block weight align justify safe>
      <Form
        schema={schema}
        onSubmit={onRegister}
        ref={formRef}
        distance={[0, 20]}
      >
        <Input name="name" label="Name" />
        <Input name="email" label="Email" keyboardType="email-address" />
        <Input name="password" label="Password" secureTextEntry />
        <Input
          name="confirmPassword"
          label="Confirm Password"
          secureTextEntry
        />

        <Block row>
          <Input weight={3} name="city" label="City" />
          <Input weight={2} name="code" label="Postal Code" />
        </Block>

        <Button title="Create account" onPress={() => formRef.current.send()} />
      </Form>
    </Block>
  );
}

Layout.propTypes = {
  onRegister: PropTypes.func.isRequired,
};
