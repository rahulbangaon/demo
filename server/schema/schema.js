import mongoose from "mongoose";


const studentSchema = mongoose.Schema({
    fullName: String,
    email: String,
    mobileNumber: Number,
    courseName: String,

});

const Student = mongoose.model('student',studentSchema);

export default Student;