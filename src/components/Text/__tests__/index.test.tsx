import React from 'react';
import {render} from 'jest/test_utils';
import Text from '../';

describe('Text', () => {
  it('should render the text content', () => {
    const {getByTestId} = render(<Text>Test text</Text>);
    const text = getByTestId('text');
    expect(text.props.children).toBe('Test text');
  });

  it('should render text with a "body-xlarge-bold" variant by default', () => {
    const {getByTestId} = render(
      <Text variant="body-xlarge-bold">Hello, world!</Text>,
    );
    const text = getByTestId('text');
    const styles = text.props.style as object[];
    const flattenedStyle = styles.reduce(
      (obj, c) => ({
        ...obj,
        ...(c ?? {}),
      }),
      {},
    );
    expect(flattenedStyle).toHaveProperty('fontSize', 18);
  });
});
