import type {FC} from 'react';
import {Header, StatusBar} from 'components';
import {useTranslation} from 'react-i18next';
import useConnect from './connect';
import {MENU_ITEMS} from './constants';
import MenuItem from './MenuItem';
import {
  Container,
  Body,
  UserInfo,
  ImageMock,
  FullName,
  Email,
  UpgradeButton,
  Menu,
} from './styles';

const Profile: FC = () => {
  const {fullName, email, handlePressMenuItem} = useConnect();

  const {t} = useTranslation();

  return (
    <Container>
      <StatusBar />
      <Header
        title={t('screens.profile.title')}
        rightIcon="moreCircle"
        showAppLogo
      />
      <Body>
        <UserInfo>
          <ImageMock />
          <FullName>{fullName}</FullName>
          <Email>{email}</Email>
        </UserInfo>
        <UpgradeButton />
        <Menu>
          {MENU_ITEMS.map(item => (
            <MenuItem
              key={item.id}
              id={item.id}
              title={item.title}
              icon={item.icon}
              onPress={handlePressMenuItem}
            />
          ))}
        </Menu>
      </Body>
    </Container>
  );
};

export default Profile;
