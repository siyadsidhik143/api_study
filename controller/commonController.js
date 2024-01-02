const _config_models = require("../models");  

exports.saveCourse = async (req, res) => {
  try {
    const params = req.body;
    let models = _config_models(global.globalConfigDBConnection);
    const course = new models.TestData();
    course.course_title = params.course_title;

    const savedCourse = await course.save();

    res.status(200).json({
      status: "success",
      data: savedCourse,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to create course",
      error: error.message,
    });
  }
};


exports.getCourse = async (req, res) => {
    try {
      let models = _config_models(global.globalConfigDBConnection);
  
      const courseList =await models.TestData.find();
    //   const coursesTotal = await models.TestData.find().countDocuments();
  
      if (courseList) {
        res.status(200).json({
          status: "success",
          data: {
            courses: courseList,
            pageSize: courseList?.length,
            // total: coursesTotal ? coursesTotal : 0,
          },
        });
      } else {
        res.status(400).json({
          status: "error",
          message: "Courses not Found",
        });
      }
    } 
    
    catch (error) {
      res.status(500).json({
        status: "error",
        message: "Failed to create course",
        error: error.message,
      });
    }
  };
  