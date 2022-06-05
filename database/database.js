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
        console.log(res);
      }
    );
  }

  delete(id) {
    this.database.query(`DELETE FROM books WHERE id = ${id}`, (err, res) => {
      if (err) throw err;
      console.log(res);
    });
  }
}

module.exports = Database;
