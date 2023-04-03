import styled from 'styled-components/native';
import Text from 'components/Text';
import {absoluteFill} from 'theme/snippets';
import {HEIGHT} from './constants';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-around;
  height: ${HEIGHT + 64}px;
`;

export const Empty = styled.View`
  ${absoluteFill};
  justify-content: center;
  align-items: center;
`;

export const EmptyTitle = styled(Text).attrs({
  variant: 'body-xlarge-medium',
})`
  color: ${({theme}) => theme.colors.greyscale[500]};
  margin-bottom: 64px;
`;
