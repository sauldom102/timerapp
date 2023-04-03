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

const Login: FC = () => {
  const {inputRefs, goBack, control, submit, isValid, handlePressSignUp} =
    useConnect();

  const {t} = useTranslation();

  return (
    <Container>
      <StatusBar />
      <Header onPressGoBack={goBack} />
      <Body>
        <AvoidingView>
          <Title>{t('screens.login.title')}</Title>
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
              onSubmitEditing={submit}
            />
          </Inputs>
          <Button
            title={t('actions.sign-in')}
            onPress={submit}
            enabled={isValid}
            withShadow
            rounded
          />
        </AvoidingView>
      </Body>
      <FooterWithButton
        title={t('misc.dont-have-an-account')}
        buttonTitle={t('actions.sign-up')}
        onPressButton={handlePressSignUp}
      />
    </Container>
  );
};

export default Login;
