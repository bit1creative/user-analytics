import { z } from 'zod';

const envSchema = z.object({
  NEXT_PUBLIC_USER_API_BASE_URL: z.string().url(),
});

function validateEnv() {
  const parsed = envSchema.safeParse({
    NEXT_PUBLIC_USER_API_BASE_URL: process.env.NEXT_PUBLIC_USER_API_BASE_URL,
  });

  if (!parsed.success) {
    throw new Error('Invalid environment variables');
  }

  return parsed.data;
}

export const env = validateEnv();
