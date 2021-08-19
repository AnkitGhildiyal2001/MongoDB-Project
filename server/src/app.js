const express = require("express");
require('./conn');
const hbs = require("hbs");
const path = require("path");
const model = require('./schema');
const app = express();

app.use(express.json());

const port = process.env.PORT || 3000;

const template_path = path.join(__dirname, '../templates/views');

app.set('view engine', 'hbs');
app.set('views', template_path);

app.use(express.urlencoded({
    extended: false,
}))

app.get('/', (req, res) => {
    res.render("Home");
});

app.post("/", async(req,res) => {
    try{
        const file = new model({
            title : req.body.title,
            description : req.body.description
        })

       const ok = await file.save();
       res.send("SUCCESSFULLY SAVED"); 
    }
    catch(err){
        res.send(err);
    }    
});

app.listen(port, () => {
    console.log(`listening on port ${port}`)
});

