//jshint esversion:6

const express = require("express");
const bodyparser = require("body-parser");
const date  = require(__dirname + "/date.js");


const app = express();
var items = [];
var worklist = [];

app.set('view engine', 'ejs');

app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){

   let d = date.getdate();
     
    res.render("list",{kd:d,newitem:items});
});

app.get("/work",function(req,res){
    res.render("list",{kd:"workList",newitem:worklist});
})

app.post("/",function(req,res){

   var item = req.body.newItem;

   console.log(req.body);

   if(req.body.list == "workList"){
    worklist.push(item);
    res.redirect("/work")
   }
   else{
    items.push(item);
   res.redirect("/");
   
   }
})

 
app.listen(3000,function(){
    console.log("Successfull");
})