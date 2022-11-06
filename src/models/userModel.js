const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    firstname: String,
    lastname: String,
    mobile: {
        type: String,

        required: true
    },
    emailId: String,
    password: String,
    gender: {
        type: String,
        enum: ["male", "female", "other"]
    },
    age: Number,
    isdeleted:{
        type:Boolean,
        default:false
    }
}, { timestamps: true });

module.exports = mongoose.model('user', userSchema)
