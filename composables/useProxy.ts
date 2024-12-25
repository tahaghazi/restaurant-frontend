import { type NitroFetchRequest } from 'nitropack';

export default async <T = unknown, R extends NitroFetchRequest = NitroFetchRequest>(
  request: Parameters<typeof $fetch<T, R>>[0],
  options?: Partial<Parameters<typeof $fetch<T, R>>[1]>
): ReturnType<typeof $fetch> => {
  const { status, token, } = useAuth();
  const config = useRuntimeConfig()
  console.log(status.value , token.value ? `${token.value}` : '')
  return $fetch<T, R>("/api-proxy" + request as R, {
    ...options,
    headers: {
      Authorization: status.value != 'unauthenticated' && token.value ? `${token.value}` : '',
      ...options?.headers
    }
  });
};