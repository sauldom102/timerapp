import type {FC} from 'react';
import {useCallback} from 'react';
import {Header, SectionedTaskItemList, StatusBar} from 'components';
import {useTranslation} from 'react-i18next';
import useConnect from './connect';
import Info from './Info';
import {Container} from './styles';

const Stats: FC = () => {
  const {
    sectionedTasks,
    getNextPage,
    hasNextPage,
    weeklyMinutes,
    handleRefresh,
  } = useConnect();

  const {t} = useTranslation();

  const handleRenderListHeader = useCallback(
    () => <Info data={weeklyMinutes} />,
    [weeklyMinutes],
  );

  return (
    <Container>
      <StatusBar />
      <Header
        title={t('screens.stats.title')}
        rightIcon="moreCircle"
        showAppLogo
      />
      <SectionedTaskItemList
        sectionedTasks={sectionedTasks}
        ListHeaderComponent={handleRenderListHeader}
        onEndReached={getNextPage}
        hasNextPage={hasNextPage}
        onRefresh={handleRefresh}
        viewOnly
      />
    </Container>
  );
};

export default Stats;
