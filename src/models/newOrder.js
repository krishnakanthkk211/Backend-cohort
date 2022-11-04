const mongoose=require('mongoose');
const ObjectId=mongoose.Schema.Types.ObjectId;
const newOrderSchema=new mongoose.Schema({
    userId:{
        type:ObjectId,
        ref:"newUser"
    },
    productId:{
    type:ObjectId,
    ref:"newProduct"},
    amount:Number,
    isfreeAppuser:{
        type:Boolean,
        default:false
    },
    date:String

},{timestamps:true})
module.exports=mongoose.model('newOrder',newOrderSchema)