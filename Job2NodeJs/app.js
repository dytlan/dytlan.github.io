const express = require('express');

const app = express();

// app.use('/',(req,res,next)=>{
//     console.log('In Middleware');
//     next();
// })

app.use('/users',(req,res,next)=>{
    console.log('In users path');
    res.send('<h1> Hello from "/users" page </h1>')
});

app.use('/',(req,res,next)=>{
    console.log('In Middleware');
    res.send('<h1> Hello from "/" Page');
})



app.listen(3000);