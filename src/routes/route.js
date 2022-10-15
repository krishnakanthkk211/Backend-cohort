const express = require('express');
const router = express.Router();///test-you
//importing a custom module
const xyz = require('../logger/logger')
const abc = require('../util/helper')
const npm = require('../validator/formatter')
//importing external package
const underscore = require('underscore')
const lodash = require("lodash")



router.get('/test-me', function (req, res) {
    console.log("I am Korvi Krishnakanth.", xyz.myapp())
    console.log("is today's date:", abc.date())
    console.log("th month:", abc.month())
    console.log("Batch,week and day,topic:", abc.getbatch())
    console.log("trim:", npm.space())
    console.log("lowercase:", npm.changelower())
    console.log("upperccase:", npm.changeupper())

    let chunk = lodash._.chunk(["january", "February", "march", "april", "may", "june", "july", "augusht", "september", "october", "november", "december"], 4)
    console.log("after chunk:", chunk)
    let tail = lodash._.tail([[1, 3, 5, 7, 9, 11, 13, 15, 17]])
    console.log(tail)
    const union = lodash._.union([2, 4], [4, 7], [5, 3], [8, 3], [5, 1])
    console.log(union)
    const pairs = lodash._.fromPairs([["IND", "India"], ["AUS","australia"], ["SL","Srilanka"], ["ENG","England"]])
    console.log(pairs)
    // //Calling the components of a different custom module
    // console.log("Calling my function ",xyz.myFunction())
    // console.log("The value of the constant is ",xyz.myUrl)
    // //Trying to use an external package called underscore
    // let myArray = ['Akash', 'Pritesh', 'Sabiha']
    // let result = underscore.first(myArray)
    // console.log("The result of underscores examples api is : ", result)

    res.send('My first ever api!')

    //To be tried what happens if we send multiple response
    //res.send('My second api!')
});

module.exports = router;

