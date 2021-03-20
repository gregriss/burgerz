// require db connection file
const connection = require('./connection');
// function to print questionmarks in generated queries
function printQuestionMarks(num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
};

// function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    let arr = [];

    // looping through each key, push key/value as string into arr
    for (let key in ob) {
        let value = ob[key];

        // checking to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string has spaces, add quotation marks 
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            };
            arr.push(key + "=" + value);
        }
    }
    // switches array of multiple strings to one comma-separated string
    return arr.toString();
}
// methods that will execute MySQL commands in the controllers; Methods used to retrieve and store data in the database.
var orm = {
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, [tableInput], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function (table, cols, vals, cb) {
        var queryString = "INSERT INTO ??";
        // I want to change this part...
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString + "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);
        connection.query(queryString, vals, function (err, result) {
            if (err) throw err;
            cb(result);
        })
    },
    updateOne: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE" + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);

        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }
}

// Export the ORM object to be used in burger.js (model)
module.exports = orm;