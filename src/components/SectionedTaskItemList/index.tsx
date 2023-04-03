import type {FC} from 'react';
import {useMemo, useState} from 'react';
import React, {memo, useCallback} from 'react';
import {
  getTaskItemProps,
  getUnplayableTaskItemProps,
} from 'components/TaskItem/utils';
import {useDebounce, useRefreshControl} from 'utils/hooks';
import Section from './Section';
import {List, TaskItem, Separator, ActivityIndicator} from './styles';
import type {Props, RenderItemProps, RenderSectionHeaderParams} from './types';

const SectionedTaskItemList: FC<Props> = ({
  sectionedTasks,
  onPressTaskPlayPause,
  onPressTask,
  onPressDeleteTask,
  onPressSectionViewAll,
  ListHeaderComponent,
  onEndReached,
  hasNextPage,
  withSafeBottom = false,
  viewOnly = false,
  onRefresh,
  style,
}) => {
  const extraProps = useRefreshControl({
    onRefresh,
  });

  const handleRenderItem = useCallback(
    ({item}: RenderItemProps) => (
      <TaskItem
        {...(viewOnly
          ? {}
          : {
              onPressPlayPause: onPressTaskPlayPause,
              onPress: onPressTask,
              onPressDelete: onPressDeleteTask,
            })}
        {...(!viewOnly
          ? getTaskItemProps(item)
          : getUnplayableTaskItemProps(item))}
      />
    ),
    [onPressTaskPlayPause, onPressTask, onPressDeleteTask, viewOnly],
  );

  const handleRenderSectionHeader = useCallback(
    ({section}: RenderSectionHeaderParams) => (
      <Section
        title={section.title}
        index={section.index}
        canViewAll={section.canViewAll}
        onPressViewAll={onPressSectionViewAll}
      />
    ),
    [onPressSectionViewAll],
  );

  const [loadingNextPage, setLoadingNextPage] = useState(false);

  const debouncedLoading = useDebounce({
    value: loadingNextPage,
    delay: 1000,
    notDelayIf: true,
  });

  const handleEndReached = useCallback(
    async info => {
      if (!hasNextPage || !onEndReached) {
        return;
      }

      try {
        setLoadingNextPage(true);
        await onEndReached?.(info);
      } catch (err) {
      } finally {
        setTimeout(() => {
          setLoadingNextPage(false);
        }, 500);
      }
    },
    [hasNextPage, onEndReached],
  );

  const handleGetItemLayout = useCallback(
    (_, index: number) => ({
      length: 100,
      offset: 100 * index,
      index,
    }),
    [],
  );

  const handleRenderFooter = useMemo(
    () => (debouncedLoading ? <ActivityIndicator /> : null),
    [debouncedLoading],
  );

  return (
    <List
      sections={sectionedTasks}
      renderItem={handleRenderItem}
      renderSectionHeader={handleRenderSectionHeader}
      ItemSeparatorComponent={Separator}
      ListHeaderComponent={ListHeaderComponent}
      ListFooterComponent={handleRenderFooter}
      getItemLayout={handleGetItemLayout}
      onEndReached={handleEndReached}
      withSafeBottom={withSafeBottom}
      {...extraProps}
      style={style}
    />
  );
};

export default memo(SectionedTaskItemList);
