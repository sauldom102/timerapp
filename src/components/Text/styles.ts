import {Text as BaseText} from 'react-native';
import styled, {css} from 'styled-components/native';
import type {FlattenSimpleInterpolation} from 'styled-components';
import {lineHeight} from 'utils';
import type {Props, Fonts, Variant} from './types';

type VariantStyle = {
  variants: Variant[];
  style: FlattenSimpleInterpolation;
};

export const variantStyles: VariantStyle[] = [
  {
    variants: ['h1'],
    style: css`
      font-size: 48px;
      line-height: ${lineHeight(48, 1.1)}px;
    `,
  },
  {
    variants: ['h2'],
    style: css`
      font-size: 40px;
      line-height: ${lineHeight(40, 1.1)}px;
    `,
  },
  {
    variants: ['h3'],
    style: css`
      font-size: 32px;
      line-height: ${lineHeight(32, 1.1)}px;
    `,
  },
  {
    variants: ['h4'],
    style: css`
      font-size: 24px;
      line-height: ${lineHeight(24, 1.2)}px;
    `,
  },
  {
    variants: ['h5'],
    style: css`
      font-size: 20px;
      line-height: ${lineHeight(20, 1.2)}px;
    `,
  },
  {
    variants: ['h6'],
    style: css`
      font-size: 18px;
      line-height: ${lineHeight(18, 1.2)}px;
    `,
  },
  {
    variants: [
      'body-xlarge-bold',
      'body-xlarge-medium',
      'body-xlarge-regular',
      'body-xlarge-semibold',
    ],
    style: css`
      font-size: 18px;
      line-height: ${lineHeight(18, 1.4)}px;
    `,
  },
  {
    variants: [
      'body-large-bold',
      'body-large-medium',
      'body-large-regular',
      'body-large-semibold',
    ],
    style: css`
      font-size: 16px;
      line-height: ${lineHeight(16, 1.4)}px;
    `,
  },
  {
    variants: [
      'body-medium-bold',
      'body-medium-medium',
      'body-medium-regular',
      'body-medium-semibold',
    ],
    style: css`
      font-size: 14px;
      line-height: ${lineHeight(14, 1.4)}px;
    `,
  },
  {
    variants: [
      'body-small-bold',
      'body-small-medium',
      'body-small-regular',
      'body-small-semibold',
    ],
    style: css`
      font-size: 12px;
    `,
  },
  {
    variants: [
      'body-xsmall-bold',
      'body-xsmall-medium',
      'body-xsmall-regular',
      'body-xsmall-semibold',
    ],
    style: css`
      font-size: 10px;
    `,
  },
];

const fontFamilyByVariant: {variants: Variant[]; family: Fonts}[] = [
  {
    variants: [
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'body-xlarge-bold',
      'body-large-bold',
      'body-medium-bold',
      'body-small-bold',
      'body-xsmall-bold',
    ],
    family: 'Urbanist-Bold',
  },
  {
    variants: [
      'body-xlarge-semibold',
      'body-large-semibold',
      'body-medium-semibold',
      'body-small-semibold',
      'body-xsmall-semibold',
    ],
    family: 'Urbanist-SemiBold',
  },
  {
    variants: [
      'body-xlarge-medium',
      'body-large-medium',
      'body-medium-medium',
      'body-small-medium',
      'body-xsmall-medium',
    ],
    family: 'Urbanist-Medium',
  },
];

const textWithVariant = css<Props>`
  ${({variant}) =>
    variant && variantStyles.find(vs => vs.variants.includes(variant))?.style};
  color: ${({theme}) => theme.colors.greyscale[900]};
  font-family: ${({variant}) =>
    fontFamilyByVariant.find(it => it.variants.includes(variant!))?.family ??
    'Urbanist-Regular'};
`;

// eslint-disable-next-line import/prefer-default-export
export const Text = styled(BaseText)<Props>`
  font-family: Urbanist-Regular;
  ${({variant}) => variant && textWithVariant};
`;
