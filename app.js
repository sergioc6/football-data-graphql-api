require('dotenv').config();
const express = require('express');
const graphqlHTTP = require('express-graphql');
const graphql = require('graphql');
const logger = require('morgan');
const cors = require('cors');
const { rateLimit } = require('express-rate-limit');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

app.use(rateLimit({  
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // max number of requests allowed
    message: 'Too many request, please try again later.'
}));

app.use('/graphql/api', graph);

module.exports = app;