// Requires
const express = require('express');

const app = express();

// Routes
app.get('/', function(req, res) {
    res.status(200).json({
        ok: true,
        message: 'Hello World'
    });
});

module.exports = app;