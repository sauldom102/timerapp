import type {FC} from 'react';
import React, {memo, useCallback} from 'react';
import TextButton from 'components/TextButton';
import {useTranslation} from 'react-i18next';
import {Container, Title} from './styles';
import type {Props} from './types';

const Section: FC<Props> = ({
  index,
  title,
  canViewAll = false,
  onPressViewAll,
}) => {
  const {t} = useTranslation();

  const handlePressViewAll = useCallback(() => {
    onPressViewAll?.(index);
  }, [onPressViewAll, index]);

  return (
    <Container>
      <Title>{title}</Title>
      {canViewAll && (
        <TextButton
          title={t('actions.view-all')}
          onPress={handlePressViewAll}
        />
      )}
    </Container>
  );
};

export default memo(Section);
