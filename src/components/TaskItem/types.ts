export type Props = {
  id: string;
  title: string;
  subtitle?: string;
  totalTime: number;
  rightText?: string;
  categoryColor: string;
  categoryIcon: string;
  canPlay?: boolean;
  onPress?: (id: string) => void;
  onPressDelete?: (id: string) => void;
  canBeDeleted?: boolean;
};

export type UseLogicParams = {
  id: string;
  totalTime: number;
  tickEnabled: boolean;
};
