const express = require("express");
const serverless = require("serverless-http");
const app = express();
const ejs = require('ejs');
const path = require('path');
app.engine('ejs', require('ejs').__express);
app.set('view engine', 'ejs');
app.get('/.netlify/functions/api', function(req, res) {
    res.render('main');
});
module.exports.handler = serverless(app);
