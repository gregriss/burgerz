// require express package, burger model file, and exprss router
const express = require('express');
const burger = require('../models/burger');
const router = express.Router();

// routes
// get route for index/initial page load
router.get("/", (req,res) => {
    burger.selectAll(function(data) {
        const hbsObject = { burgers: data };
        // console.log(hbsObject);
        res.render("index", hbsObject);
    });
});
// post route
router.post("/api/burgers", function(req, res) {
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result) {
        // send back the ID of new burger
        res.json({ id: result.insertId });
    });
});
// put route
router.put("/api/burgers/:id", function(req, res) {
    const condition = "id = " + req.params.id;
    const devoured = req.params.devoured;
    // console.log("condition", condition);
    console.log("burger id:" + condition);
    burger.updateOne( devoured, condition, function(result) {
        // devoured: req.body.devoured
        if (result.changedRows == 0) {
            // if no rows changed, then ID doesn't exist ... 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});
    // delete route
    router.delete("/api/burger/:id", (req,res) => {
        burger.delete({ id: req.params.id }, data => {
            console.log(data);
            res.json(data);
        });
    });
// export the router

module.exports = router;