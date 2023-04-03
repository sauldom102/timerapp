import {expect, device, element, by} from 'detox';
import {v4 as uuidv4} from 'uuid';
import {TEST_CREDENTIALS} from './constants';
import {isUserOnHomeScreen, loginWithCredentials} from './utils';

type Credentials = {
  emailUsername: string;
  email: string;
  password: string;
};

describe('Auth Test Suite', () => {
  let lastCredentials: Credentials | undefined;

  beforeAll(async () => {
    await device.launchApp();
  });

  const isUserOnLoginScreen = async () => {
    await expect(element(by.text('Login to your\nAccount'))).toBeVisible();
  };

  it('should show login at startup', async () => {
    await isUserOnLoginScreen();
  });

  const goToSignUpScreen = async () => {
    await element(by.text('Sign up')).tap();
    await expect(element(by.text('Create your\nAccount'))).toBeVisible();
  };

  it('should show sign up screen after tap', async () => {
    await goToSignUpScreen();
  });

  it('should show error when trying to login with invalid credentials', async () => {
    await device.reloadReactNative();
    await expect(element(by.text('Login to your\nAccount'))).toBeVisible();
    await element(by.id('email-input')).typeText(TEST_CREDENTIALS.email);
    await element(by.id('password-input')).typeText('invalid');
    await element(by.text('Sign in')).tap();
    await expect(element(by.text('Home'))).not.toBeVisible();
    await expect(element(by.text('Pomo'))).not.toBeVisible();
    await expect(element(by.text('Invalid email or password'))).toBeVisible();
  });

  it('should allow user to login', async () => {
    await device.reloadReactNative();
    await loginWithCredentials();
    await isUserOnHomeScreen();
  });

  it('should allow user to logout', async () => {
    await element(by.text('Profile')).tap();
    await element(by.type('UIScrollView')).scrollTo('bottom');

    const logoutEl = element(by.text('Logout'));
    await expect(logoutEl).toBeVisible();
    await logoutEl.tap();

    // expect the confirmation bottom sheet to be visible
    await expect(
      element(by.text('Are you sure you want to logout?')),
    ).toBeVisible();
    const logoutButton = element(by.text('Yes, Logout'));
    await expect(logoutButton).toBeVisible();
    await logoutButton.tap();

    await isUserOnLoginScreen();
  });

  const isUserOnFillProfileScreen = async () => {
    await expect(element(by.text('Fill Your Profile'))).toBeVisible();
  };

  it('should allow user to sign up', async () => {
    await goToSignUpScreen();
    const emailUsername = `test-${uuidv4()}`;
    const email = `${emailUsername}@test.com`;
    const password = 'examplepassword';
    lastCredentials = {
      emailUsername,
      email,
      password,
    };
    await element(by.id('email-input')).typeText(email);
    await element(by.id('password-input')).typeText(password);
    await element(by.id('repeatPassword-input')).typeText(password);
    await element(by.text('Sign up')).tap();

    // check if user is in fill profile screen
    await isUserOnFillProfileScreen();
  });

  it('should show fill profile screen after login for uncompleted profile', async () => {
    if (!lastCredentials) {
      fail('no credentials');
    }

    await device.uninstallApp();
    await device.installApp();
    await device.launchApp();
    await loginWithCredentials({
      email: lastCredentials.email,
      password: lastCredentials.password,
    });
    await isUserOnFillProfileScreen();
  });

  it('should allow user to complete his profile', async () => {
    if (!lastCredentials) {
      fail('no credentials');
    }

    const firstName = 'Harry';
    const lastName = 'Potter';

    await element(by.id('firstName-input')).typeText(firstName);
    await element(by.id('lastName-input')).typeText(lastName);
    await element(by.id('username-input')).typeText(
      lastCredentials.emailUsername,
    );
    await element(by.text('Start')).tap();
    await isUserOnHomeScreen();
  });
});
