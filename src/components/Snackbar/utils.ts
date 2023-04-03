import type {IconName} from 'components/Icons/types';
import type {ToastShowParams} from 'react-native-toast-message';
import Toast from 'react-native-toast-message';
import type {Type} from './types';

const defaultToastParams: ToastShowParams = {
  position: 'top',
  autoHide: true,
  topOffset: 0,
};

type Params = {
  title: string;
  type: Type;
  visibilityTime?: number;
  icon?: IconName;
};

export const showSnackbar = ({
  title,
  type,
  visibilityTime = 5000,
  icon = 'infoCircle',
}: Params) => {
  Toast.show({
    ...defaultToastParams,
    type,
    visibilityTime,
    text1: title,
    props: {
      icon,
    },
  });
};
