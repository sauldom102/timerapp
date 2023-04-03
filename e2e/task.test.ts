import {expect, device, element, by} from 'detox';
import {v4 as uuidv4} from 'uuid';
import {
  goToAllTodayTasksScreen,
  goToStatsTabScreen,
  goToTaskTabScreen,
  isUserOnHomeScreen,
  loginWithCredentials,
  pressHeaderBackButton,
} from './utils';

describe('Task Test Suite', () => {
  const newTaskTitle = uuidv4();

  beforeAll(async () => {
    await device.launchApp();
    await loginWithCredentials();
  });

  it('should allow user to create a task', async () => {
    await element(by.id('tabbar-action-button')).tap();
    await expect(element(by.text('Create New Task')).atIndex(0)).toBeVisible();
    await element(by.id('title-input')).typeText(newTaskTitle);
    await element(by.id('description-input')).typeText('Task description');
    await element(by.text('Task Date')).tap();
    await element(by.text('Confirm')).tap();
    await expect(element(by.text('Today'))).toBeVisible();
    await element(by.type('UIScrollView')).atIndex(0).scrollTo('bottom');
    await element(by.text('Duration')).tap();
    await element(by.text('Confirm')).tap();
    await expect(element(by.text('1h'))).toBeVisible();
    await element(by.text('Category')).tap();
    await element(by.text('Reading')).atIndex(0).tap();
    await element(by.text('Done')).tap();
    await element(by.text('Create New Task')).atIndex(1).tap();
    await expect(element(by.text('Task created successfully'))).toBeVisible();

    // wait for snackbar to disappear
    await new Promise(res => setTimeout(res, 5000));

    await isUserOnHomeScreen();
    await expect(element(by.text(newTaskTitle))).toBeVisible();
  });

  it('should show new task on task tab', async () => {
    await goToTaskTabScreen();
    await expect(element(by.text(newTaskTitle))).toBeVisible();
  });

  it('should show new task on stats tab', async () => {
    await goToStatsTabScreen();
    await expect(element(by.text(newTaskTitle))).toBeVisible();
  });

  it('should show new task on all today tasks scren', async () => {
    await goToAllTodayTasksScreen();
    await expect(element(by.text(newTaskTitle))).toBeVisible();
    // go back to home screen
    await pressHeaderBackButton();
  });

  it('should allow user to register some time on the task', async () => {
    const taskItemSelector = by.id(`task-item-${newTaskTitle}`);

    await expect(
      element(by.text('Not started').withAncestor(taskItemSelector)),
    ).toBeVisible();
    await element(taskItemSelector).tap();

    await expect(element(by.text('00:00'))).toBeVisible();
    const playButton = element(by.id('play-button'));
    await expect(playButton).toBeVisible();
    await playButton.tap();
    await expect(playButton).not.toBeVisible();

    const pauseButton = element(by.id('pause-button'));
    await expect(pauseButton).toBeVisible();

    // wait some seconds to register
    await new Promise(res => setTimeout(res, 5000));

    await pauseButton.tap();
    await expect(pauseButton).not.toBeVisible();
    await expect(playButton).toBeVisible();

    // go back to home screen
    await pressHeaderBackButton();

    await expect(
      element(by.text('1min').withAncestor(taskItemSelector)),
    ).toBeVisible();
  });

  it('should allow user to delete task', async () => {
    await element(by.text(newTaskTitle)).swipe('left', 'slow', 0.3);
    const rightSideButton = element(by.id('task-right-side-button')).atIndex(0);
    await expect(rightSideButton).toBeVisible();
    await rightSideButton.tap();

    await expect(element(by.text('Delete Task'))).toBeVisible();
    const deleteButton = element(by.text('Yes, Delete'));
    await expect(deleteButton).toBeVisible();
    await deleteButton.tap();

    await isUserOnHomeScreen();
    await expect(element(by.text(newTaskTitle))).not.toBeVisible();
  });

  it('should not show deleted task on task tab', async () => {
    await goToTaskTabScreen();
    await expect(element(by.text(newTaskTitle))).not.toBeVisible();
  });

  it('should not show deleted task on stats tab', async () => {
    await goToStatsTabScreen();
    await expect(element(by.text(newTaskTitle))).not.toBeVisible();
  });

  it('should not show deleted task on all today tasks scren', async () => {
    await goToAllTodayTasksScreen();
    await expect(element(by.text(newTaskTitle))).not.toBeVisible();
    await pressHeaderBackButton();
  });
});
