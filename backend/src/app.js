// Load modules express and body-parser
const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config/config');
const cors = require('cors');
// Initialize express app
const app = express();

// Configure body parser to convert request in JSON
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Initialize cors
app.use(cors());

// Import routes
const routes = require('./api/routes'); 

// load routes
routes(app);

app.listen(config.PORT, function () {
    console.log(`Server is running in ${config.LOCAL_HOST}:${config.PORT}/`);
});