import React from 'react';
import {fireEvent, render} from 'jest/test_utils';
import Button from '../';

describe('Button', () => {
  it('should render title', () => {
    const {getByText} = render(<Button title="Press me" />);
    expect(getByText('Press me')).toBeTruthy();
  });

  it('should call onPress when pressed', () => {
    const onPress = jest.fn();
    const {getByTestId} = render(
      <Button title="Press me" onPress={onPress} testID="button" />,
    );
    fireEvent.press(getByTestId('button'));
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it('should not call onPress when disabled', () => {
    const onPress = jest.fn();
    const {getByTestId} = render(
      <Button
        title="Press me"
        onPress={onPress}
        enabled={false}
        testID="button"
      />,
    );
    fireEvent.press(getByTestId('button'));
    expect(onPress).not.toHaveBeenCalled();
  });

  it('should show loader when loading is true', () => {
    const {getByTestId} = render(
      <Button title="Press me" loading testID="button" />,
    );
    expect(getByTestId('loader')).toBeDefined();
  });
});
