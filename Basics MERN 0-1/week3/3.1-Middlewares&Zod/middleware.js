const express = require('express');

const app = express();

app.get('/health-checkup', function(req,res,next){
    console.log("H1 from req1");
    next();
}, function(req,res) {
    console.log("hi from req2");
    res.send("Hi there");
});

app.listen(3000);