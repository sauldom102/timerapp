import type {FC} from 'react';
import React, {memo} from 'react';
import Icons from 'components/Icons';
import SimpleIconButton from 'components/SimpleIconButton';
import {Container, Side, Title} from './styles';
import type {Props} from './types';

const Header: FC<Props> = ({
  onPressGoBack,
  onPressClose,
  title,
  centerTitle,
  showAppLogo = false,
  rightIcon,
  onPressRight,
  testID,
}) => (
  <Container testID={testID}>
    <Side>
      {showAppLogo && <Icons name="logo" size={32} />}
      {onPressGoBack && (
        <SimpleIconButton
          iconName="lightArrowLeft"
          iconSize={28}
          onPress={onPressGoBack}
        />
      )}
      {onPressClose && (
        <SimpleIconButton
          iconName="close"
          iconSize={28}
          onPress={onPressClose}
        />
      )}
    </Side>
    {!!title && <Title center={centerTitle}>{title}</Title>}
    <Side>
      {!!rightIcon && (
        <SimpleIconButton iconName={rightIcon} onPress={onPressRight} />
      )}
    </Side>
  </Container>
);

export default memo(Header);
