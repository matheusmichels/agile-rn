import styled from 'styled-components/native';
import { colors } from '~/styles';

const Text = styled.Text`
  color: ${props => color(props)};
  font-size: ${props => size(props)}px;
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
`;

function color(props) {
  if (props.grey) return colors.grey;
  if (props.grey2) return colors.grey2;
  if (props.grey3) return colors.grey3;
  if (props.color) return props.color;

  return colors.dark;
}

function size(props) {
  if (props.h1) return 42;
  if (props.h2) return 36;
  if (props.h3) return 28;
  if (props.size) return props.size;

  return 16;
}

export default Text;
