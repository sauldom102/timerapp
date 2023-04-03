import {View} from 'react-native';
import styled from 'styled-components/native';
import Text from 'components/Text';
import {BorderlessButton} from 'react-native-gesture-handler';

export const Container = styled(View)`
  flex-direction: row;
  height: 22px;
  padding: 0 12px;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const Pressable = styled(BorderlessButton)``;

export const Title = styled(Text).attrs({
  variant: 'body-medium-semibold',
})`
  text-align: center;
  color: ${({theme}) => theme.colors.primary[500]};
`;
