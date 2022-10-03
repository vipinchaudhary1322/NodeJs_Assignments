const express=require('express');
const Bodyparser=require('body-parser');
const Player=require('../model/player');
const Offer=require('../model/offer');
const router= express.Router();

router.get('/', async(req,res)=>{
    try{

    
    const {page = 1, records=10, attribute= "offer_title", query = "Diwali"}=req.query;
    const offerdate= await Offer.find();
    res.status(200).json
}

})

module.exports=router;