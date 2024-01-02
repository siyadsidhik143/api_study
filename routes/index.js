var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const testRoutes = require("./sampleTestRoutes");
// const curriculumRoutes = require("./curriculumRoutes");

// module.exports = {
//   testRoutes,
//   curriculumRoutes,
//   assessmentSettingRoutes,
// };

module.exports = router;
