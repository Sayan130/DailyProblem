let mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/dailyproblem", {
    useNewUrlParser : true,
    useCreateIndex : true,
    useFindAndModify : false,
})