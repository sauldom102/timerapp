import styled from 'styled-components/native';
import Text from 'components/Text';
import {BorderlessButton} from 'react-native-gesture-handler';
import type {LabelProps} from './types';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled(BorderlessButton).attrs({
  activeOpacity: 1,
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Label = styled(Text).attrs<LabelProps>(({focused}) => ({
  variant: focused ? 'body-xsmall-bold' : 'body-xsmall-medium',
}))<LabelProps>`
  margin-top: 2px;
  text-align: center;
  color: ${({focused, theme}) =>
    focused ? theme.colors.primary[500] : theme.colors.greyscale[500]};
`;
