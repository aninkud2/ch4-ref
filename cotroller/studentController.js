
const studentModel = require("../model/studentModel")
const schoolModel= require("../model/schoolModel")
exports.createStudent = async(req,res)=>{

    try {

        const id = req.params.id
        const school= await schoolModel.findById(id)



 const createStudent =  new studentModel (req.body)

createStudent.school = school
await createStudent.save()
school.StudentInfo.push(createStudent)


await school.save()
res.status(200).json({message: `new student succesfully created`, data:createStudent})
        
    } catch (error) {
    res.status(500).json(error.message)    
    }
}