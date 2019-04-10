var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/mydb';
MongoClient.connect(url,{ useNewUrlParser: true },function(err,db){
     if (err) {
        throw err;       
     }
         console.log("Database created!");
   db.close();
});

//Important: In MongoDB, a database is not created until it gets content!
//{useUrlParser:true} - If you are using version >= 3.1.0 change you mongo connection file