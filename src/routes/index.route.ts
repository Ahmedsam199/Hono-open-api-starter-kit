import { createRoute, z } from '@hono/zod-openapi'
import * as HttpStatusCode from 'stoker/http-status-codes'
import { createRouter } from '../lib/create-app'

const router = createRouter()
  .openapi(
    createRoute({
      method: 'get',
      path: '/',
      responses: {
        [HttpStatusCode.OK]: {
          content: {
            'application/json': {
              schema: z.object({
                message: z.string(),
              }),
            },
          },
          description: 'Test API',
        },
      },
    }),
    (c) => {
      return c.json({
        message: 'Test API',
      }, HttpStatusCode.OK)
    },
  )

export default router
