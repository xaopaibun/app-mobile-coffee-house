import { AxiosPromise } from 'axios';

export interface AuthService {
  /**
   *
   * @param data
   */
  signIn(data: {}): AxiosPromise<{}>;

  /**
   *
   * @param data
   */
  signUp(data: {}): AxiosPromise<{}>;
}

export interface RestfulApiService {
  /**
   * Find all data (potentially matching a query)
   * @param params
   */
  findAll?(params: {}): AxiosPromise<{}>;

  /**
   * Get a single data entry by its unique identifier
   * @param id
   * @param params
   */
  getOne?(id: string | number, params: {}): AxiosPromise<{}>;

  /**
   * Create new data
   * @param data
   */
  create?(data: {}): AxiosPromise<{}>;

  /**
   * Update an existing data entry by completely replacing it
   * @param id
   * @param data
   */
  update?(id: string | number, data: {}): AxiosPromise<{}>;

  /**
   * Update one or more data entries by merging with the new data
   * @param id
   * @param data
   */
  patch?(id: string | number, data: {}): AxiosPromise<{}>;

  /**
   * Remove one or more existing data entries
   * @param id
   * @param params
   */
  remove?(id: string | number | null, params: {}): AxiosPromise<{}>;
}
