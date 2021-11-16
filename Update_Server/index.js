const { request, response } = require('express');
const express = require('express');
const app = express();
const Datastore = require('nedb');
app.listen(3000, () => console.log('Bereit auf Port 3000'));
app.use(express.static('public'));
app.use(express.json( { limit: '30mb'}));

const database = new Datastore('database.db');
database.loadDatabase();

app.get('/api', (request, response) => {
    response.json({ test: 123}); 
});

app.post('/api', (request, response) => {
    console.log('Anfrage ankommen!');
    console.log(request.body);
    const data = request.body;
    const timestamp = Data.now();
    data.timestamp = timestamp;
    database.insert(data);
    response.json({
        status: 'fertig',
        name: name,
        timestamp: timestamp
    });
});