const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const storyapiRoutes = require("./storyapi");

// API Routes
router.use("/api", apiRoutes);
router.use("/story/api", storyapiRoutes);

// If no API routes are hit, send the React app
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

module.exports = router;