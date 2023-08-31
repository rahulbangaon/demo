import axios from "axios";

const URL = "http://localhost:9000";

export const addStudent = async (studentData) => {
  try {
    await axios.post(`${URL}/addStudent`, studentData);
    console.log("Student Data Added Sucessfully");
  } catch (error) {
    console.log("Error while adding Student", error);
  }
};

export const getStudents = async () => {
  try {
    return axios.get(`${URL}/getStudents`);
  } catch (error) {
    console.log("Error while getting Student", error);
  }
};

export const getStudent = async (id) => {
  try {
    return axios.get(`${URL}/getStudent/${id}`)
  } catch (error) {
    console.log("Error while getting Student", error);
  }
};

export const editStudent = async (id,studentData)=>{
    try {
        return axios.post(`${URL}/editStudent/${id}`,studentData)
    } catch (error) {
        console.log("Error while getting Student", error);
    }
}

export const deleteStudent = async (id)=>{
    try {
        return axios.delete(`${URL}/deleteStudent/${id}`);
    } catch (error) {
        console.log("Error while getting Student", error);
    }
}