const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "company_db"
});

connection.connect();
  
connection.query("SELECT * FROM customer", function(err, res) {
    if (err) throw err;
    console.log(res);
});

connection.end();