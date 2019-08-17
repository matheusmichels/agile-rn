import React from 'react';
import PropTypes from 'prop-types';
import * as yup from 'yup';

import { Container, Form } from '~/components';
import Input from '~/components/utils/Input';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('E-mail inválido')
    .required('O e-mail deve ser preenchido'),
  password: yup.string().required('A senha deve ser preenchida'),
});

export default function Layout({ onLogin }) {
  return (
    <Container full align justify>
      <Form
        schema={schema}
        onSubmit={onLogin}
        buttonLabel="Entrar"
        style={{ padding: 20 }}
      >
        <Input name="email" label="E-mail" keyboardType="email-address" />
        <Input name="password" label="Senha" secureTextEntry />
      </Form>
    </Container>
  );
}

Layout.propTypes = {
  onLogin: PropTypes.func.isRequired,
};
