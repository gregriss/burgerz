const express = require('express');
const exphbs = require('express-handlebars');
const PORT = process.env.PORT || 8080;
const app = express();

// serves static content for app from "public" directory
app.use(express.static("public"));


// parse app body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// import routes, give server access to routes
var routes = require("./controllers/burgers_controller");

app.use(routes);

// listener
app.listen(PORT, () => {
    console.log("Server listening at http://localhost:" + PORT);
});