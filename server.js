const express = require ("express");
const mongoose = require("mongoose");
//const session = require('express-session');

//const Mongoosery = require('connect-mongodb-session')(session.Store);

const app = express();
const PORT = process.env.PORT || 3005;
const routes = require("./routes");


var store = new MongoDBStore({
    uri: process.env.MONGODB_URI || "mongodb://localhost/JustReadItDB",
    collection: 'mySessions'
  });

// const sess = {
    //secret: 'so secret, man',
     //cookie: {},
     //resave: false,
    //saveUnittialized: true,
    //store: new Mongoosery({
      //  db: mongoose
    //})
// }

app.use(require('express-session')({
    secret: 'This is a secret',
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
    },
    store: store,
    // Boilerplate options, see:
    // * https://www.npmjs.com/package/express-session#resave
    // * https://www.npmjs.com/package/express-session#saveuninitialized
    resave: true,
    saveUninitialized: true
  }));

//app.use(session(sess));


// const sess = {
//     secret: 'so secret, man',
//     cookie: {},
//     resave: false,
//     saveUnittialized: true,
//     store: new Mongoosery({
//         db: mongoose
//     })
// }

// app.use(session(sess));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/JustReadItDB");

app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });