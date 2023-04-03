import {expect, element, by} from 'detox';
import {TEST_CREDENTIALS} from './constants';

export const loginWithCredentials = async (credentials = TEST_CREDENTIALS) => {
  await expect(element(by.text('Login to your\nAccount'))).toBeVisible();
  await element(by.id('email-input')).typeText(credentials.email);
  await element(by.id('password-input')).typeText(credentials.password);
  await element(by.text('Sign in')).tap();
};

export const isUserOnHomeScreen = async () => {
  await expect(element(by.text('Home'))).toBeVisible();
  await expect(element(by.text('Pomo'))).toBeVisible();
};

export const goToHomeTabScreen = async () => {
  await element(by.text('Home')).tap();
};

export const goToStatsTabScreen = async () => {
  await element(by.text('Statistics')).tap();
};

export const goToTaskTabScreen = async () => {
  await element(by.text('Task')).tap();
};

export const goToAllTodayTasksScreen = async () => {
  await goToHomeTabScreen();
  await element(by.text('View All')).tap();
};

export const pressHeaderBackButton = async () => {
  await element(by.id('icon-button-lightArrowLeft')).tap();
};
