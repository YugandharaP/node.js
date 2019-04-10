var mongoose = require('mongoose');

//creating schema:table
var UserSchema = mongoose.Schema({
    name : String,
    email : String,
    password : String
});

//.model() function makes a copy of schema
mongoose.model('User',UserSchema);

//return actual object when require call
module.exports = mongoose.model('User');
