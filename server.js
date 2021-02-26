// Dependencies
const express = require('express');

// Tells node that we are creating an "express" server
const app = express();

// Sets an initial port
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Gives the server ability to load files in the public directory
app.use(express.static('public'));

// Routes give the server a "map" of how to respond when users visit or request data from various URLs
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// Effectively "starts" the server
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
