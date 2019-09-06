let db = require("../db_connection/mongoose");
let mongoose = require("mongoose");
let validate = require("validator");
let user_schema = mongoose.Schema({
    email:{
        type : String,
        unique : true,
        required : true,
        validate : {
            
            validator : function(email){   
                if(!validate.isEmail(email)) throw new Error("Invalid Email ");
            }
        }
    },
    english:{
        type : Boolean,
    },
    math: {
        type : Boolean
    },
    programming : {
        type : Boolean,
    }

});

let userModel = mongoose.model("user", user_schema);
module.exports = userModel;