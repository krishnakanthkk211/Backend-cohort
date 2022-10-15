const today=new Date()
let printDate=function(){
    let date=today.getDate()
    console.log(date)
    return " "
    
}
let printMonth=function(){
   let month=today.getMonth()+1
   console.log(month)
   return " "
    
}
let getBatchinfo=function(){
    console.log("Lithium,w3d5,topic for the today is nodejs module system")
    return " "
    
}
module.exports.date=printDate
module.exports.month=printMonth
module.exports.getbatch=getBatchinfo