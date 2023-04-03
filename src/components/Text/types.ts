import type {ReactNode} from 'react';
import type {TextProps} from 'react-native';

export type Fonts =
  | 'Urbanist-Bold'
  | 'Urbanist-Medium'
  | 'Urbanist-SemiBold'
  | 'Urbanist-Regular'
  | 'Roboto-Medium';

export type Variant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'body-xlarge-regular'
  | 'body-xlarge-semibold'
  | 'body-xlarge-medium'
  | 'body-xlarge-bold'
  | 'body-large-regular'
  | 'body-large-semibold'
  | 'body-large-medium'
  | 'body-large-bold'
  | 'body-medium-regular'
  | 'body-medium-semibold'
  | 'body-medium-medium'
  | 'body-medium-bold'
  | 'body-small-regular'
  | 'body-small-semibold'
  | 'body-small-medium'
  | 'body-small-bold'
  | 'body-xsmall-regular'
  | 'body-xsmall-semibold'
  | 'body-xsmall-medium'
  | 'body-xsmall-bold';

export type Props = {
  family?: Fonts;
  children?: ReactNode;
  variant?: Variant;
} & TextProps;
