import styled from 'styled-components/native';
import { TextInputMask } from 'react-native-masked-text';

import { colors } from '~/styles';

export const TextInput = styled.TextInput.attrs({
  autoCorrect: false,
  autoCapitalize: 'none',
})`
  width: 100%;
  height: 40px;
  border-bottom-width: 1px;
  border-color: ${colors.grey};
  border-radius: 5px;
  padding: 0px 5px;
  font-size: 18px;
`;

export const MaskedInput = styled(TextInputMask).attrs({
  autoCorrect: false,
  autoCapitalize: 'none',
})`
  width: 100%;
  height: 40px;
  border-bottom-width: 1px;
  border-color: ${colors.grey};
  border-radius: 5px;
  background: #fff;
  padding: 0px 5px;
  font-size: 18px;
`;
