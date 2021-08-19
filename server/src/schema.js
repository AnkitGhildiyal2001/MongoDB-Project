const mongoose = require ("mongoose");
const mySchema = new mongoose.Schema({
    title : {type : String, required : true},
    description : {type : String, required : true},
});


const model = new mongoose.model("model", mySchema);

module.exports = model;