import { createRouter } from '../../lib/create-app'
import * as handlers from './tasks.handlers'
import * as route from './tasks.routes'

const router = createRouter()
  .openapi(route.list, handlers.list)
export default router
