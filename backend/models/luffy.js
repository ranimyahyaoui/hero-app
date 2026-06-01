const mongoose = require('mongoose');//nimporti mongoose
const Luffy=mongoose.model('Luffy',{
    img:{
        type:String//bch nsajlou b3d juste ism fichier
    },
    title:{
        type:String
    },
    power:{
        type:Number
    }
});
module.exports=Luffy;//nexporti model 3l5tr 3ndi varaible bch njm nst3mlha fi blasa o5ra