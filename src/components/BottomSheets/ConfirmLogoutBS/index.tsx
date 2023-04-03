import type {FC} from 'react';
import {useRef} from 'react';
import React, {memo, useCallback} from 'react';
import type BottomSheet from '@gorhom/bottom-sheet';
import {useAuth} from 'api/hooks';
import {useTranslation} from 'react-i18next';
import {useCloseBottomSheet, useTimeout} from 'utils';
import {Sheet, Main, Title, Divider, Message, Bottom, Button} from './styles';
import type {Props} from './types';

const ConfirmLogoutBS: FC<Props> = () => {
  const {logout} = useAuth();

  const {t} = useTranslation();

  const {setTimeout} = useTimeout();

  const bottomSheetRef = useRef<BottomSheet>(null);

  const {ref, handleClose} = useCloseBottomSheet(bottomSheetRef);

  const handlePressLogout = useCallback(() => {
    handleClose();
    setTimeout(() => {
      logout();
    }, 400);
  }, [handleClose, setTimeout, logout]);

  return (
    <Sheet ref={ref} openByDefault>
      <Main>
        <Title>{t('bottomSheets.confirm-logout.title')}</Title>
        <Divider />
        <Message>{t('bottomSheets.confirm-logout.message')}</Message>
        <Bottom>
          <Button
            title={t('actions.cancel')}
            onPress={handleClose}
            variant="secondary"
            rounded
          />
          <Button
            title={t('actions.yes-logout')}
            onPress={handlePressLogout}
            withShadow
            rounded
          />
        </Bottom>
      </Main>
    </Sheet>
  );
};

export default memo(ConfirmLogoutBS);
