const mongoose=require('mongoose')
const newProductSchema=new mongoose.Schema({
    product_name:String,
    category:{
        type:String,
        require:true
    },
    price:Number
})
module.exports=mongoose.model("newProduct",newProductSchema)