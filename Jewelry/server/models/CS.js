const mongoose =require('mongoose');

const CsSchema= new mongoose.Schema({

    name:{
        type:String,
        
    }

})

module.exports=mongoose.model('Category,',CsSchema)