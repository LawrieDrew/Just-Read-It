const mongoose = require('mongoose');
const db = require("../models");

mongoose.connect(
    process.env.MONGODV_URI || 'mongodb://localhost/justreadit'
);

const userSeed = [
    {
        name: "Joey",
        username: "joeythekid",
        email: "email@gmail.com",
        password: "password123",
        stories: [1, 2]
    },
    {
        name: "Laurie",
        username: "laurierox",
        email: "laurie@gmail.com",
        password: "password123",
        stories: [1, 2, 3]
    }
]
const storySeed = [
    {
        title: "Title 1",
        synopsis: "Synopsis 1",
        pages: [1,2,3]
    },
    {
        title: "Title 2",
        synopsis: "Synopsis 2",
        pages: [4,5,6]
    },
    {
        title: "Title 3",
        synopsis: "Synopsis 3",
        pages: [7,8,9]
    }
];

const pageSeed = [
    {
        text: "The dog barks",
        keyword: ["barks"],

    },
    {
        text: "The dog runs",
        keyword: ["runs"],

    },
    {

        text: "The dog jumps",
        keyword: ["jumps"],
 
    },
    {

        text: "The cat meows",
        keyword: ["meows"],

    },
    {

        text: "The cat drinks",
        keyword: ["drinks"],
  
    },
    {

        text: "The cat sleeps",
        keyword: ["sleeps"],

    },
    {
 
        text: "The cow moos",
        keyword: ["moos"],

    },
    {

        text: "The duck quacks",
        keyword: ["quacks"],

    },
    {

        text: "The chicken clucks",
        keyword: ["clucks"],

    }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });