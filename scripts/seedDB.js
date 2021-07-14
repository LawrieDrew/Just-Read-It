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
        page3Keyword: "goodbye" ,
        page3options: ["goodbye", "hello", "hasta la vista"],
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
        page2: "Time to learn. I think I am good at Math and _________",
        page2Keyword: "Science",
        page2options: ["playing", "sleeping", "Science"],
        page3: "Lunch time! I eat my yummy sandwhich and a __________",
        page3Keyword: "cupcake",
        page3options: ["cupcake", "pizza", "cookie"],
        page4: "Recess! I make a new friend named Gary. Gary likes ________.",
        page4Keyword: "soccer",
        page4options: ["baseball", "tennis", "soccer"],

    },
    {
        title: "Chapter Three: Going home!",
        synopsis: "Head home to your family after a long day at school with this advanced story",
        level: 3,
        page1: "I get home, eat a snack, and start my ________ right away.",
        page1Keyword: "homework",
        page1options: ["homework", "nap", "tv show"],
        page2: "I help Daddy set the table for dinner. Mommy gets home from work. Daddy made _________.",
        page2Keyword: "spaghetti",
        page2options: ["pancakes", "spaghetti", "icecream"],
        page3: "I tell Mommy and Daddy about my great day at school. After dinner, I brush my ________",
        page3Keyword: "teeth",
        page3options: ["cat", "teeth", "hair"],
        page4: "Mommy reads me a _______________. Me and the dog go to sleep.",
        page4Keyword: "story",
        page4options: ["letter", "newspaper", "story"],

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