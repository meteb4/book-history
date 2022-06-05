const mysql = require("mysql");

class Database {
  constructor(host, user, password, database) {
    this.database = mysql.createConnection({
      host: host,
      user: user,
      password: password,
      database: database,
    });
  }
  get connect() {
    this.database.connect(() => console.log("DATABASE CONNECTED"));
  }

  get end() {
    this.database.end(() => console.log("DATABASE DISCONNECTED"));
  }

  add(title, author) {
    this.database.query(
      `INSERT INTO books (title, author) VALUES ("${title}","${author}")`,
      (err, res) => {
        if (err) throw err;
      }
    );
  }

  delete(id) {
    this.database.query(`DELETE FROM books WHERE id = ${id}`, (err, res) => {
      if (err) throw err;
    });
  }

  get show() {
    return this.database.query(`SELECT * FROM books`, (err, res, fields) => {
      if (err) throw err;
      // console.log("elements are : ", res[0]);
      return "JSON.stringify(res)";
      // return JSON.parse(JSON.stringify(res));
    });
  }
}

let i = new Database("localhost", "root", "", "book");
i.connect;
console.log(i.show);

module.exports = Database;
