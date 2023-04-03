import {View} from 'react-native';
import styled from 'styled-components/native';
import {Icons} from 'components';
import Text from 'components/Text';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled(View)`
  background-color: ${({theme}) => theme.colors.white};
`;

export const Pressable = styled(RectButton)`
  flex-direction: row;
  height: 52px;
  align-items: center;
  padding: 12px 24px;
`;

export const Icon = styled(Icons).attrs(({theme}) => ({
  color: theme.colors.greyscale[800],
  size: 28,
}))``;

export const Title = styled(Text).attrs({
  variant: 'body-xlarge-semibold',
})`
  color: ${({theme}) => theme.colors.greyscale[800]};
  margin-left: 20px;
`;
