import React, { useRef } from 'react';
import { Alert, Button } from 'react-native';
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

export default function Register() {
  const formRef = useRef();

  function handleRegister(data) {
    Alert.alert('Data', JSON.stringify(data));
  }

  return (
    <Block container align justify>
      <Form
        schema={schema}
        onSubmit={handleRegister}
        ref={formRef}
        distance={[0, 20]}
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

        <Block row>
          <Input weight={3} name="city" label="City" />
          <Input weight={2} name="code" label="Postal Code" />
        </Block>

        <Button title="Create account" onPress={() => formRef.current.send()} />
      </Form>
    </Block>
  );
}

Register.navigationOptions = {
  title: 'Register',
};
