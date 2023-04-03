import type {FC} from 'react';
import {useMemo} from 'react';
import React, {memo} from 'react';
import {useTranslation} from 'react-i18next';
import Bar from './Bar';
import {HEIGHT, LABELS, GRADIENTS} from './constants';
import {Container, Empty, EmptyTitle} from './styles';
import type {Props} from './types';
import {mapBarHeights} from './utils';

const WeeklyBarChart: FC<Props> = ({data}) => {
  const barHeights = useMemo(() => mapBarHeights(data, HEIGHT), [data]);

  const {t} = useTranslation();

  const empty = useMemo(() => data.every(val => val === 0), [data]);

  if (data.length !== LABELS.length) {
    return null;
  }

  return (
    <Container>
      {data.map((val, i) => (
        <Bar
          key={LABELS[i]}
          label={LABELS[i]}
          value={val}
          height={barHeights[i]}
          gradient={GRADIENTS[i]}
        />
      ))}
      {empty && (
        <Empty>
          <EmptyTitle>{t('misc.no-data-for-this-week')}</EmptyTitle>
        </Empty>
      )}
    </Container>
  );
};

export default memo(WeeklyBarChart);
