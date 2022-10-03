const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const data = require("./InitialData");
const port = 8080;
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// your code goes here
let newId= data.length+1; 

app.get("/student", (req, res) => {
  res.send(data);
});
app.get("/student/id", (req, res) => {
  let d = req.body.id;
  let l = data.length;

  let studentid = data.find((x) => x.id === d);
  if (studentid != undefined) {
    res.send(studentid);
  } else {
    res.send(404);
  }
});

app.post('/student',(req,res)=>{
    try{

        if(!req.body.name || !req.body.currentClass  || !req.body.division){
            return res.status(400).json({
                status:"failed",
                message:"incomplete data"
            })
        }

        data.push({
           id:newId,
           name:req.body.name,
           currentClass:req.body.currentClass,
           division:req.body.division
        })
        newId++;
        res.json({
            status: "Success",
            id: newId
        })

    } 
     catch{
        res.status(400).json({
            status: "Failure",
            message: e.message
        })
     }

})

app.put("/student/:id",(req,res)=>{
    try{

        const idx= data.findIndex((obj => obj.id == req.params.id));
        if(idx== -1){
            return res.status(400).json({
                status: "Failed",
                message:"No one student with given id"
            })
        }
        if(req.body.name)
        data[idx].name=req.body.name;
        if(req.body.currentClass)
        data[idx].currentClass=req.body.currentClass;
        if(req.body.division)
        data[idx].division=req.body.division;
        res.json({
            status: "Success",
            biodta: data[idx]
        });
    }
    catch(e){
        res.status(400).json({
            status: "Failure",
            message: e.message
        })
    }
})

app.delete("/student/:id",(req,res)=>{
    try{

        const idx= data.findIndex((obj => obj.id == req.params.id));
        if(idx== -1){
            return res.status(400).json({
                status: "Failed",
                message:"data deleted"
            })
        }
        data.splice(idx,1);
        res.json({
            status: "Success",
            biodta: data[idx]
        });
    }
    catch(e){
        res.status(400).json({
            status: "Failure",
            message: e.message
        })
    }
})
app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
