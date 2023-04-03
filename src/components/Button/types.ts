import type {StyleProp, ViewStyle} from 'react-native';

export type ButtonVariant = 'primary' | 'secondary';

export type Props = {
  loading?: boolean;
  onPress?: () => void | Promise<void>;
  style?: StyleProp<ViewStyle>;
  testID?: string;
  title?: string;
  variant?: ButtonVariant;
  enabled?: boolean;
  withShadow?: boolean;
  rounded?: boolean;
};

export type LogicParams = Pick<Props, 'onPress' | 'loading' | 'enabled'>;

export type ContainerProps = {
  rounded: boolean;
  enabled?: boolean;
  variant: NonNullable<Props['variant']>;
  withShadow: boolean;
};

export type PressableProps = {
  rounded: boolean;
};

export type TitleProps = {
  buttonVariant: NonNullable<Props['variant']>;
};
