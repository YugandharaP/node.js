var mongoose = require('mongoose');
var url= "mongodb://localhost:27017/mydb"
mongoose.connect(url, {useNewUrlParser: true});
var Schema =  mongoose.Schema;
var UserSchema = new Schema({
    id :String,
    name : String,
    city : String,
    pincode :String
});
var User = mongoose.model('User', UserSchema);
module.exports = User;




