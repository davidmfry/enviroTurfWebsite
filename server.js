const express = require('express')
const path = require('path')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
    .then(() => {
        const server = express()



        server.get('/latestnews/:id', (req, res) => {
            const actualPage = '/latestnews/latestnews'
            const queryParams = { id: req.params.id }
            app.render(req, res, actualPage, queryParams)
        })

        server.get('/robots.txt', (req, res) => {
            res.sendFile(path.join(__dirname, '/static', 'robots.txt'))
        })

        server.get('/sitemap.xml', (req, res) => {
            res.sendFile(path.join(__dirname, '/static', 'sitemap.xml'))
        })

        server.get('*', (req, res) => {
            return handle(req, res)
        })

        server.listen(3000, (err) => {
            if (err) throw err
            console.log('> Ready on http://localhost:3000')
        })
    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    });