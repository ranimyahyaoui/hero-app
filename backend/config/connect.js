const mongoose = require('mongoose');//nimportiw mongoose
mongoose.connect('mongodb://127.0.0.1:27017/hero_app')//nconeeecti
    .then(()=>{
        console.log('connected to database'); //bch n3ref saret connection wala le  
    })
    .catch((err)=>{
        console.log(err);
    });
//ma3anach variable bch nexportaha donc mn3mlch module.exports bch n3ml require li code kaml 3ibara code bch nktbou kol 