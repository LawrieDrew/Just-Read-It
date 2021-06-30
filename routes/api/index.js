const router = require("express").Router();
const userRoutes = require("./userRoutes");
const storyRoutes = require("./storyRoutes");
const pageRoutes = require("./pageRoutes");

router.use("/user", userRoutes);
router.use("/story", storyRoutes);
router.use("/page", pageRoutes);

module.exports = router;