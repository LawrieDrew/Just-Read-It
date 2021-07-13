const mongoose = require('mongoose');
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/justreading',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );

const storySeed = [
    {
        title: "Chapter One: Morning",
        synopsis: "Morning Time! Get ready for the day with this beginner level story.",
        level: 1,
        page1: "Breakfast time! Daddy made _____",
        page1Keyword: "eggs",
        page1options: ["toast", "pizza","eggs"],
        page2: "Pack my backpack with ______",
        page2options: ["toys", "books", "snacks"],
        page2Keyword: "books",
        page3: "Say _________ to my parents and dog!",
        page3Keyword: "good bye" ,
        page3options: ["good bye", "hello", "hasta la vista"],
        page4: "Wait for the big _______ bus.",
        page4Keyword: "yellow" ,
        page4options: ["blue", "yellow", "red"]
    },
    {
        title: "Chapter Two: Fun at School!",
        synopsis: "Have fun at school with this intermediate level story",
        level: 2,
        page1: "Get to my _________. My teacher is nice!",
        page1Keyword: "classroom",
        page1options: ["classroom", "bedroom", "kitchen"],
        page2: "Time to learn. I think I am good at ________ and _________",
        page2Keyword: "Math and Science",
        page2options: ["running and playing", "sleeping and eating", "Math and Science"],
        page3: "Lunch time! I eat my yummy _________ and a __________",
        page3Keyword: "sandwich and a cupcake",
        page3options: ["sandwich and a cupcake", "pizza and a pepper", "cookie and milk"],
        page4: "Recess! I make a new friend named Gary. Gary likes ________.",
        page4Keyword: "soccer",
        page4options: ["baseball", "tennis", "soccer"],

    },
    {
        title: "Chapter Three: Going home!",
        synopsis: "Head home to your family after a long day at school with this advanced story",
        level: 3,
        page1: "I get _______, eat a _______, and start my ________ right away.",
        page1Keyword: "home, snack, homework",
        page1options: ["home, snack, homework", "horse, book, nap", "dessert, crayon, tv show"],
        page2: "I help Daddy set the ________ for dinner. Mommy gets home from work. Daddy made _________.",
        page2Keyword: "table, spaghetti",
        page2options: ["bed, pancakes", "table, spaghetti", "couch, icecream"],
        page3: "I tell Mommy and Daddy about my _______ day at school. After dinner, I ___________",
        page3Keyword: "great, brush my teeth",
        page3options: ["great, brush my teeth", "bad, run outside", "funny, watch tv"],
        page4: "Mommy reads me a _______________. Me and the dog go to ________.",
        page4Keyword: "bedtime story, sleep",
        page4options: ["cookbook, the yard", "newspaper, the movies", "bedtime story, sleep"],

    }
];


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