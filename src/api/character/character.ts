/**
 * Generated by orval
 * Do not edit manually.
 */
import type {
  CharacterList,
  CharacterGetParams,
} from '../theRickAndMorty.schemas';
import {
  customAxiosInstance,
  ErrorType,
  BodyType,
} from '../../helpers/axiosService';

export type AwaitedInput<T> = PromiseLike<T> | T;

export type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

/**
 * @summary List of characters
 */
export const characterGet = (
  params?: CharacterGetParams,
  signal?: AbortSignal,
) => {
  return customAxiosInstance<CharacterList>({
    url: `/character`,
    method: 'get',
    signal,
    params,
  });
};
export type CharacterGetResult = NonNullable<
  Awaited<ReturnType<typeof characterGet>>
>;
