const express=require('express');
const offerRoutes=require('./routes/offer');
const app=express();

app.use("/offers", offerRoutes)


app.listen(3000,()=>"Server started")