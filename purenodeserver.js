const http = require('http');
function handler(req, res){
    const parsedUrl = url.parse(req.url, true);
    if (parsedUrl.pathname === '/'){
    res.writeHead(200, {'Content-type':'text/plain'});
res.write('Hello, I am a webserver!');
res.end();}
else {res.writeHead(404,{'Content-type':'text/plain'} );res.end(); }

}
const server = http.createServer();
server.listen(3000);