import env from 'react-native-config';

const isProd = env.ENVIRONMENT === 'PROD';
const isStg = env.ENVIRONMENT === 'STG';
const isDev = env.ENVIRONMENT === 'DEV';

const environment = env.ENVIRONMENT;
const graphqlEndpoint = env.GRAPHQL_ENDPOINT;

export const config = {
  environment,
  graphqlEndpoint,
  isDev,
  isProd,
  isStg,
};

export type Config = typeof config;
