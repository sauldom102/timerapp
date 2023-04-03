import type {FC} from 'react';
import React, {memo} from 'react';
import {StatusBar} from 'components';
import {useTranslation} from 'react-i18next';
import useConnect from './connect';
import {
  Container,
  AvoidingView,
  Body,
  Info,
  Title,
  Description,
  Inputs,
  Input,
  Bottom,
  Button,
} from './styles';
import type {Props} from './types';

const FillProfile: FC<Props> = () => {
  const {control, submit, isValid, inputRefs, handlePressSkip} = useConnect();

  const {t} = useTranslation();

  return (
    <Container>
      <StatusBar />
      <AvoidingView>
        <Body>
          <Info>
            <Title>{t('screens.fill-profile.title')}</Title>
            <Description>{t('screens.fill-profile.description')}</Description>
          </Info>
          <Inputs>
            <Input
              name="firstName"
              placeholder={t('inputs.first-name.placeholder')}
              control={control}
              nextFieldRef={inputRefs.lastName}
            />
            <Input
              innerRef={inputRefs.lastName}
              name="lastName"
              placeholder={t('inputs.last-name.placeholder')}
              control={control}
              nextFieldRef={inputRefs.username}
            />
            <Input
              innerRef={inputRefs.username}
              name="username"
              type="username"
              placeholder={t('inputs.username.placeholder')}
              control={control}
              onSubmitEditing={submit}
            />
          </Inputs>
        </Body>
        <Bottom>
          <Button
            title={t('actions.skip')}
            variant="secondary"
            onPress={handlePressSkip}
            rounded
          />
          <Button
            title={t('actions.start')}
            onPress={submit}
            enabled={isValid}
            withShadow
            rounded
          />
        </Bottom>
      </AvoidingView>
    </Container>
  );
};

export default memo(FillProfile);
