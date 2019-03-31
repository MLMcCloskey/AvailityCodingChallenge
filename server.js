// require dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const routes = require('./routes');
require('dotenv').config();

// declare port and initialize express
const PORT = process.env.PORT || 3001;
const app = express();

// parse requset
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//connect to the database
mongoose.connect(process.env.DB, { useNewUrlParser: true })
  .then(() => console.log(`Database connected successfully`))
  .catch(err => console.log(err));
Promise = mongoose.Promise;

// enable cross origin requests
const allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
        res.sendStatus(200);
    } else {
        next();
    }
};
app.use(allowCrossDomain);

// pass in routes to express
// app.use(routes);

app.listen(PORT, err => {
    if (err) console.log(err);
    else console.log(`Serving listening on port ${PORT}`);
});