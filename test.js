var http = require('http');
var uc = require('upper-case');
var date = require('./myFirstModule');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(`${uc.upperCase('Hello world')}: ${date.latestDate()} ${req.url}`);
  res.end()
}).listen(8080);