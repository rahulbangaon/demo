import "./style.scss";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import FormInput from "../../components/form/FormInput";
import { addStudent } from "../../../utils/api";

const AddStudent = () => {

  const navigate = useNavigate();

  const [values, setValues] = useState({
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
    setValues({ ...values, [name]: value });
  };

  const handleClick = async() => {
     await addStudent(values);
     navigate("/allStudent");
  };

  return (
    <>
      <div className="container box">
        <h1>Add Student</h1>
        <div className="input-form">
          {inputs.map((input) => {
            return (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={handleChange}
              />
            );
          })}
        </div>
          <button onClick={handleClick}>Add</button>
      </div>
    </>
  );
};

export default AddStudent;
