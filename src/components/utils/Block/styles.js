import styled from 'styled-components/native';
import { SafeAreaView } from 'react-navigation';

function justify(just) {
  if (typeof just === 'string') {
    return just;
  }
  if (just) {
    return 'center';
  }

  return 'flex-start';
}

function padding(dist = []) {
  switch (dist.length || 0) {
    case 1:
      return `${dist[0]}px`;
    case 2:
      return `${dist[0]}px ${dist[1]}px`;
    case 3:
      return `${dist[0]}px ${dist[1]}px ${dist[2]}px`;
    case 4:
      return `${dist[0]}px ${dist[1]}px ${dist[2]}px ${dist[3]}px`;
    default:
      return '0px';
  }
}

export const Wrapper = styled.View`
  flex: ${props => (props.full ? 1 : 'none')};
  width: 100%;
  background-color: ${props => props.color || 'transparent'};
  align-items: ${props => (props.align ? 'center' : 'flex-start')};
  justify-content: ${props => justify(props.justify)};
  flex-flow: ${props => (props.row ? 'row' : 'column')};
  padding: ${props => padding(props.distance)};
`;

export const SafeWrapper = styled(SafeAreaView).attrs({
  forseInset: { bottom: 'never' },
})`
  flex: ${props => (props.full ? 1 : 'none')};
  width: 100%;
  background-color: ${props => props.color || 'transparent'};
  align-items: ${props => (props.align ? 'center' : 'flex-start')};
  justify-content: ${props => justify(props.justify)};
  flex-flow: ${props => (props.row ? 'row' : 'column')};
  padding: ${props => padding(props.distance)};
`;
