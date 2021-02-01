const express = require('express')
const app = express();
const cors = require('cors');
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://dbUser:dbUserPassword@cluster0.lifz9.mongodb.net/wospCounter")

// app.use("/", require("./routes/not/eRoute"));

app.listen(3001, function() {
    console.log("server is running on port 3001");
})

let val;

app.post('/create', function (req, res) {
    console.log(req.body.counterValue)
    val = req.body.counterValue;
    res.send(200);
}); 


app.get('/value', function (req, res) {
    res.send({
        value: val || 0
    });
}); 