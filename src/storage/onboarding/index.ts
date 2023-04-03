import storage from 'storage/base';

export const KEY_ONBOARDED = 'onboarding-passed';

export const setOnboarded = (onboarded = true) => {
  storage.set(KEY_ONBOARDED, onboarded);
};

export const getOnboarded = () => storage.getBoolean(KEY_ONBOARDED);
