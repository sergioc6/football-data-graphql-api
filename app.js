require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

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

// Definir el esquema GraphQL
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

app.use('/api', graphqlHTTP({
    schema: schema,
    graphiql: true,
  }));

app.listen(process.env.PORT || 8000, () => {
    console.log('Graphql API is Running!')
});