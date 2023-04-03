import styled from 'styled-components/native';
import {Text} from 'components';

export const Container = styled.View`
  padding-top: 22.5px;
  padding-bottom: 24px;
`;

export const Title = styled(Text).attrs({
  variant: 'h5',
})``;

export const Subtitle = styled(Text).attrs({
  variant: 'body-medium-medium',
})`
  color: ${({theme}) => theme.colors.greyscale[600]};
  margin-top: 8px;
`;

export const Divider = styled.View`
  height: 1px;
  background-color: ${({theme}) => theme.colors.greyscale[200]};
  margin: 24px 0;
`;
