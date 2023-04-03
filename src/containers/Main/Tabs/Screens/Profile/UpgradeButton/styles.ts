import {View} from 'react-native';
import styled from 'styled-components/native';
import {Icons} from 'components';
import Text from 'components/Text';
import {LinearGradient} from 'expo-linear-gradient';
import {RectButton} from 'react-native-gesture-handler';
import {shadows} from 'theme/shadows';
import {absoluteFill} from 'theme/snippets';

export const Container = styled(View)`
  ${shadows.buttonShadow1};
  z-index: 10;
`;

export const Pressable = styled(RectButton)`
  padding: 24px;
  height: 102px;
  justify-content: center;
  border-radius: 24px;
  overflow: hidden;
`;

export const Gradient = styled(LinearGradient).attrs(({theme}) => ({
  start: {
    x: -1,
    y: 0.5,
  },
  end: {
    x: 1,
    y: 0.5,
  },
  colors: theme.gradients.sunsetOrange,
}))`
  ${absoluteFill};
  z-index: -1;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

export const Chip = styled.View`
  height: 32px;
  border-radius: 100px;
  background-color: ${({theme}) => theme.colors.secondary[500]};
  justify-content: center;
  align-items: center;
  padding: 0 16px;
`;

export const ChipTitle = styled(Text).attrs({
  variant: 'body-medium-semibold',
})`
  color: ${({theme}) => theme.colors.white};
`;

export const Title = styled(Text).attrs({
  variant: 'h5',
})`
  flex: 1;
  color: ${({theme}) => theme.colors.white};
`;

export const Icon = styled(Icons).attrs(({theme}) => ({
  color: theme.colors.white,
  size: 24,
}))``;

export const Subtitle = styled(Text).attrs({
  variant: 'body-small-medium',
})`
  color: ${({theme}) => theme.colors.white};
  margin-top: 8px;
`;
