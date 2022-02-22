const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const data = require('./api-json/data.json')

app.prepare().then(() => {
const server = express()
server.get("/api", (req, res) => {
    console.log("foo")
    return res.json(data)
})

server.get('*', (req, res) => {
    return handle(req, res)
})

server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Express ready on http://localhost:3000/api')
})

}).catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
})
