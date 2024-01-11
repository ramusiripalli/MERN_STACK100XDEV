const express = require('express');

const app = express();
app.use(express.json());

app.post('/health-checkup', function(req,res){
    const kidneys = req.body.kidneys;
    if(!kidneys)
    {
        res.json({
            msg:"Wrong inputs"
        })
    }
    else{
        const kidneyLength = kidneys.length;

        res.send("Your kidney length is "+ kidneyLength);
    }
   
});

//global catch 
app.use(function(err,req,res,next){
    res.json({
        msg:"Sorry somethingis up with the server"
    })
})

app.listen(3000,()=>{
    console.log("app is listening on port 3000")
});