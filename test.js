const { Client } = require('pg');
const express = require('express');
const cors = require('cors')
const app = express();
const DBFunctions = require('./Functions/DBFunctions.js')
var client = null

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("Empty (But working) Web Page")
});

app.post('/connect', (req, res) => {
    client = new Client({
        user: 'ron',
        host: req.body.ip,
        database: req.body.dbName,
        password: 'Bsmch@500K!',
        port: 5432
    });
    res.send(true)
})

app.post('/create', (req, res) => {
    DBFunctions.createTable(client, req.body.tableName, req.body.cols)
    res.send("Table created Successfully")
})

app.post('/tables', async (req, res) => {
    let result = await DBFunctions.getTablesNames(client)
    res.send(result)
})

const server = app.listen(8080, () => {
    console.log(`Express running → PORT ${server.address().port}`);
});
