const mongoose=require('mongoose');

const offerSchema= new mongoose.Schema({
    offer_id: {type: String,required: true}, 
    offer_title: {type: String,required: true} , 
    offer_description: String, 
    offer_image: String, 
    offer_sort_order: Number,
    content: Array, 
    schedule: Object, 
    target: String, 
    pricing: Array 
    }
    )

    const OfferModel = mongoose.model("Offer",offerSchema);

    module.exports = OfferModel ;