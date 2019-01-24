

var express = require("express");
var path = require("path");
// var app = module.exports = express();


var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);



// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
