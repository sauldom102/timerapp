import type {MainStackScreenProps} from 'navigator/types';

export type Props = MainStackScreenProps<'TaskDetail'> & {};

export type UseLogicParams = {
  taskId: string;
  totalTime: number;
  expectedDuration: number;
};
