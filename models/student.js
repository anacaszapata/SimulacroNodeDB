const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name:String,
    identification:String,
    age:Number,
})

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;