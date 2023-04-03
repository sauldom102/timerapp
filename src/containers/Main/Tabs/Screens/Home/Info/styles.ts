import styled from 'styled-components/native';
import {Text} from 'components';
import BaseProgressCard from '../ProgressCard';

export const Container = styled.View`
  padding-top: 22.5px;
  padding-bottom: 24px;
`;

export const Title = styled(Text).attrs({
  variant: 'h3',
})``;

export const ProgressCard = styled(BaseProgressCard)`
  margin-top: 32px;
`;
