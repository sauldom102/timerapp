import styled from 'styled-components/native';
import Text from 'components/Text';
import {RectButton} from 'react-native-gesture-handler';
import BaseSwipeable from 'react-native-gesture-handler/Swipeable';
import {shadows} from 'theme/shadows';

export const Swipeable = styled(BaseSwipeable).attrs(({theme}) => ({
  containerStyle: {
    backgroundColor: theme.colors.white,
    marginHorizontal: -24,
    overflow: 'visible',
  },
}))``;

export const Container = styled.View`
  border-radius: 20px;
  background-color: ${({theme}) => theme.colors.white};
  ${shadows[2]};
  margin: 0 24px;
`;

export const Pressable = styled(RectButton)`
  padding: 20px;

  flex-direction: row;
  align-items: center;

  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

export const Main = styled.View`
  flex: 1;
  margin: 0 16px;
`;

export const Title = styled(Text).attrs({
  variant: 'h6',
  numberOfLines: 1,
})`
  color: ${({theme}) => theme.colors.greyscale[900]};
`;

export const Subtitle = styled(Text).attrs({
  variant: 'body-medium-medium',
})`
  color: ${({theme}) => theme.colors.greyscale[700]};
  margin-top: 8px;
`;

export const TotalTime = styled(Text).attrs({
  variant: 'h6',
})`
  color: ${({theme}) => theme.colors.greyscale[800]};
`;
