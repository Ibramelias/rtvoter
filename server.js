const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
// Create a generic function to handle requests and responses
// Send the below string to the client when the user visits the PORT URL
app.use(express.static('public'))
// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});


