let http = require('http')
let url = require('url')
let fs = require('fs')
let port = process.argv[2]
let server = http.createServer(function(req, rep) {
  let parsedUrl = url.parse(req.url)
  let path = parsedUrl.pathname
  rep.statusCode = 200
  rep.setHeader("Content-Type", "text/html")
  if (path === '/') {
    rep.write(fs.readFileSync('./index.html', 'utf8'))
  } else if (path === '/main.js') {
    rep.setHeader("Content-Type", "application/javascript;charset=utf-8")
    rep.write(fs.readFileSync('./main.js', 'utf8'))
  } else if (path === '/sayhello') {
    rep.setHeader("Content-Type", "application/json;charset=utf-8")
    rep.write('{"name":"fx"}')
  }
  else {
    rep.statusCode = 404
    rep.write('404')
  }
  rep.end()

})
server.listen(8888)

