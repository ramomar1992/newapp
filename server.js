"use strict";
require('dotenv').config();
const PORT = process.env.PORT;
const express = require('express')
const superAgent = require('superagent');
const pg = require('pg');
const methodOverride = require('method-override');
const app = express();
const client = new pg.client(process.env.DATABSE_URL)
app.use(methodOverride('_method'));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
client.on('error', (err) => {
    console.log('PG is on error', err);
});
app.get('/', renderHome);

function renderHome(req, res) {
    res.send('<h1>Hello world</h1>')
}
app.listen(PORT, () => {
    console.log('Listening on port ', PORT);
});