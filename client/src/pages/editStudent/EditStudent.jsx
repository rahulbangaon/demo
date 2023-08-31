import './style.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import FormInput from '../../components/form/FormInput';
import { getStudent, editStudent} from '../../../utils/api';

const EditStudent = () => {

    const params = useParams();
    const navigate = useNavigate();

     const [student, setStudent] = useState({
       fullName: "",
       email: "",
       mobileNumber: "",
       courseName: "",
     });

     const inputs = [
       {
         id: 0,
         name: "fullName",
         placeholder: "Enter your Full Name",
         type: "text",
         label: "Full Name",
       },
       {
         id: 1,
         name: "email",
         placeholder: "Enter your Email",
         type: "text",
         label: "Email",
       },
       {
         id: 2,
         name: "mobileNumber",
         placeholder: "Enter your Mobile Number",
         type: "number",
         label: "Mobile Number",
       },
       {
         id: 3,
         name: "courseName",
         placeholder: "Enter your Course Name",
         type: "text",
         label: "Course Name",
       },
     ];

     const handleChange = (e) => {
       const { name, value } = e.target;
       setStudent({ ...student, [name]: value });
     };

     const handleClick = async() => {
        await editStudent(student._id,student);
        navigate('/allStudent');
       
     };

     const getData = async()=>{
       const data = await getStudent(params.id);
       setStudent(data.data[0]);
     }

     useEffect(()=>{
        getData();
     },[])


  return (
    <>
      <div className="container box">
        <h1>Edit Student</h1>
        <div className="input-form">
          {inputs.map((input) => {
            return (
              <FormInput
                key={input.id}
                {...input}
                value={student[input.name]}
                onChange={handleChange}
              />
            );
          })}
        </div>
          <button onClick={handleClick}>Edit</button>
      </div>
    </>
  );
}

export default EditStudent;