import styled from 'styled-components/native';
import { SafeAreaView } from 'react-navigation';

function justify(props) {
  if (props.justify) return 'center';
  if (props.space) return `space-${props.space}`;

  return 'flex-start';
}

export const Wrapper = styled.View`
  flex: ${props => (props.full ? 1 : 'none')};
  width: 100%;
  background-color: ${props => props.color || 'transparent'};
  align-items: ${props => (props.align ? 'center' : 'flex-start')};
  justify-content: ${props => justify(props)};
  flex-flow: ${props => (props.row ? 'row' : 'column')};
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
`;
