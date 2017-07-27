const express = require('express');
const path = require('path');
let app = express();
const PORT = process.env.PORT || 4040;
const bodyParser = require('body-parser');
let apiRoutes = require('./app/routing/apiRoutes');
let htmlRoutes = require('./app/routing/htmlRoutes');

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Routes
app.get("/", htmlRoutes.home);
app.get("/survey", htmlRoutes.survey);
app.get("/api/friends", apiRoutes.getRequest);
app.post("/api/friends", apiRoutes.postRequest);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});