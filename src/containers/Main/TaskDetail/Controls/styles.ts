import styled from 'styled-components/native';
import BasePlayPause from 'components/PlayPause';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

export const PlayPause = styled(BasePlayPause).attrs({
  size: 'bigger',
})``;
