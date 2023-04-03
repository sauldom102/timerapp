import styled from 'styled-components/native';
import {Header as BaseHeader} from 'components';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.white};
`;

export const Header = styled(BaseHeader)``;
