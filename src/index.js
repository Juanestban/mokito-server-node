const http = require('http')
const path = require('path')

// config
const { parser } = require('./config/parser')

// getter the currentPath and redirect to file html
const currentPath = path.join(__dirname, '../public/index.html')

// creating the server with nodeJS
const server = http.createServer

server((req, res) => {
  parser(currentPath, (html_parsed) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write(html_parsed)
    // missing the handle error rendering if exist error any html module js return like work the Angular or React
    res.end()
  })
}).listen(3200)
