require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

// User Auth
var passport = require("passport");
var session = require("express-session");
var bodyParser = require("body-parser");

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static("public"));
app.use("/uploaded_files", express.static("uploaded_files"))

// User Auth
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(session({secret: "weardrobe crew", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/outfitRoutes")(app);
require("./routes/htmlRoutes")(app);

// User Auth
require("./routes/htmlRoutes.js")(app);
require("./routes/userAuthRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
