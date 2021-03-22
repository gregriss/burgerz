// require orm so we can call its functions
const orm = require('../config/orm');

// model named burger, uses orm functions
const burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            // console.log(res);
            cb(res);
        });
    },
    // insert function
    insertOne: function(values, cb) {
        orm.insertOne("burgers", values, function(res) {
            console.log(res);
            cb(res);
        });
    },
    // update function
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function(res) {
            console.log(res);
            cb(res);
        });
    },
    delete: function(filters, cb) {
        orm.delete("burgers", filters, res => cb(res));
    }
};

// export burger model
module.exports = burger;