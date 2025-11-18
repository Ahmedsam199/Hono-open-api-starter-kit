import { createRoute } from '@hono/zod-openapi'
import * as HttpStatusCode from 'stoker/http-status-codes'
import z from 'zod'

export const list = createRoute({
  path: '/tasks',
  method: 'get',
  responses: {
    [HttpStatusCode.OK]: {
      content: {
        'application/json': {
          schema: z.array(z.object({
            name: z.string(),
            status: z.boolean(),
          })),
        },
      },
      description: 'Tasks list',
    },
  },
})
export type ListRoute = typeof list
