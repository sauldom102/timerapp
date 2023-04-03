declare module 'react-native-config' {
  interface Env {
    ENVIRONMENT: 'DEV' | 'STG' | 'PROD';
    ANDROID_KEY_PASSWORD: string;
    ANDROID_STORE_PASSWORD: string;
    GRAPHQL_ENDPOINT: string;
  }

  const BuildConfig: Env;

  export default BuildConfig;
}
