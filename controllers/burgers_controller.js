const express = require('express');
const burger = require('../models/burger');

const app = express();

const exphbs = require('express-handlebars');

const PORT = 8080;

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

// routes
app.get("/", (req,res) => {
    res.send("Server is up.");
});




// listener
app.listen(PORT, () => {
    console.log("Server listening at http://localhost:" + PORT);
});