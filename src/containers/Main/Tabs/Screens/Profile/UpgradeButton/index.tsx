import type {FC} from 'react';
import React, {memo} from 'react';
import {useTranslation} from 'react-i18next';
import {
  Container,
  Pressable,
  Gradient,
  Row,
  Chip,
  ChipTitle,
  Title,
  Icon,
  Subtitle,
} from './styles';
import type {Props} from './types';

const UpgradeButton: FC<Props> = ({onPress, style}) => {
  const {t} = useTranslation();

  return (
    <Container style={style}>
      <Pressable onPress={onPress}>
        <Gradient />
        <Row>
          <Chip>
            <ChipTitle>{t('misc.upgrade-premium-card.pro')}</ChipTitle>
          </Chip>
          <Title>{t('misc.upgrade-premium-card.title')}</Title>
          <Icon name="boldArrowRightCircle" />
        </Row>
        <Subtitle>{t('misc.upgrade-premium-card.subtitle')}</Subtitle>
      </Pressable>
    </Container>
  );
};

export default memo(UpgradeButton);
