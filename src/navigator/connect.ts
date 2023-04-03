import {useMMKVBoolean, useMMKVString} from 'react-native-mmkv';
import {KEY_ONBOARDED, KEY_USER_TOKEN} from 'storage';

const useConnect = () => {
  const [userToken] = useMMKVString(KEY_USER_TOKEN);

  const [onboarded] = useMMKVBoolean(KEY_ONBOARDED);

  const logged = !!userToken;

  return {logged, onboarded};
};

export default useConnect;
