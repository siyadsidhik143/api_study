const express = require("express");
const router = express.Router();

const commonController = require("../controller/commonController")
router.post("/course/save", commonController.saveCourse);
router.get("/course/fetch", commonController.getCourse);
// router.post("/case-details/update", commonController.updateCaseDetails);

module.exports = router;

