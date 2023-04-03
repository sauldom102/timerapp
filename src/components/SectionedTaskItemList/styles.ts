import type {ActivityIndicatorProps} from 'react-native';
import {
  SectionList,
  ActivityIndicator as BaseActivityIndicator,
} from 'react-native';
import styled from 'styled-components/native';
import BaseTaskItem from 'components/TaskItem';
import {device} from 'theme/device';
import type {ListProps, ListType} from './types';

export const List = styled(SectionList).attrs<ListProps>(
  ({withSafeBottom}) => ({
    contentContainerStyle: {
      flexGrow: 1,
      paddingTop: 8,
      paddingHorizontal: 24,
      paddingBottom: 24 + (withSafeBottom ? device.safeBottom : 0),
    },
    indicatorStyle: 'white',
    alwaysBounceVertical: false,
    stickySectionHeadersEnabled: false,
    onEndReachedThreshold: 0.3,
  }),
)<ListProps>`` as unknown as ListType;

export const TaskItem = styled(BaseTaskItem)``;

export const Separator = styled.View`
  height: 16px;
`;

export const ActivityIndicator = styled(
  BaseActivityIndicator,
).attrs<ActivityIndicatorProps>(({theme}) => ({
  size: 'large',
  color: theme.colors.greyscale[300],
}))<ActivityIndicatorProps>`
  margin: 20px 0;
`;
