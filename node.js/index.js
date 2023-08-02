var http = require('http')

http.createServer(function (req, res) {
  res.write('node web server');
  res.end();
}).listen(8080);