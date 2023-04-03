import type {FC} from 'react';
import {Header, SectionedTaskItemList, StatusBar} from 'components';
import {useTranslation} from 'react-i18next';
import useConnect from './connect';
import {Container} from './styles';

const Task: FC = () => {
  const {sectionedTasks, getNextPage, hasNextPage, refresh} = useConnect();

  const {t} = useTranslation();

  return (
    <Container>
      <StatusBar />
      <Header
        title={t('screens.task.title')}
        rightIcon="moreCircle"
        showAppLogo
      />
      <SectionedTaskItemList
        sectionedTasks={sectionedTasks}
        onEndReached={getNextPage}
        hasNextPage={hasNextPage}
        onRefresh={refresh}
        viewOnly
      />
    </Container>
  );
};

export default Task;
