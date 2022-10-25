const config: Config = {
  API_URL: 'http://103.109.37.108:8000/v1' ?? '',
};

export default config;

type Config = {
  API_URL: string;
};
