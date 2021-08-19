const express = require("express");
require("./conn");
const hbs = require("hbs");
const path = require("path");
const pracmodel = require("./schema");
const app = express();

app.use(express.json());

const port = process.env.PORT || 3000;

const template_path = path.join(__dirname, "../templates/views");

app.set("view engine", "hbs");
app.set("views", template_path);

app.use(express.urlencoded({
    extended : false
}));

app.get("/", (req,res) =>{
    res.render("Home");
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

