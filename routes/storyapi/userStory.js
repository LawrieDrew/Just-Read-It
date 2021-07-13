const usersController = require("../../controllers/usersController");
const router = require("express").Router();



router.route("/user/:id")
.put(usersController.update)
.get(usersController.findById)
  
module.exports = router;