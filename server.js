const express = require ("express");
const mongoose = require("mongoose");
const session = require('express-session');

const Mongoosery = require('connect-mongodb-session')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
    secret: 'so secret, man',
    cookie: {},
    resave: false,
    saveUnittialized: true,
    store: new Mongoosery({
        db: mongoose
    })
}

app.use(session(sess));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");

app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });