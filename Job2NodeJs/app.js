const path  = require('path');

const express = require('express');

const app = express();

// app.use('/',(req,res,next)=>{
//     console.log('In Middleware');
//     next();
// })

app.use(express.static(path.join(__dirname,'public')));

app.get('/users',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'views','users.html'))
});

app.get('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'views','main.html'))
})



app.listen(3000);