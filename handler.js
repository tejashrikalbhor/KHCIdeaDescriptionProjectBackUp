const serverless = require("serverless-http");
const express = require("express");

const app = express();
const router = require('./src/index');

app.use(router);
app.use((req, res, next) => {
  return res.status(404).json({
    Error: "Not Found",
  });
});

module.exports.handler = serverless(app);
