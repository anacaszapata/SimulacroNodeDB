const Student = require('../models/student');



async function createStudent(req, res) {
    try {
        const { name, identification, age} = req.body

        const newStudent = new Student({
            name: name,
            identification: identification,
            age: age
        })

        const savedStudent = await newStudent.save()
        res.json({ message: 'student created', data: savedStudent });
    } catch (error) {
        console.log(error);
        res.json({ message: 'error create student' });
    }
}


async function getStudents(req, res) {
    try {
        const students = await Student.find();
        res.json({ message: 'student found', data: students });

    } catch (error) {
        res.json({ message: 'error get student' });
    }
}


async function updateStudent(req, res) {
    try {
        const { name, identification, age} = req.body
        const id = req.params.id


        const updatedStudent = await Student.findByIdAndUpdate(id, {
            $set: {
                name: name,
                identification: identification,
                age: age
            }
        })

        res.json({ message: 'student updated', data: updatedStudent });

    } catch (error) {
        res.json({ message: 'error update student' });
    }

}

async function deleteStudent(req, res) {
    try {
        const { id } = req.params
        const deletedStudent = await Student.findByIdAndDelete(id)
        res.json({ message: 'student deleted', data: deletedStudent });

    } catch (error) {
        res.json({ message: 'error delete student' });
    }
}

module.exports = {
    getStudents,
    createStudent, 
    deleteStudent, 
    updateStudent
}