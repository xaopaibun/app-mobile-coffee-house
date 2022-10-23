const config: Config = {
  API_URL: 'http://localhost:8000/v1' ?? '',
};

export default config;

type Config = {
  API_URL: string;
};
