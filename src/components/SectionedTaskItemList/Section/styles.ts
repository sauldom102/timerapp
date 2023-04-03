import styled from 'styled-components/native';
import Text from 'components/Text';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled(Text).attrs({
  variant: 'h5',
})`
  padding: 16px;
  padding-left: 0;
`;
