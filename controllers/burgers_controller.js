// require express package, burger model file, and exprss router
const express = require('express');
const router = express.Router();
const burger = require('../models/burger');

router.get("/", (req, res) => {
    burger.selectAll(function (data) {
        let hbsObject = { burgers: data };
        // console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    console.log('this is post route');
    burger.insertOne({ burger_name: req.body.burger_name, devoured: req.body.devoured }, function (result) {
        // send back the ID of new burger
        console.log(req.body);
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function (req, res) {
    const burgerId = {
        id: parseInt(req.params.id)
    };
    console.log("this is put method");
    // const devoured = req.params.devoured;
    // console.log(req.body);
    console.log("burger id:" + burgerId.id);
    const updateValues = {
        // switch boolean to tiny int
        devoured: (req.body.devoured === "true" ? 0 : 1)
    };
    console.log(updateValues);
    burger.updateOne(updateValues, burgerId, function (result) {

        console.log(result);

        if (result.changedRows == 0) {
            // if no rows changed, then ID doesn't exist ... 404
            return res.status(404).end();
        } else {
            // successful response
            res.status(200).end();
        }
    });
});

router.delete("/api/burger/:id", (req, res) => {
    burger.delete({ id: req.params.id }, data => {
        console.log('Burger Deleted', data);
        res.json(data);
    });
});

module.exports = router;