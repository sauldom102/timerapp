export type Size = 'regular' | 'bigger';

export type Props = {
  size?: Size;
  playing?: boolean;
  onPress?: () => void;
};

export type GradientProps = {
  playing: boolean;
};

export type PressableProps = {
  size: Size;
};
