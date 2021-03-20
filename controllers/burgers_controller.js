const express = require('express');
const burger = require('../models/burger');
const router = express.Router();


// make routes
router.get("/", (req,res) => {
    burger.selectAll(function(data) {
        const hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne(["name", "devoured"], [req.body.name, req,body.devoured], function(result) {
        // sent back the ID of new burger
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res) {
    const condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function(result) {
        if (result.changedRows == 0) {
            // if no rows changed, then ID doesn't exist ... 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;