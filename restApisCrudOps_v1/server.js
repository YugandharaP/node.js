debugger;
var app = require('./app');
debugger;
var port = 8080;
var server = app.listen(port,function(err,connection){
    if(err) return "not connecting: "+err;
    console.log('Express server listening on port ' + port);
});

