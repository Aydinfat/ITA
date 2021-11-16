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
   // titel: String,
   // content: String
    messgröße: String + String,
    messbereich: Number,
    auflösung: String,
    abtastrate: Number,
    hersteller: String,
    modell: String,
    datenblatt: String,
    ansprechpartner: String,
    einsatzort: String,
    anmerkung: String
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

const upload = multer({
    dest: "/path/to/temporary/directory/to/store/uploaded/files"
    // you might also want to set some limits: https://github.com/expressjs/multer#limits
});

app.post(
    "/upload",
    upload.single("file" /* name attribute of <file> element in your form */),
    (req, res) => {
      const tempPath = req.file.path;
      const targetPath = path.join(__dirname, "./uploads/image.png");
  
      if (path.extname(req.file.originalname).toLowerCase() === ".png") {
        fs.rename(tempPath, targetPath, err => {
          if (err) return handleError(err, res);
  
          res
            .status(200)
            .contentType("text/plain")
            .end("File uploaded!");
        });
      } else {
        fs.unlink(tempPath, err => {
          if (err) return handleError(err, res);
  
          res
            .status(403)
            .contentType("text/plain")
            .end("Only .png files are allowed!");
        });
      }
    }
  );