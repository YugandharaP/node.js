/*      
    Filename - demo.js
    Description - Node.js Command Line Program Demo
*/
var greeter = function(name){
    console.log("Hi "+ name+", Welcome To Mumbai !");
}

//process.argv is an array that contains the command line arguments
var userName = null;
if(process.argv.length>2){
    userName = process.argv[2];
}
else{
    userName = "guest";
}

greeter(userName);