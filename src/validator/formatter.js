let str="  Korvi Krishnakanth"
let trim=function(){
        console.log(str.trim())
        return " "
}
var str1="KoRvI KriShnAkAnTh"
let changeToLowercase=function(){
      let lower=console.log(str1.toLowerCase())
      return " "
    }
var str2="KoRvI KriShnAkAnTh"
let changeToUppercase=function(){
        let upper=console.log(str2.toUpperCase())
        return " "
    }

module.exports.space=trim
module.exports.changelower=changeToLowercase
module.exports.changeupper=changeToUppercase