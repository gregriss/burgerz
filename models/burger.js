const orm = require('../config/orm');

// model named burger, uses orm functions
const burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    // insert function
    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    // update function
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    },
    delete: function(filters, cb) {
        orm.delete("burgers", filters, res => cb(res));
    }
};

// export burger model
module.exports = burger;