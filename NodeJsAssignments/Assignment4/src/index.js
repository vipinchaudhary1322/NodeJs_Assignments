const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here
app.get('/',(req,resp)=>{
    resp.send("Hello World 2")
})

function checkValue(num1,num2){
    if(num1 =="" || num2==""){
        return false ;
    }
    return true;
}
function validateDatatype(num1,num2){
    if(isNaN(num1)  || isNaN(num2)){
        return false;
    }
    return true;
}

app.post('/add',(req,resp)=>{
    let num1=req.body.num1;
    let num2=req.body.num2;

    if(!checkValue(num1,num2)){
        return resp.status(400).json({
            status: "failure",
            message: "Please provide datatypes"
        })
    }

    if(!validateDatatype(num1,num2)){
         return resp.status(400).json({
            status: "error",
            message: "Invalid datatypes"
         })
    }

    let sum= Number(num1) + Number(num2);

    if(num1 < -1000000 || num2 < -1000000 || sum < -1000000){
        resp.status(400).json({
            status: "error",
            message:"Underflow",
       })
    }
    if(num1 > 1000000 || num2 > 1000000 || sum > 1000000){
        resp.status(400).json({
            status: "error",
            message:"Overflow",
       })
    }
    
    resp.status(200).json({
         status: "Success",
         message:"The sum of given two numbers",
         sum: sum 
    })
})

app.post('/sub',(req,resp)=>{
    let num1=req.body.num1;
    let num2=req.body.num2;

    if(!checkValue(num1,num2)){
        return resp.status(400).json({
            status: "failure",
            message: "Please provide datatypes"
        })
    }

    if(!validateDatatype(num1,num2)){
         return resp.status(400).json({
            status: "error",
            message: "Invalid datatypes"
         })
    }

    let sub= Number(num1) - Number(num2);

    if(num1 < -1000000 || num2 < -1000000 || sub < -1000000){
        resp.status(400).json({
            status: "error",
            message:"Underflow",
       })
    }
    if(num1 > 1000000 || num2 > 1000000 || sub > 1000000){
        resp.status(400).json({
            status: "error",
            message:"Overflow",
       })
    }
    
    resp.status(200).json({
         status: "Success",
         message:"The diffrence of given two numbers",
         sub: sub 
    })
})  


app.post('/multiply',(req,resp)=>{
    let num1=req.body.num1;
    let num2=req.body.num2;

    if(!checkValue(num1,num2)){
        return resp.status(400).json({
            status: "failure",
            message: "Please provide datatypes"
        })
    }

    if(!validateDatatype(num1,num2)){
         return resp.status(400).json({
            status: "error",
            message: "Invalid datatypes"
         })
    }

    let multiply= Number(num1) * Number(num2);

    if(num1 < -1000000 || num2 < -1000000 || multiply < -1000000){
        resp.status(400).json({
            status: "error",
            message:"Underflow",
       })
    }
    if(num1 > 1000000 || num2 > 1000000 || multiply > 1000000){
        resp.status(400).json({
            status: "error",
            message:"Overflow",
       })
    }
    
    resp.status(200).json({
         status: "Success",
         message:"The product of given numbers",
         multiply: multiply
    })
})

app.post('/divide',(req,resp)=>{
    let num1=req.body.num1;
    let num2=req.body.num2;

    if(!checkValue(num1,num2)){
        return resp.status(400).json({
            status: "failure",
            message: "Please provide datatypes"
        })
    }

    if(!validateDatatype(num1,num2)){
         return resp.status(400).json({
            status: "error",
            message: "Invalid datatypes"
         })
    }
      if(Number(num2)==0){
        return resp.status(400).json({
            status: "error",
            message: "Divide by zero"
         })
      }
    let divide= Number(num1) / Number(num2);

    if(num1 < -1000000 || num2 < -1000000 || divide < -1000000){
        resp.status(400).json({
            status: "error",
            message:"Underflow",
       })
    }
    if(num1 > 1000000 || num2 > 1000000 || divide > 1000000){
        resp.status(400).json({
            status: "error",
            message:"Overflow",
       })
    }
    
    resp.status(200).json({
         status: "Success",
         message:"The division of given numbers",
         divide: divide
    })
})

app.post('*',(req,resp)=>{
    resp.status(404).json({
        status: "failed",
        message:"API NOT FOUND",
   })
   
})

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;