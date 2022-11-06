
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
const mid= async function(req,res,next){
    let token = req.headers["x-auth-token"];
  if (!token) token = req.headers["x-auth-token"];
  if(!token) return res.send({status:false,msg:"please provide token"})
  let decodeToken=jwt.verify(token,"functionup-plutonium-very-very-secret-key")
  if(!decodeToken) return res.send({status:false,msg:"pls provide valid token"})
  userId=req.params.userId
  user= await userModel.findById(userId)
  if(!user) return res.send({status:false,msg:"no such user exist"})
  next()
}
module.exports.mid=mid