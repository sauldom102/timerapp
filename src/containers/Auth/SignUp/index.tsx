import type {FC} from 'react';
import {Header, StatusBar} from 'components';
import {useTranslation} from 'react-i18next';
import useConnect from './connect';
import {
  Container,
  AvoidingView,
  Body,
  Title,
  Inputs,
  Input,
  Button,
  FooterWithButton,
} from './styles';

const SignUp: FC = () => {
  const {inputRefs, goBack, control, submit, isValid, handlePressSignIn} =
    useConnect();

  const {t} = useTranslation();

  return (
    <Container>
      <StatusBar />
      <Header onPressGoBack={goBack} />
      <Body>
        <AvoidingView>
          <Title>{t('screens.sign-up.title')}</Title>
          <Inputs>
            <Input
              name="email"
              placeholder={t('inputs.email.placeholder')}
              type="email"
              control={control}
              nextFieldRef={inputRefs.password}
            />
            <Input
              innerRef={inputRefs.password}
              name="password"
              placeholder={t('inputs.password.placeholder')}
              type="password"
              control={control}
              nextFieldRef={inputRefs.repeatPassword}
            />
            <Input
              innerRef={inputRefs.repeatPassword}
              name="repeatPassword"
              placeholder={t('inputs.repeat-password.placeholder')}
              type="password"
              control={control}
            />
          </Inputs>
          <Button
            title={t('actions.sign-up')}
            onPress={submit}
            enabled={isValid}
            withShadow
            rounded
          />
        </AvoidingView>
      </Body>
      <FooterWithButton
        title={t('misc.already-have-an-account')}
        buttonTitle={t('actions.sign-in')}
        onPressButton={handlePressSignIn}
      />
    </Container>
  );
};

export default SignUp;
