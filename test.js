var http = require('http');
var date = require('./myFirstModule');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(`Hello world: ${date.latestDate()} ${req.url}`);
}).listen(8080);