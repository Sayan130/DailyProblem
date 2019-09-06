let mongoose = require("mongoose");
let qstn = require("../models/question");
let express = require("express");
let router = express.Router();


router.post("/addquestion", async(req, res)=>{

    try{

        let q = new qstn(req.body);
        await q.save();
        res.send({sucess : "true"});

    }catch(err){
        
        res.send({sucess: "Invalid Credentials"});
    }
})


module.exports = router;