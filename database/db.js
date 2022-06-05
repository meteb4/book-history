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

  add(name) {
    this.database.query(
      `INSERT INTO books (title) VALUES ("${name}")`,
      (err, result) => {
        if (err) throw err;
      }
    );
  }
  search = {
    name: (name) =>
      this.database.query(
        `SELECT * FROM books WHERE title="${name}"`,
        (err, res) => {
          if (err) throw err;
          console.log(JSON.stringify(res[0]));
        }
      ),
  };
}

let i = new Database("localhost", "root", "", "book");
i.connect;
i.search.name("hi");
i.end;
