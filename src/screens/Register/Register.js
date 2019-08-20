import React from 'react';
import PropTypes from 'prop-types';
import * as yup from 'yup';

import { Container, Form } from '~/components';
import Input from '~/components/utils/Input';

const schema = yup.object().shape({
  name: yup.string().required('O nome deve ser preenchido'),
  email: yup
    .string()
    .email('O e-mail é inválido')
    .required('O e-mail deve ser preenchido'),
  password: yup.string().required('A senha deve ser preenchida'),
  passwordConfirm: yup
    .string()
    .required('A confirmação de senha deve ser preenchida')
    .oneOf([yup.ref('password'), null], 'As senhas não conferem'),
});

export default function Layout({ onRegister }) {
  return (
    <Container full align justify safe>
      <Form
        schema={schema}
        onSubmit={onRegister}
        buttonLabel="Criar conta"
        style={{ padding: 20 }}
      >
        <Input name="name" label="Nome completo" />
        <Input name="email" label="E-mail" keyboardType="email-address" />
        <Input name="password" label="Senha" secureTextEntry />
        <Input
          name="passwordConfirm"
          label="Confirmação de senha"
          secureTextEntry
        />
      </Form>
    </Container>
  );
}

Layout.propTypes = {
  onRegister: PropTypes.func.isRequired,
};
