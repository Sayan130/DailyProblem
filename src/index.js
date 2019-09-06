let express = require("express");
let hbs = require("hbs");
let path = require("path");
let app = express();
let port = process.port || 3000;
let db = require("./db_connection/mongoose");
let register = require("./router/register");
let qstn = require("./router/question_add");
//set all path

let statics = path.join(__dirname, "../templates/statics");
let hbs_register = path.join(__dirname, "../templates");

//Register all static and hbs
app.set("view engine", "hbs");
app.set("views", hbs_register);
app.use(express.static(statics));
app.use(express.json());


app.use(register);
app.use(qstn);

app.get("/",(req, res)=>{

    res.render("view");

})


app.listen(port, ()=>{
    console.log("Serving localhost at port number 3000");
})