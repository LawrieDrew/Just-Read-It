const path = require("path");
const router = require("express").Router();
const storyRoutes = require("./stories");
const userStoryRoutes = require("./userStory");

//User Routes
router.use("/stories", storyRoutes);
router.use("/", userStoryRoutes);
// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
