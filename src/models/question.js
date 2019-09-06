let db = require("../db_connection/mongoose");
let mongoose = require("mongoose");

let schema = mongoose.Schema({
    question : {
        type : String,
    },
    cat : {
        type : String,
        validate : {
            validator : function(cat){
            
                if(!(cat === 'math' || cat === 'english' || cat === 'programming'))
                    throw  new Error("Unknown category");
            }
        }
    }
    
});
let qstn = mongoose.model("question", schema) ;
module.exports = qstn;