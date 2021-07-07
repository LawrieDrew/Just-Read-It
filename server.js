const express = require ("express");
const bodyParser = require ("body-parser");
const mongoose = require("mongoose");
const session = require('express-session');
const cors = require('cors');
require ('dotenv').config();

const MongoDBStore = require('connect-mongodb-session')(session);

const app = express();
const PORT = process.env.PORT || 3005;
const routes = require("./routes");


var store = new MongoDBStore({
    uri: process.env.MONGODB_URI || "mongodb://localhost/JustReadItDB",
    collection: 'mySessions'
});

app.enable("trust proxy");
app.use(cors({origin: "*"}));

app.use(session({
    secret: process.env.SESSION_SECRET || 'This is a secret',
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
    },
    store,
    resave: true,
    saveUninitialized: true
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/JustReadItDB", 
{ 
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => console.log("Connected to DB!!!!"));

app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });