//jshint esversion:6
exports.getdate = getdate;

function getdate(){

var today = new Date();
    
var options = {
    weekday : "long",
    day : "numeric",
    month : "long"
 };
 

var d = today.toLocaleDateString("en-US",options);
return d;

}