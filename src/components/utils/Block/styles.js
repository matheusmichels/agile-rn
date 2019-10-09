import styled from 'styled-components/native';
import { SafeAreaView } from 'react-navigation';

function align(prop) {
  if (typeof prop === 'string') {
    return prop;
  }

  if (prop) {
    return 'center';
  }

  return 'flex-start';
}

function justify(just) {
  if (typeof just === 'string') {
    return just;
  }
  if (just) {
    return 'center';
  }

  return 'flex-start';
}

function padding(prop = []) {
  switch (prop.length || 0) {
    case 1:
      return `${prop[0]}px`;
    case 2:
      return `${prop[0]}px ${prop[1]}px`;
    case 3:
      return `${prop[0]}px ${prop[1]}px ${prop[2]}px`;
    case 4:
      return `${prop[0]}px ${prop[1]}px ${prop[2]}px ${prop[3]}px`;
    default:
      return '0px';
  }
}

function flex(prop) {
  if (typeof prop === 'number') {
    return prop;
  }

  if (prop) {
    return 1;
  }

  return 'none';
}

export const Wrapper = styled.View`
  flex: ${props => flex(props.weight)};
  width: 100%;
  background-color: ${props => props.color || 'transparent'};
  align-items: ${props => align(props.align)};
  justify-content: ${props => justify(props.justify)};
  flex-flow: ${props => (props.row ? 'row' : 'column')};
  padding: ${props => padding(props.distance)};
`;

export const SafeWrapper = styled(SafeAreaView).attrs({
  forseInset: { bottom: 'never' },
})`
  flex: ${props => flex(props.weight)};
  width: 100%;
  background-color: ${props => props.color || 'transparent'};
  align-items: ${props => (props.align ? 'center' : 'flex-start')};
  justify-content: ${props => justify(props.justify)};
  flex-flow: ${props => (props.row ? 'row' : 'column')};
  padding: ${props => padding(props.distance)};
`;
