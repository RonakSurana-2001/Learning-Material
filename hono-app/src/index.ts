import { Hono } from 'hono'
import app1 from "./file"
const app = new Hono()



app.get('/',tdMiddleware, async(c) => {
  console.log(await c.req.json());
  console.log(c.body)
  return c.text('Hello Hono!')
})

app.route('/static/', app1)



async function tdMiddleware(c:any, next:any){
  const start = Date.now()
  await next()
  const end = Date.now()
  c.res.headers.set('X-Response-Time', `${end - start}`)
}


export default app
