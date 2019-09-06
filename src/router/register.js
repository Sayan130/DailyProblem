let express = require("express");
let router = express.Router();
let register = require("../models/user");

router.post("/register", async(req, res)=>{

        try{
            
            let user = new register(req.body);
            await user.save();
            
            res.send({success : true});
        }
        catch(e){
            console.log(e);
            res.send({success : false});
        }
})

module.exports = router;