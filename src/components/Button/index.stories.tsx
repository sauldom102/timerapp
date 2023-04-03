import {ContainerView} from '@storybook-utils';
import {action} from '@storybook/addon-actions';
import Button from '.';

export default {
  title: 'Button',
  component: Button,
};

export const Primary = () => (
  <ContainerView>
    <Button variant="primary" title="Primary" onPress={action('onPress')} />
  </ContainerView>
);

export const PrimaryLoading = () => (
  <ContainerView>
    <Button
      variant="primary"
      title="Primary loading"
      onPress={action('onPress')}
      loading
    />
  </ContainerView>
);

export const Secondary = () => (
  <ContainerView>
    <Button variant="secondary" title="Secondary" onPress={action('onPress')} />
  </ContainerView>
);

export const SecondaryLoading = () => (
  <ContainerView>
    <Button
      variant="secondary"
      title="Secondary loading"
      onPress={action('onPress')}
      loading
    />
  </ContainerView>
);
