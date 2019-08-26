import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

export const MaskedInput = styled(TextInputMask).attrs({
  underlineColor: 'transparent',
  autoCorrect: false,
  autoCapitalize: 'none',
})`
  flex: 1;
  height: 45px;
  border-bottom-width: 1px;
`;

export const Input = styled(TextInput).attrs({
  underlineColor: 'transparent',
  autoCorrect: false,
  autoCapitalize: 'none',
})`
  flex: 1;
  height: 45px;
  border-bottom-width: 1px;
`;
