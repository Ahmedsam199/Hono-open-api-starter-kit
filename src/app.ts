import { notFound, onError } from 'stoker/middlewares'
import configureOpenAPI from './lib/configure-openAPI'
import createApp from './lib/create-app'
import index from './routes/index.route'
import tasks from './routes/tasks/tasks.index'

const app = createApp()
const routes = [
  index,
  tasks,
]
configureOpenAPI(app)
routes.forEach((route) => {
  app.route('/', route)
})

app.notFound(notFound)
app.onError(onError)

export default app
