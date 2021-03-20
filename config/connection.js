// require mysql package
const mysql = require('mysql');

// creating connection to database
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "rootroot",
    database: "burger_db"
});
// exporting db connection
module.exports = connection;