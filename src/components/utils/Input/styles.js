import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

export const Input = styled(TextInput).attrs({
  autoCorrect: false,
  autoCapitalize: 'none',
})`
  width: 100%;
  height: 40px;
  border-bottom-width: 1px;
`;

export const MaskedInput = styled(TextInputMask).attrs({
  autoCorrect: false,
  autoCapitalize: 'none',
})`
  width: 100%;
  height: 40px;
  border-bottom-width: 1px;
`;
