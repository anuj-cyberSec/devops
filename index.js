const express = require('express');

const app = express();

app.get('/api/hello', (req,res) =>{
    res.send("hello, world");
});


app.get('api/data', (req,res) => {
    res.json({
        message: "this is sample data"
    });
})

const port1 = 3000;
const port2 = 4000;

app.listen(port1,() =>{
    console.log(`listening on port ${port1}`);

})

app.listen(port2,() =>{
    console.log(`listening on port ${port2}`);
})