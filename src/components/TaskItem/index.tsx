import type {FC} from 'react';
import {useCallback} from 'react';
import React, {memo} from 'react';
import PlayPause from 'components/PlayPause';
import theme from 'theme';
import {useIdCallback} from 'utils/hooks';
import Category from './Category';
import useLogic from './logic';
import SideButton from './SideButton';
import {
  Swipeable,
  Container,
  Pressable,
  Main,
  Title,
  Subtitle,
  TotalTime,
} from './styles';
import type {Props} from './types';

const TaskItem: FC<Props> = ({
  id,
  title,
  subtitle,
  totalTime,
  rightText,
  categoryColor,
  categoryIcon,
  canPlay = true,
  onPress,
  onPressDelete,
  canBeDeleted = true,
}) => {
  const {playing, timeToDisplay, handlePressPlayPause, handlePressCheck} =
    useLogic({
      id,
      totalTime,
      tickEnabled: !subtitle,
    });

  const handlePress = useIdCallback(onPress, id);
  const handlePressDelete = useIdCallback(onPressDelete, id);

  const handleRenderLeftActions = useCallback(
    () =>
      canPlay ? (
        <SideButton
          iconName="check"
          color={theme.colors.alertsAndStatus.success}
          onPress={handlePressCheck}
          isLeft
        />
      ) : null,
    [canPlay, handlePressCheck],
  );

  const canDelete = !!onPressDelete;
  const handleRenderRightActions = useCallback(
    () =>
      canDelete ? (
        <SideButton
          iconName="curvedDelete"
          color={theme.colors.primary[500]}
          onPress={handlePressDelete}
        />
      ) : null,
    [canDelete, handlePressDelete],
  );

  return (
    <Swipeable
      enabled={canBeDeleted}
      renderLeftActions={handleRenderLeftActions}
      renderRightActions={handleRenderRightActions}>
      <Container testID={`task-item-${title}`}>
        <Pressable enabled={!!onPress} onPress={handlePress}>
          <Category bgColor={categoryColor} image={categoryIcon} />
          <Main>
            <Title>{title}</Title>
            <Subtitle>{subtitle ?? timeToDisplay}</Subtitle>
          </Main>
          {rightText ? (
            <TotalTime>{rightText}</TotalTime>
          ) : (
            canPlay && (
              <PlayPause playing={playing} onPress={handlePressPlayPause} />
            )
          )}
        </Pressable>
      </Container>
    </Swipeable>
  );
};

export default memo(TaskItem);
