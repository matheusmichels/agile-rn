import styled from 'styled-components/native';
import { TextInput } from 'react-native-paper';

export const Input = styled(TextInput).attrs({
  underlineColor: 'transparent',
  autoCorrect: false,
  autoCapitalize: 'none',
})`
  flex: 1;
`;
