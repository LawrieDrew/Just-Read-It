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
        page1: "The ball is _____",
        page1Keyword: "blue",
        page2: "The grass is ______",
        page2Keyword: "green",
        page3: "The tree is ______",
        page3Keyword: "tall"  
    },
    {
        title: "Title 2",
        synopsis: "Synopsis 2",
        level: 2,
        page1: "The kid _____",
        page1Keyword: "plays",
        page1Options: ["plays", "cries", "sleeps"],
        page2: "The kid _____",
        page2Keyword: "laughs",
        page2Options: ["jumps", "laughs", "eats"],
        page3: "The kid _____",
        page3Options: ["sings", "yells","runs"],
        page3Keyword: "runs"
    },
    {
        title: "Title 3",
        synopsis: "Synopsis 3",
        level: 3,
        page1: "The cat is ______",
        page1Keyword: "brown",
        page2: "The cat is ______",
        page2Keyword: "sleepy",
        page3: "The cat takes a _____",
        page3Keyword: "nap"
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