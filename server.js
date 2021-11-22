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
    hersteller: String,
    modell: String,
    datenblatt: String,
    ansprechpartner: String,
    einsatzort: String,
    anmerkung: String,
    messgröße: String,
    messbereich: Number,
    auflösung: String,
    abtastrate: Number,
    von: Number,
    bis: Number,
    linearität: String

}

const Note = mongoose.model('Note', notesSchema);

app.get('/eintragen.html', function(req, res){
    res.sendFile(__dirname + '/eintragen.html');
});

app.post('/', function(req, res){
    
    let newNote = new Note({
        messgröße: req.body.messgröße,
        messbereich: req.body.messbereich,
        auflösung: req.body.auflösung,
        abtastrate: req.body.abtastrate,
        hersteller: req.body.hersteller,
        modell: req.body.modell,
        datenblatt: req.body.datenblatt,
        ansprechpartner: req.body.ansprechpatner,
        einsatzort: req.body.einsatzort,
        anmerkung: req.body.anmerkung
    });
    newNote.save();
    res.redirect('./eintragen.html');
});


port = 5501;
app.listen(port, function(){
    console.log('Server läuft auf Port ' + port);
});