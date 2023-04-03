import type {FC} from 'react';
import {memo} from 'react';
import React from 'react';
import useLogic from './logic';
import {Container, Pressable, Title, Loader} from './styles';
import type {Props} from './types';

const Button: FC<Props> = ({
  loading: initialLoading,
  onPress,
  style,
  testID,
  title,
  rounded = false,
  withShadow = false,
  enabled = true,
  variant = 'primary',
}) => {
  const {handlePress, loading} = useLogic({
    loading: initialLoading,
    onPress,
    enabled,
  });

  return (
    <Container
      style={style}
      variant={variant}
      enabled={enabled}
      withShadow={withShadow}
      rounded={rounded}>
      <Pressable
        enabled={!!(!loading && !!onPress && enabled)}
        onPress={handlePress}
        rounded={rounded}
        testID={testID}>
        {loading ? (
          <Loader testID="loader" />
        ) : (
          <Title buttonVariant={variant}>{title}</Title>
        )}
      </Pressable>
    </Container>
  );
};

export default memo(Button);
