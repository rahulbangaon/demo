import { useEffect, useState } from 'react';
import TableRow from '../../components/table/TableRow';
import { getStudents } from '../../../utils/api';
import './style.scss';

const AllStudent = () => {

  const [students,setStudents] = useState([]);

const studentsData = async ()=>{
  const response=  await getStudents()
  setStudents(response.data);
}
  

useEffect(()=>{
    studentsData();
},[]);


  return (
    <>
    <div className="container">
      <h1>All Students</h1>
      <table>
        <tr>
          <th>FullName</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Course</th>
          <th>Edit/Delete</th>
        </tr>
        {
          students.map((student)=>{
            return (
              <TableRow key={student._id} {...student} />
            )
          })
        }
      </table>
    </div>
    </>
  )
}

export default AllStudent;