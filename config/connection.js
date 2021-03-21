// require mysql package for MySQL connection
const mysql = require('mysql');

let connection;
if(process.env.JAWSDB_URL && process.env.JAWSDB_URL.length > 0){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "rootroot",
    database: "burger_db"
});

connection.connect(function (err) {
    if (err) {
        console.err("Error connecting:" + err.stack);
        return;
    }
    console.log("connected as id: " + connection.threadId);
});

// turns on logging
connection.on('enqueue', function(query) { console.log(query.sql) });

// exporting db connection for the ORM 
module.exports = connection;