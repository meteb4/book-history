const express = require("express");
const app = express();

const Database = require("./database/database");
const DATABASE = new Database("localhost", "root", "", "book");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Access-Headers", "Content-Type");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  next();
});

DATABASE.connect;
app.get("/", (req, res) => {});

app.get("/books", async (req, res) => {
  const books = await DATABASE.show.then((e) => e);
  res.send(books);
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/books/add", (req, res) => {
  console.log(JSON.parse(req.body));
  DATABASE.add(req.body.title, req.body.author, req.body.available);
});

app.listen(3000);
