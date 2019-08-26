import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import * as yup from 'yup';

import { Block, Form, Text } from '~/components';
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
      <Text h3 grey2>
        Agile RN
      </Text>
      <Form
        schema={schema}
        onSubmit={onLogin}
        buttonLabel="Entrar"
        style={{ padding: 20 }}
      >
        <Input name="email" label="E-mail" />
        <Input name="password" label="Senha" secureTextEntry />
      </Form>
      <TouchableOpacity onPress={onRegister}>
        <Text>Cadastrar-se</Text>
      </TouchableOpacity>
    </Block>
  );
}

Layout.propTypes = {
  onLogin: PropTypes.func.isRequired,
  onRegister: PropTypes.func.isRequired,
};
