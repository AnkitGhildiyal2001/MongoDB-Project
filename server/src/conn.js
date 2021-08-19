const mongoose = require ("mongoose");

let Connection_URL = "mongodb+srv://Ankit_132:Ankit1234@cluster0.2z1fc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(Connection_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connection Successful");
}).catch((err) => {
    console.log(err);
})

