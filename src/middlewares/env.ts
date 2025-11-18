import { z } from 'zod'

const EnvSchema = z.object({
  NODE_ENV: z.string().default('development'),
  PORT: z.coerce.number().default(9999),
  DATABASE_URL: z.string(),
})

// eslint-disable-next-line node/prefer-global/process
const env = EnvSchema.parse(process.env)
export default env
