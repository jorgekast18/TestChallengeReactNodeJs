// Requires
var express = require('express');

var app = express();

// Routes
app.get('/', function(req, res) {
    res.status(200).json({
        ok: true,
        message: 'Hello World'
    });
});

module.exports = app;