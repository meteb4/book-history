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
DATABASE.add("Capital de la Douleur", "Baudelaire");
let i = DATABASE.show;
console.log(i);
app.get("/", (req, res) => {
  res.send(DATABASE.show);
});

app.get("/books", (req, res) => {});

app.listen(3000);
