// require db connection file
const connection = require('./connection');

// methods that will execute MySQL commands in the controllers; Methods used to retrieve and store data in the database.
let orm = {
    selectAll: function (tableInput, cb) {
        let queryString = "SELECT * FROM ??;";
        connection.query(queryString, [tableInput], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function (table, values, cb) {
        let queryString = "INSERT INTO ?? SET ?";

        console.log(queryString);

        connection.query(queryString, [table, values], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })
    },
    updateOne: function (table, values, condition, cb) {
        let queryString = "UPDATE ?? SET ? WHERE ?";

        console.log(queryString);

        connection.query(queryString, [table, values, condition], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    delete: function(table, filters, cb) {
        let queryString = "DELETE FROM ?? WHERE ?";

        connection.query(queryString, [table, filters], function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })
    }
};

// Export the ORM object to be used in burger.js model
module.exports = orm;