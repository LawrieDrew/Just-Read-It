const userController = require("../../controllers/userController");
const router = require("express").Router();

router.route("/")
    .get(userController.findAll)
    .post(userController.create);

//for specific user
router 
    .route("/:id")
    .get(userController.findById)
    .put(userController.update);
    // .delete(userController.remove);
    
module.exports = router;