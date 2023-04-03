import styled from 'styled-components/native';
import Text from 'components/Text';
import type {TitleProps} from './types';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding: ${({theme}) => 9.5 + theme.device.safeTop}px 24px 9.5px;
  gap: 16px;
`;

export const Side = styled.View`
  min-width: 32px;
`;

export const Title = styled(Text).attrs<TitleProps>({
  variant: 'h4',
  numberOfLines: 1,
})<TitleProps>`
  flex: 1;
  text-align: ${({center}) => (center ? 'center' : 'left')};
`;
