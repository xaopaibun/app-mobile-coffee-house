const config: Config = {
  API_URL: process.env.REACT_APP_API_URL ?? '',
};

export default config;

type Config = {
  API_URL: string;
};
