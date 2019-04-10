var mongooes = require('mongoose');
var url = "mongodb://localhost:27017/mydb"
mongooes.connect(url, (err,connection)=>
{
    if(err) return "database connection error: "+err;
    console.log("connected");
});