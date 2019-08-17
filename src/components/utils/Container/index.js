import styled from 'styled-components/native';

const Container = styled.View`
  flex: ${props => (props.full ? 1 : 'none')};
  background-color: ${props => props.color || 'transparent'};
  align-items: ${props => (props.align ? 'center' : 'flex-start')};
  justify-content: ${props => (props.justify ? 'center' : 'flex-start')};
  flex-flow: ${props => (props.row ? 'row' : 'column')};
`;

export default Container;
