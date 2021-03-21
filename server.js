// require dependencies used to build server
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const PORT = process.env.PORT || 8080;
const app = express();

// designating file path for static files
const publicFilePath = path.join(__dirname, 'public/assets');
// serves static content for app from "public" directory
app.use('public', express.static(publicFilePath));

// parse app body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// setting handlbars as the engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// import routes, give server access to routes
var routes = require("./controllers/burgers_controller");
// telling express app to use routes from controller 
app.use(routes);

// listener
app.listen(PORT, () => {
    console.log("Server listening at http://localhost:" + PORT);
});