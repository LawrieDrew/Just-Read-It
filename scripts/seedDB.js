const mongoose = require('mongoose');
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/JustReadItDB',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );
  
const userSeed = [
    {
        name: "Joey",
        username: "joeythekid",
        email: "email@gmail.com",
        password: "password123",
        level: 1
    },
    {
        name: "Laurie",
        username: "laurierox",
        email: "laurie@gmail.com",
        password: "password123",
        level: 3
    }
]
const storySeed = [
    {
        title: "Title 1",
        synopsis: "Synopsis 1",
        level: 1,
        pages: [
          {
            text: "The dog barks",
            keyword: "dog"
          },
          {
            text: "The dog jumps",
            keyword: "jumps"
          },
          {
            text: "The dog runs",
            keyword: "runs"
          }          
      ]
    },
    {
        title: "Title 2",
        synopsis: "Synopsis 2",
        level: 2,
        pages: [
          {
            text: "The cat sleeps",
            keyword: "cat"
          },
          {
            text: "The cat meows",
            keyword: "meows"
          },
          {
            text: "The cat eats",
            keyword: "eats"
          }          
      ]
    },
    {
        title: "Title 3",
        synopsis: "Synopsis 3",
        level: 3,
        pages: [
          {
            text: "The kid laughs",
            keyword: "kid"
          },
          {
            text: "The kid plays",
            keyword: "plays"
          },
          {
            text: "The kid runs",
            keyword: "runs"
          }          
      ]
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
  
db.Story
  .remove({})
  .then(() => db.Story.collection.insertMany(storySeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });