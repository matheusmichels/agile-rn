import styled from 'styled-components/native';
import { SafeAreaView } from 'react-navigation';

function justify(props) {
  if (props.justify) return 'center';
  if (props.space) return `space-${props.space}`;

  return 'flex-start';
}

function padding(props) {
  const arr = props.distance || [];

  switch (arr.length) {
    case 1:
      return `${arr[0]}px`;
    case 2:
      return `${arr[0]}px ${arr[1]}px`;
    case 3:
      return `${arr[0]}px ${arr[1]}px ${arr[2]}px`;
    case 4:
      return `${arr[0]}px ${arr[1]}px ${arr[2]}px ${arr[3]}px`;
    default:
      return '0px';
  }
}

export const Wrapper = styled.View`
  flex: ${props => (props.full ? 1 : 'none')};
  width: 100%;
  background-color: ${props => props.color || 'transparent'};
  align-items: ${props => (props.align ? 'center' : 'flex-start')};
  justify-content: ${props => justify(props)};
  flex-flow: ${props => (props.row ? 'row' : 'column')};
  padding: ${props => padding(props)};
`;

export const SafeWrapper = styled(SafeAreaView).attrs({
  forseInset: { bottom: 'never' },
})`
  flex: ${props => (props.full ? 1 : 'none')};
  width: 100%;
  background-color: ${props => props.color || 'transparent'};
  align-items: ${props => (props.align ? 'center' : 'flex-start')};
  justify-content: ${props => justify(props)};
  flex-flow: ${props => (props.row ? 'row' : 'column')};
  padding: ${props => padding(props)};
`;
