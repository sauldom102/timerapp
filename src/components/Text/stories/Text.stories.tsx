import {ContainerView} from '@storybook-utils';
import flatten from 'lodash/flatten';
import Text from '../index';
import {variantStyles} from '../styles';

const variants = flatten(variantStyles.map(vs => vs.variants));

export default {
  title: 'Text',
  component: Text,
  argTypes: {},
};

export const Texts = () => (
  <ContainerView>
    {variants.map(variant => (
      <Text key={variant} variant={variant}>
        {variant}
      </Text>
    ))}
  </ContainerView>
);
