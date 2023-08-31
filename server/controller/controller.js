import { request, response } from "express";
import Student from "../schema/schema.js";

export const addStudent = async (request, response)=>{
        const student = request.body;
        const validateStudent = new Student(student);
        try {
            await validateStudent.save();
            response.status(201).json(validateStudent);
        } catch (error) {
            console.log("Error while uploading student in Database ",error);
        }
}

export const getStudents = async (request,response)=>{

    try {
        const students = await Student.find({});
        response.status(200).json(students);
        
    } catch (error) {
        response.status(404).json({message: error.message});
    }

}

export const getStudent = async (request, response) => {
  try {
    const student = await Student.find({_id: request.params.id});
    response.status(200).json(student);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

export const editStudent = async (request, response)=>{
    const student = request.body;
    const validateStudent = new Student(student);
    try {
        await Student.replaceOne({_id: request.params.id},validateStudent);
        response.status(201).json(validateStudent);
    } catch (error) {
        console.log("Error while getting Student", error);
    }
}


export const deleteStudent = async (request,response)=>{
    try {
        await Student.deleteOne({_id: request.params.id});
        response.status(201).json({message: `Student with Id ${request.params.id} deleted successfully.`});
        
    } catch (error) {
        console.log("Error while getting Student", error);
    }
}