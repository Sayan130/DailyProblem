let question = require("../models/question");
let user = require("../models/user");
let nm = require("nodemailer"); 
let path = require("path")
let env = path.join(__dirname,"../../.env");
require("dotenv").config({path:env});


let transporter = nm.createTransport({
    service : "gmail",
    auth : {
        user : process.env.user,
        pass : process.env.pass
    }
});


 setInterval(()=>{

    getData().then(async(data)=>{

        let mobj = await getQuestion({math : true});
        setMail(mobj, "Math", data.mt.question);   
    
        mobj = await getQuestion({english : true});
        setMail(mobj, "English", data.eng.question);   
    
        mobj = await getQuestion({programming : true});
        setMail(mobj, "Programming", data.pc.question);   
        
    })
    
    
 }, 10000);

async function getData(){
    try{
        
        let e_c = await question.findOne({cat : "english"}).countDocuments();
        let m_c = await question.findOne({cat : "math"}).countDocuments();
        let p_c = await question.findOne({cat : "programming"}).countDocuments();
        
        e_c = Math.floor(Math.random(e_c));
        m_c = Math.floor(Math.random(m_c));
        p_c = Math.floor(Math.random(p_c));
        
        let eng = await question.findOne({cat:"english"}, {_id : 0, cat : 0}).skip(e_c);
        let mt  = await question.findOne({cat:"math"}, {_id : 0,  cat : 0}).skip(e_c);
        let pc  = await question.findOne({cat:"programming"}, {_id : 0, cat : 0}).skip(e_c);

        return {eng, mt, pc};
        
    }
    catch(err){
        console.log(err);
    }
}
async function getQuestion(body){
    let m = await user.find(body, {_id : 0});
    return m;
}


function setMail(mobj, cat, question){
    mailId = "";

    if(!mobj.length == 0){

        for(let k = 0; k < mobj.length; k++)
            mailId += mobj[k].email+",";
        sendEmail(mailId, cat, JSON.stringify(question));
    }
}


function sendEmail(value, cat, question){

    let mailOption = {
        from : user,
        to : value,
        subject : "Hi This is your daily"+` ${cat} `+"problem",
        text : question
    };
    
    transporter.sendMail(mailOption, (err, info)=>{

        if(err)
            console.log(err);
        
        else console.log(info);
    });
}