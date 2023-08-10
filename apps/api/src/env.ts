import zennv from 'zennv'
import { z } from 'zod'

const environments = [
  { value: 'development', label: 'Development' },
  { value: 'staging', label: 'Staging' },
  { value: 'production', label: 'Production' },
] as const

type EnvProperty = (typeof environments)[number]['value']

const ENV_VALUES: [EnvProperty, ...EnvProperty[]] = [
  environments[0].value,
  ...environments.slice(1).map((p) => p.value),
]

export const env = zennv({
  dotenv: true,
  schema: z.object({
    NODE_ENV: z.enum(ENV_VALUES).default('development'),
    PORT: z.number().default(5100),
    HOST: z.string().default('0.0.0.0'),
    // Database connection parameter
    DATABASE_URL: z.string(),
    DATABASE_DRIVER: z.enum(['postgres', 'neon']).default('postgres'),
    DATABASE_MAX_POOL: z.number().default(10),
    // S3 storage configuration
    // CloudFlare R2 endpoint: https://xxxxxxxxx.r2.cloudflarestorage.com
    // Garage S3 endpoint: http://localhost:3900
    S3_CDN_URL: z.string().default('http://localhost:3902'),
    S3_ENDPOINT: z.string().optional(),
    S3_ACCESS_KEY_ID: z.string().optional(),
    S3_ACCESS_KEY_SECRET: z.string().optional(),
    S3_BUCKET_NAME: z.string().default('fuelstack'),
    S3_REGION: z.string().default('auto'),
  }),
})
