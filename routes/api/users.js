const router = require("express").Router();
const passport = require('passport');
const usersController = require("../../controllers/usersController");

router.route("/checkAuth")
  .get(usersController.checkAuth);

/* Authentication Routes */
router.route("/register")
  .post(usersController.register);

router.route("/login")

//Added this to redirect to the login 
.post(passport.authenticate('local', { failureRedirect: '/login' }),usersController.login);

router.route("/logout").post(usersController.logout);



module.exports = router;