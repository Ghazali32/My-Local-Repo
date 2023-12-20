const express = require("express");

const app = express();
app.use(express.json());

app.post('/health-checkUp', (req,res) =>{
    const kidneys = req.body.kidneys;
    const length = kidneys.length;

    res.send('your lenght is : '+length);
});

app.use((err,req,res,next) => {
    res.json({
        msg : "Sorry something is up  with our server"
    });
})
//global Catches : if the user gave us an undesired input than this will execute at the end, this will make our server more secure after crashing and the end user would not be able to see our logs
app.listen(3000, ()=>{
    console.log("Server Active");
})