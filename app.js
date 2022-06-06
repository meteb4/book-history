const express = require("express");
const app = express();

const Database = require("./database/database");
const DATABASE = new Database("localhost", "root", "", "book");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  next();
});

DATABASE.connect;
app.get("/", (req, res) => {
  res.send(DATABASE.show);
});

app.get("/books", (req, res) => {
  DATABASE.show().then((e) => console.log(e));
});

app.listen(3000);
