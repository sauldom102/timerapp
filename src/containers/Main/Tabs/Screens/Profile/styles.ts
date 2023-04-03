import styled from 'styled-components/native';
import {Text} from 'components';
import BaseUpgradeButton from './UpgradeButton';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.white};
`;

export const Body = styled.ScrollView.attrs({
  alwaysBounceVertical: false,
  contentContainerStyle: {
    paddingTop: 24,
    paddingBottom: 24,
  },
})``;

export const UserInfo = styled.View`
  align-items: center;
  margin-top: 24px;
`;

export const ImageMock = styled.View`
  width: 164px;
  aspect-ratio: 1;
  border-radius: 82px;
  background-color: ${({theme}) => theme.colors.greyscale[200]};
`;

export const FullName = styled(Text).attrs({
  variant: 'h4',
})`
  text-align: center;
  letter-spacing: 0.4px;
  margin-top: 20px;
`;

export const Email = styled(Text).attrs({
  variant: 'body-medium-semibold',
})`
  text-align: center;
  letter-spacing: 0.4px;
  margin-top: 8px;
`;

export const UpgradeButton = styled(BaseUpgradeButton)`
  margin: 24px 24px 0;
`;

export const Menu = styled.View`
  margin-top: 12px;
`;
