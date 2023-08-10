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
    DATABASE_URL: z.string(),
    DATABASE_DRIVER: z.enum(['postgres', 'neon']).default('postgres'),
    DATABASE_MAX_POOL: z.number().default(10),
  }),
})
