const express = require('express');
const bodyParser = require('body-parser');

const {routes} = require('./api/app');
const app = express();
app.use(bodyParser.json());
app.use('/demo',routes)

app.use((req,res,next)=>{
    return res.status(404).json({Message:"Not Found"});
});
module.exports = app;