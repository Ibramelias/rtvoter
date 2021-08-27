const { request, response } = require('express');

const express = require('express');

const Datstore = require('nedb');

const app = express();

app.listen(3000, () => console.log("onair at port 3000"));

app.use(express.static('public'));
app.use(express.json({limit:'1mb'}));