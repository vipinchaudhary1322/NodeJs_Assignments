const mongoose=require('mongoose');

const playerSchema= new mongoose.Schema(
    {
        player_id: {type:Number , required: true},
        password: {type: String , required: true},
        age: {type:Number},
        country: String, 
        installed_days: Number, 
        coins: Number, 
        gems: Number, 
        game_level: Number, 
        purchaser: Boolean
        } 
        
    );

    const PlayerModel = mongoose.model("Player",playerSchema);

    module.exports = PlayerModel ;