const jwt=require('jsonwebtoken')

const authenticate = function(req, req, next) {
    //check the token in request header
    //validate this token
    
    let token = req.headers["x-auth-token"]
    if(!token) return res.send({status: false, msg: "token must be present in the request header"})
    let decodedToken = jwt.verify(token, 'functionup-thorium')

    if(!decodedToken) return res.send({status: false, msg:"token is not valid"})
    
    

    let user =  userModel.findById(req.params.userId)
    if(!user) return res.send({status: false, msg: 'No such user exists'})

    next()
}


const authorise = function(req, res, next) {
    // comapre the logged in user's id and the id in request
    
    let token = req.headers["x-auth-token"]
    if(!token) return res.send({status: false, msg: "token must be present in the request header"})
    let decodedToken = jwt.verify(token, 'functionup-thorium')

    if(!decodedToken) return res.send({status: false, msg:"token is not valid"})
    
    
    let userToBeModified = req.params.userId
   
    let userLoggedIn = decodedToken.userId

   
    if(userToBeModified != userLoggedIn) return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})

    let user =  userModel.findById(req.params.userId)
    if(!user) return res.send({status: false, msg: 'No such user exists'})
    next()
}
module.exports.authenticate=authenticate