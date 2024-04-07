const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes')
const  connectDB  = require('./config/database')
require('dotenv').config()


const port = process.env.PORT  || 3000;


connectDB()


const app = express();


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', routes);


app.listen(port, () => console.log(`listening at http://localhost:${port}`));