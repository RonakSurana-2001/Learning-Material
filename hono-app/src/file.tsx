import { Hono } from 'hono'

const app1 = new Hono()

const View = () => {
    return (
        <html>
            <body>
                <h1>Hello World!</h1>
            </body>
        </html>
    )
}

app1.get('/page', (c) => {
    return c.html(<View />)
})



export default app1