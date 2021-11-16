var mongoose = require("mongoose");
const express = require("express");
const app = express();
var port = 5500;

app.use(bodyParser.urlencoded({
    extended: true
}));

mongoose.connect("mongodb+srv://aydinfat:logitech@ita.eow1j.mongodb.net/myFirstDatabase", {useNewUrlParser: true}, {useUnifiedTopology: true});

const schema = {
    machine: String,
    Messwerteingabe: Number
   // Messwertausgabe: Number
}

const Note = mongoose.model("Note", schema);

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res){
    let newNote = new Note({
        titel: req.body.titel,
        content: req.body.connect
    })
    newNote.save();
    req.redirect('/');
})

app.listen(port, function(){
    console.log("Server läuft auf Port 5500");
})
