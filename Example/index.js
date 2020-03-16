var express = require("express");
var app = express();

app.get("/", function(req,res){
    res.send("HELLO WORLD");
});

app.get("/test", function(req,res){
    res.send("TEST");
});

app.listen(process.env.PORT, function(){
    console.log("Server is running");
});

