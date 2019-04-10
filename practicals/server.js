var http = require('http');
var port = 9090
var server = http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/plain'});
    res.end('Welcome to the Mumbai \n'+ res.statusMessage);
});

server.listen(port,()=>{
    console.log('Server listening port on :'+port);
})
