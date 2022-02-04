const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config()


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.tfgke.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const app = express()

app.use(bodyParser.json());
app.use(cors());

const port = 5000



const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const BDSCHOOLGHOR = client.db("SCHOOLGHOR").collection("Regi");

    app.post('/regi', (req, res) => {
        const users = req.body;
        BDSCHOOLGHOR.insertOne(users)
            .then(result => {
                res.send(result)
            })
    })
    const SCHOOLGHORCON = client.db("SCHOOLGHOR").collection("Con");

    app.post('/con', (req, res) => {
        const users = req.body;
        SCHOOLGHORCON.insertOne(users)
            .then(result => {
                res.send(result)
            })
    })

    const SCHOOLGHORREMO = client.db("SCHOOLGHOR").collection("Remo");

    app.post('/remo', (req, res) => {
        const users = req.body;
        SCHOOLGHORREMO.insertOne(users)
            .then(result => {
                res.send(result)
            })
    })

    const SCHOOLGHORRENU = client.db("SCHOOLGHOR").collection("Renu");

    app.post('/renu', (req, res) => {
        const users = req.body;
        SCHOOLGHORRENU.insertOne(users)
            .then(result => {
                res.send(result)
            })
    })

    const SCHOOLGHORUPDA = client.db("SCHOOLGHOR").collection("Upda");

    app.post('/upda', (req, res) => {
        const users = req.body;
        SCHOOLGHORUPDA.insertOne(users)
            .then(result => {
                res.send(result)
            })
    })

    app.get("/userdata", (req, res) => {
        IslavoUsers.find({})
            .toArray((err, document) => {
                res.send(document)
            })
    })
});


// client.connect(err => {
//     const users = client.db("ISLAVO").collection("service");
//     console.log(err);
//     app.post('/users', (req, res) => {
//         const users = req.body;
//         users.insertOne(users)
//             .then(result => {
//                 res.send(result)
//             })
//     })
// });


// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`)
// })

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(process.env.PORT || port)