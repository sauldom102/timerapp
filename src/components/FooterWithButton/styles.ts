import {View} from 'react-native';
import styled from 'styled-components/native';
import Text from 'components/Text';
import BaseTextButton from 'components/TextButton';

export const Container = styled(View)`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Title = styled(Text).attrs({
  variant: 'body-medium-regular',
})`
  color: ${({theme}) => theme.colors.greyscale[500]};
  margin-right: -6px;
`;

export const TextButton = styled(BaseTextButton)``;
