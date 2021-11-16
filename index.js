const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(express.urlencoded({
    extended: true
}));

mongoose.connect('mongodb+srv://aydinfat:logitech@ita.eow1j.mongodb.net/ITA-DB', { useNewUrlParser: true}, { useUnifiedTopology: true});

//Datenschema
const notesSchema = {
    titel: String,
    content: String
}

const Note = mongoose.model('Note', notesSchema);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});


app.post('/', function(req, res){
    let newNote = new Note({
        titel: req.body.titel,
        content: req.body.content
    });
    newNote.save();
    res.redirect('/');
});


port = 5500;
app.listen(port, function(){
    console.log('Server läuft auf Port ' + port);
});