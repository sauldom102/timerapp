import {Component} from 'react';
import type {
  ListRenderItemInfo,
  SectionListData,
  SectionListProps,
  ViewStyle,
} from 'react-native';
import type {Task} from 'models';

type Item = Task;

export type SectionedTask = SectionInfo & {
  data: Item[];
};

export type Props = Pick<
  SectionListProps<Item>,
  'ListHeaderComponent' | 'onEndReached'
> & {
  sectionedTasks: SectionedTask[];
  onPressTaskPlayPause?(taskId: string): void;
  onPressTask?(taskId: string): void;
  onPressDeleteTask?(taskId: string): void;
  onPressSectionViewAll?(sectionIndex: number): void;
  hasNextPage?: boolean;
  withSafeBottom?: boolean;
  viewOnly?: boolean;
  onRefresh?: () => Promise<any>;
  style?: ViewStyle;
};

export type ListProps = {
  withSafeBottom: boolean;
};

type SectionInfo = {
  title: string;
  index: number;
  canViewAll?: boolean;
};

export type RenderSectionHeaderParams = {
  section: SectionListData<Item, SectionInfo>;
};

export class CustomList extends Component<
  SectionListProps<Item, SectionInfo> & ListProps
> {}

export type ListType = typeof CustomList;

export type RenderItemProps = ListRenderItemInfo<Item>;
