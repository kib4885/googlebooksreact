const router = require("express").Router();
const googleapicontroller = require("../../controllers/googleapicontroller");

// Matches with "/api/google"
router
  .route("/")
  .get(googleapicontroller.findAll);

module.exports = router;