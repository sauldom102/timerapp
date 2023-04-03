import styled from 'styled-components/native';
import BaseButton from 'components/Button';
import Text from 'components/Text';
import {BottomSheet} from '../Components';

export const Sheet = styled(BottomSheet)``;

export const Main = styled.View`
  flex: 1;
  padding: 24px 24px ${({theme}) => theme.device.safeBottom + 24}px;
  gap: 24px;
`;

export const Title = styled(Text).attrs({
  variant: 'h4',
})`
  color: ${({theme}) => theme.colors.alertsAndStatus.error};
  text-align: center;
`;

export const Divider = styled.View`
  height: 1px;
  background-color: ${({theme}) => theme.colors.greyscale[200]};
`;

export const Message = styled(Text).attrs({
  variant: 'h5',
})`
  color: ${({theme}) => theme.colors.greyscale[800]};
  text-align: center;
`;

export const Bottom = styled.View`
  flex-direction: row;
  gap: 12px;
`;

export const Button = styled(BaseButton)`
  flex: 1;
`;
