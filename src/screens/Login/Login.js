import React, { useRef } from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import * as yup from 'yup';

import { Block, Form, Input, Text } from '~/components';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('O e-mail é inválido')
    .required('O e-mail deve ser preenchido'),
  password: yup.string().required('A senha deve ser preenchida'),
});

export default function Layout({ onLogin, onRegister }) {
  const formRef = useRef();

  return (
    <Block full align justify safe>
      <Text h3 grey2>
        Agile RN
      </Text>

      <Form schema={schema} onSubmit={onLogin} distance={[20]} ref={formRef}>
        <Input name="email" label="E-mail" />
        <Input name="password" label="Senha" secureTextEntry />

        <TouchableOpacity onPress={() => formRef.current.send()}>
          <Text>Entrar</Text>
        </TouchableOpacity>
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
