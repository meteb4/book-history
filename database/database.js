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

  add(title, author, available) {
    function treatAvailable(element) {
      if (element) return "1";
      else {
        return "0";
      }
    }
    this.database.query(
      `INSERT INTO books (title, author, available) VALUES ("${title}","${author}", "${treatAvailable(
        available
      )}")`,
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
    return new Promise((resolve, reject) => {
      this.database.query("SELECT * FROM books", (err, res, fields) => {
        if (!res) {
          console.log("no access to database");
          return "impossible";
        }
        if (err) reject(err);
        let arr = [];
        for (let i = 0; i < Object.keys(res).length; i++) {
          arr.push(JSON.parse(JSON.stringify(res[i])));
        }
        resolve(arr);
      });
    });
  }
}

let i = new Database("localhost", "root", "", "book");
// i.add("Fables", "Jean de la Fontaine");
// i.show().then((e) => console.log(e));
module.exports = Database;
