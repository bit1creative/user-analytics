import { env } from './env';

export const config = Object.freeze({
  USERS_API_BASE_URL: env.NEXT_PUBLIC_USER_API_BASE_URL,
});
