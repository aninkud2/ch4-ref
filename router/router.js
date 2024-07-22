const router = require("express").Router()
const {createSchool,getASchool}= require("../cotroller/schoolController")
const {createStudent} =require("../cotroller/studentController")
router.post("/createSchool",createSchool)


router.get("/getone/:id",getASchool)

router.post("/createstudent/:id",createStudent)

module.exports = router