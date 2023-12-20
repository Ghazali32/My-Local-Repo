const express = require("express");

const app = express();

function square(n)
{
    return n*n;
}

app.get('/square',(req,res) =>{
    const n = req.query.n;
    const ans = square(n);

    res.send(ans.toString());
});

app.listen(3000, ()=>{
    console.log('BhaiJann Server chal rha hai 3000 pr!!!');
})