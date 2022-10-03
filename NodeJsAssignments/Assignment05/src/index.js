const express=require('express');
const app=express();

app.get('/welcome',(req,res)=>{
    res.setHeader('Content-Type', 'text/plain')
    res.status(200).send('Welcome to Dominos!')
});

app.get('/contact',(req,res)=>{
    res.setHeader('Content-Type', 'application/json')
    res.status(200).send(JSON.stringify({  
             phone: '18602100000', 
             email: 'guestcaredominos@jublfood.com' 
       }
       ))
});

app.get('/*',(req,res)=>{
    res.status(404).send("Server not found")
});
app.listen(8081,()=>'Server started')