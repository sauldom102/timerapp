import type {FC} from 'react';
import React, {memo} from 'react';
import {Header, SectionedTaskItemList} from 'components';
import {useTranslation} from 'react-i18next';
import useConnect from './connect';
import {Container} from './styles';
import type {Props} from './types';

const AllTodayTasks: FC<Props> = () => {
  const {
    sectionedTasks,
    goBack,
    handlePressTask,
    handlePressDeleteTask,
    handleRefresh,
  } = useConnect();

  const {t} = useTranslation();

  return (
    <Container>
      <Header
        title={t('screens.all-today-tasks.title')}
        rightIcon="moreCircle"
        onPressGoBack={goBack}
      />
      <SectionedTaskItemList
        sectionedTasks={sectionedTasks}
        onPressTask={handlePressTask}
        onPressDeleteTask={handlePressDeleteTask}
        onRefresh={handleRefresh}
        withSafeBottom
      />
    </Container>
  );
};

export default memo(AllTodayTasks);
