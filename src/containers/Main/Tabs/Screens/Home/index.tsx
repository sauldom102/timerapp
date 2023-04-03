import type {FC} from 'react';
import {useCallback} from 'react';
import {StatusBar, SectionedTaskItemList} from 'components';
import {useTranslation} from 'react-i18next';
import useConnect from './connect';
import Info from './Info';
import {Container, Header} from './styles';
import type {Props} from './types';

const Home: FC<Props> = () => {
  const {
    sectionedTasks,
    title,
    handlePressTask,
    handlePressDeleteTask,
    handlePressViewAll,
    handlePressNotifications,
    taskCompletitionProgress,
    taskCompletitionProgressTitle,
    taskCompletitionProgressSubtitle,
    showProgressCard,
    handleRefresh,
  } = useConnect();

  const {t} = useTranslation();

  const handleRenderListHeader = useCallback(
    () => (
      <Info
        title={title}
        progressTitle={taskCompletitionProgressTitle}
        progressSubtitle={taskCompletitionProgressSubtitle}
        progressValue={taskCompletitionProgress}
        showProgressCard={showProgressCard}
      />
    ),
    [
      title,
      taskCompletitionProgress,
      taskCompletitionProgressTitle,
      taskCompletitionProgressSubtitle,
      showProgressCard,
    ],
  );

  return (
    <Container>
      <StatusBar />
      <Header
        title={t('screens.home.title')}
        rightIcon="notification"
        onPressRight={handlePressNotifications}
        testID="home-header"
        showAppLogo
      />
      <SectionedTaskItemList
        sectionedTasks={sectionedTasks}
        ListHeaderComponent={handleRenderListHeader}
        onPressTask={handlePressTask}
        onPressDeleteTask={handlePressDeleteTask}
        onPressSectionViewAll={handlePressViewAll}
        onRefresh={handleRefresh}
      />
    </Container>
  );
};

export default Home;
