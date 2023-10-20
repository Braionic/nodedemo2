var http = require('http')
var fs = require('fs');
var url = require('url')

http.createServer(
    (req, res)=>{
        var q = req.url;
        var qlink = url.parse(q, true);
        var mypathname = "."+qlink.pathname;
        fs.readFile(mypathname, (err, data)=>{
            if(err){
                res.writeHead(404, {'Content-Type': 'text/html'});
                return res.end("not found")
            }
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data);
            return res.end();
        })
    }
).listen(8080)