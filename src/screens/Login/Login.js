import React from 'react';
import { Button } from 'react-native-paper';
import PropTypes from 'prop-types';
import * as yup from 'yup';

import { Block, Form } from '~/components';
import Input from '~/components/utils/Input';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('O e-mail é inválido')
    .required('O e-mail deve ser preenchido'),
  password: yup.string().required('A senha deve ser preenchida'),
});

export default function Layout({ onLogin, onRegister }) {
  return (
    <Block full align justify safe>
      <Form
        schema={schema}
        onSubmit={onLogin}
        buttonLabel="Entrar"
        style={{ padding: 20 }}
      >
        <Input name="email" label="E-mail" keyboardType="email-address" />
        <Input name="password" label="Senha" secureTextEntry />
      </Form>
      <Button onPress={onRegister}>Cadastrar-se</Button>
    </Block>
  );
}

Layout.propTypes = {
  onLogin: PropTypes.func.isRequired,
  onRegister: PropTypes.func.isRequired,
};
