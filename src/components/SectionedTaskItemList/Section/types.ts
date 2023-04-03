export type Props = {
  index: number;
  title: string;
  canViewAll?: boolean;
  onPressViewAll?: (index: number) => void;
};
