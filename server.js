// // Requiring necessary npm packages
// var express = require("express");
// var session = require("express-session");
// // Requiring passport as we've configured it
// var passport = require("./config/passport");

// // Setting up port and requiring models for syncing
// var PORT = process.env.PORT || 8080;
// var db = require("./models");

// // Creating express app and configuring middleware needed for authentication
// var app = express();
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(express.static("public"));
// // We need to use sessions to keep track of our user's login status
// app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
// app.use(passport.initialize());
// app.use(passport.session());

// // Requiring our routes
// require("./routes/html-routes.js")(app);
// require("./routes/api-routes.js")(app);

// // Syncing our database and logging a message to the user upon success
// db.sequelize.sync().then(function() {
//   app.listen(PORT, function() {
//     console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
//   });
// });


// Require/import the HTTP module
// const http = require("http");
// const express = require ("express")
// const app = require("express");
// // Define a port to listen for incoming requests
// const PORT = 8080;

const express = require("express");
var session = require("express-session");
const passport = require("./config/passport");
// const htmlRoutes = require("./routes/html-routes");
// const userRoutes = require("./routes/user-routes");
// const listingRoute = require("./routes/listing-routes");
// const db = require("./models");

// const session = require("express-session");

const app = express();
const PORT = process.env.PORT || 8080;
// const http = require("http")

// Create a generic function to handle requests and responses
// function handleRequest(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  // response.end("It Works!! Path Hit: " + request.url);
// }
app.use(express.static('public'))
// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
// const server = http.createServer(handleRequest);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});


