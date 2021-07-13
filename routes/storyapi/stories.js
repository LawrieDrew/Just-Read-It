const storyController = require("../../controllers/storyController");
const router = require("express").Router();

router.route("/")
    .get(storyController.findAll);

//for specific story
router 
    .route("/:id")
    .get(storyController.findById)


    
module.exports = router;