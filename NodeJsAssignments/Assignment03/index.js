const fs=require('fs');
const http=require('http');

const content='<h1> Hello World </h1><p> This is Vipin Chaudhary </p>';



fs.writeFile('index.html',content,(err)=>{

    if(!err) console.log('saved')
})
http.createServer((req,res)=>{
    fs.readFile('index.html',(err,data)=>{
        res.writeHead(200,{"Content-type":'text/html'});
        res.end(data);
    })

}).listen((5000),()=>console.log('server started'))