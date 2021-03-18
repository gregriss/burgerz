const connection = require('./connection');

// * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.
// ORM stands for Object Relational Mapper

var orm = {
    // selectAll()
    selectAll: function(tableInput, cb) {
      var queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function(err, result) {
          if(err) throw err;
          cb(result);
      });  
    },
    insertOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;
        // I want to change this part...
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString + "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);
        connection.query(queryString, vals, function(err, result) {
            if (err) throw err;
            cb(result);
        })
    },
    // updateOne()
    updateOne: function(whatToUpdate, table, orderCol) {
        var queryString = "UPDATE ?? SET ?";
        console.log(queryString);
        connection.query(queryString, [whatToUpdate, table, orderCol], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    }

}

// Export the ORM object in `module.exports`
module.exports = orm;