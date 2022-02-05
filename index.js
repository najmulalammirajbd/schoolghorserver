const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config()


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.swu9d.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
console.log('uri', uri);

const app = express()

app.use(bodyParser.json());
app.use(cors());

const port = 5000;

app.get('/', (req, res) => {
    res.send('hello world');
})

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    console.log('err khaise mongodb connection', err);
    const BDSCHOOLGHOR = client.db("SCHOOLGHOR").collection("Regi");

    app.post('/regi', (req, res) => {
        const products = req.body;
        BDSCHOOLGHOR.insertOne(regi)
            .then(result => {
                res.send(result)
            })
    })

});


app.listen(process.env.PORT || port)