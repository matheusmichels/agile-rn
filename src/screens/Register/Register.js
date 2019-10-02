import React, { useRef } from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import * as yup from 'yup';

import { Block, Form, Text } from '~/components';
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
  const formRef = useRef();

  return (
    <Block full align justify safe>
      <Form schema={schema} onSubmit={onRegister} distance={[20]} ref={formRef}>
        <Input name="name" label="Nome completo" />
        <Input name="email" label="E-mail" keyboardType="email-address" />
        <Input name="password" label="Senha" secureTextEntry />
        <Input
          name="passwordConfirm"
          label="Confirmação de senha"
          secureTextEntry
        />
      </Form>
      <TouchableOpacity onPress={() => formRef.current.validate()}>
        <Text>Criar conta</Text>
      </TouchableOpacity>
    </Block>
  );
}

Layout.propTypes = {
  onRegister: PropTypes.func.isRequired,
};
