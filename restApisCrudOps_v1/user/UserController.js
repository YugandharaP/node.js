//express: It is designed for building web applications and APIs
var express = require('express');

var router = express.Router();

//The body-parser module is just a middleware we use to parse our data sent through HTTP requests
var bodyParser = require('body-parser')

//
router.use(bodyParser.urlencoded({extended:true}));
router.use(bodyParser.json());

var User = require('./User');

//CREATE NEW USER
router.post('/',function(req,resp){
    User.create(
        {
            name : req.body.name,
            email : req.body.email,
            password : req.body.password
        },
        function(err,user){
            if(err) return resp.status(500).send("There was a problem adding the information to the database.");
             resp.status(201).send("successfull: "+user);
        }
    );
});

//GET ALL USER DATA
router.get('/',function(req,resp){
    console.log('getall users')
    User.find({},function(err,listOfUsers){
        if(err) return resp.status(500).send("No users found in database");
        if (listOfUsers.length==0) return resp.status(404).send("No users found.");
        resp.status(200).send("Users list: \n"+listOfUsers);
    });
});

//GET SINGLE USER DATA
router.get('/:id',function(req,resp){
    console.log('get single user')
    User.findById(req.params.id,function(err,user){
        if(err) return resp.status(500).send("Invalid user id");
        if (!user) return resp.status(404).send("No user found.");
        resp.status(200).send("User data: \n"+user);
    });
});

//DELETE SINGLE USER DATA
router.delete('/:id',function(req,resp){
    console.log('delete user');
    User.findByIdAndRemove(req.params.id,function(err,user){
        if(err) return resp.status(500).send("Can not find user!");
        if (!user) return resp.status(404).send("No user found.");
        resp.status(200).send("User: "+user.name +" was deleted.");
    });
});

//UPDATE SINGLE USER DATA
router.put('/:id',function(req,resp){
    User.findByIdAndUpdate(req.params.id,req.body,{new:true},function(err,newuser){
        if(err) return resp.status(500).send("Something went wrong");
        if(!newuser) return resp.status(404).send("User not found");
        resp.status(200).send("User data updated : "+newuser);
    });
});

module.exports = router;