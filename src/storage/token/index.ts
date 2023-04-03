import storage from 'storage/base';

export const KEY_USER_TOKEN = 'user-token';

export const setToken = (data: string) => {
  storage.set(KEY_USER_TOKEN, data);
};

export const getToken = () => storage.getString(KEY_USER_TOKEN);

export const clearToken = () => {
  storage.delete(KEY_USER_TOKEN);
};
