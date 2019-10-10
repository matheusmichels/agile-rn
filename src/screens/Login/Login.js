import React, { useRef } from 'react';
import { Button } from 'react-native';
import PropTypes from 'prop-types';
import * as yup from 'yup';

import { Block, Form, Input, Text } from '~/components';

const schema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required(),
  password: yup.string().required(),
});

export default function Layout({ onLogin, onRegister }) {
  const formRef = useRef();

  return (
    <Block container align justify>
      <Text h1 grey2 bold>
        AGILE RN
      </Text>

      <Form
        schema={schema}
        onSubmit={onLogin}
        ref={formRef}
        distance={[0, 20]}
        align
      >
        <Input name="email" label="Email" />
        <Input name="password" label="Password" secureTextEntry />

        <Button title="Login" onPress={() => formRef.current.send()} />
        <Button title="Register" onPress={onRegister} />
      </Form>
    </Block>
  );
}

Layout.propTypes = {
  onLogin: PropTypes.func.isRequired,
  onRegister: PropTypes.func.isRequired,
};
