import styled from 'styled-components/native';
import Text from 'components/Text';
import {absoluteFill} from 'theme/snippets';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  width: 300px;
  aspect-ratio: 1;
`;

export const Center = styled.View`
  width: 300px;
  aspect-ratio: 1;
  ${absoluteFill};
  justify-content: center;
  align-items: center;
`;

export const Title = styled(Text).attrs({
  family: 'Roboto-Medium',
})`
  font-size: 56px;
  text-align: center;
`;
