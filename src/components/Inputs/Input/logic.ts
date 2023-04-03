import {useCallback, useMemo, useState} from 'react';
import type {TextInputProps} from 'react-native';
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import theme from 'theme';
import {colors} from 'theme/colors';
import {LEFT_ICONS, NUMBER_PATTERN, RIGHT_ICONS} from './constants';
import type {LogicParams} from './types';

const useLogic = ({
  type,
  nextFieldRef,
  onBlur,
  onSubmitEditing,
  placeholder,
  value,
  onChangeText,
  hideCharacterLenght,
  multiline,
  onPress,
  disabled,
  maxLength,
  minValue,
  maxValue,
  error,
  onFocus,
}: LogicParams) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [focused, setFocused] = useState(false);

  const [val, setVal] = useState(value);

  const handleChangeText = useCallback(
    (text: string) => {
      let newText = text;
      if (type === 'number') {
        if (newText === '') {
          newText = minValue !== undefined ? `${minValue}` : '';
        } else {
          newText = newText.replace(NUMBER_PATTERN, '');
          if (minValue !== undefined) {
            newText = `${Math.max(minValue, parseFloat(newText))}`;
          }

          if (maxValue !== undefined) {
            newText = `${Math.min(maxValue, parseFloat(newText))}`;
          }
        }
      }
      onChangeText?.(newText);
      setVal(newText);
    },
    [onChangeText, type, minValue, maxValue],
  );

  const handlePasswordVisibility = useCallback(
    () => setIsPasswordVisible(s => !s),
    [setIsPasswordVisible],
  );

  const handleFocus = useCallback(
    e => {
      onFocus?.(e);
      setFocused(true);
    },
    [onFocus],
  );

  const handleBlur = useCallback(() => {
    setFocused(false);
    if (onBlur) {
      onBlur();
    }
  }, [onBlur]);

  const handleSubmitEditing = useCallback(
    event => {
      if (nextFieldRef?.current) {
        nextFieldRef.current.focus();
      } else if (onSubmitEditing) {
        onSubmitEditing(event);
      }
    },
    [nextFieldRef, onSubmitEditing],
  );

  const finalValue = value !== undefined ? value : val;

  const opacity = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(
    () => ({
      opacity: opacity.value,
    }),
    [],
  );

  const handlePressIn = useCallback(() => {
    if (onPress) {
      onPress();
      opacity.value = 0.5;
    }
  }, [onPress, opacity]);

  const handlePressOut = useCallback(() => {
    if (onPress) {
      opacity.value = withTiming(1, {
        duration: 250,
      });
    }
  }, [onPress, opacity]);

  const hasNextField = !!nextFieldRef?.current;

  const inputExtraProps: Partial<TextInputProps> = useMemo(
    () => ({
      ...(type === 'email' && {
        autoCapitalize: 'none',
        keyboardType: 'email-address',
        autoCorrect: false,
      }),
      ...(type === 'password' && {
        secureTextEntry: !isPasswordVisible,
        textContentType: 'oneTimeCode',
      }),
      ...(type === 'number' && {
        keyboardType: 'number-pad',
        returnKeyType: 'done',
      }),
      ...(type === 'username' && {
        autoCapitalize: 'none',
        autoCorrect: false,
      }),
      ...(type === 'select' && {
        editable: false,
        onPressIn: handlePressIn,
        onPressOut: handlePressOut,
      }),
      ...(type === 'date' && {
        editable: false,
      }),
      ...(hasNextField && {
        returnKeyType: 'next',
      }),
    }),
    [type, isPasswordVisible, hasNextField, handlePressIn, handlePressOut],
  );

  const characters = useMemo(() => (value ? value.length : '0'), [value]);

  const pointerEvents = disabled ? ('none' as const) : ('auto' as const);

  const showCharacterLenghtBottom = multiline && !hideCharacterLenght;

  const valueLength = value?.length;
  const charactersLengthText = useMemo(() => {
    const length = valueLength ?? 0;
    const max = maxLength ?? 0;

    return `${length} / ${max} characters`;
  }, [valueLength, maxLength]);

  const hasError = !!error;
  const filled = !!finalValue;
  const iconColor = useMemo(() => {
    if (focused) {
      return theme.colors.primary[500];
    }
    if (disabled) {
      return colors.greyscale[900];
    }
    if (hasError) {
      return colors.alertsAndStatus.error;
    }
    if (filled) {
      return colors.greyscale[900];
    }
    return colors.greyscale[500];
  }, [focused, filled, disabled, hasError]);

  const rightIcon = type ? RIGHT_ICONS[type] : undefined;
  const leftIcon = type ? LEFT_ICONS[type] : undefined;

  return {
    focused,
    handleBlur,
    handlePasswordVisibility,
    handleSubmitEditing,
    inputExtraProps,
    isPasswordVisible,
    handleFocus,
    placeholderValue: placeholder,
    characters,
    charactersLengthText,
    showCharacterLenghtBottom,
    value: finalValue,
    handleChangeText,
    pointerEvents,
    animatedStyle,
    rightIcon,
    leftIcon,
    iconColor,
  };
};

export default useLogic;
