import type { AppBindings } from './types'
import { OpenAPIHono } from '@hono/zod-openapi'

import { config } from 'dotenv'

import { expand } from 'dotenv-expand'
import { defaultHook } from 'stoker/openapi'
import { pinoLogger } from '../middlewares/pino-logger'

export function createRouter() {
  return new OpenAPIHono<AppBindings>({
    strict: false,
    defaultHook,
  })
}
export default function createApp() {
  expand(config())
  const app = createRouter()
  app.use(pinoLogger())
  return app
}
