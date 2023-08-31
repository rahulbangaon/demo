import './style.scss';

import { Link } from 'react-router-dom';
import {deleteStudent} from '../../../utils/api';
import { useNavigate } from 'react-router-dom';

const TableRow = (props) => {

  const navigate = useNavigate();

const handleDelete = async(id)=>{
  await deleteStudent(id);
  window.location.reload();
}


  return (
    <>
      <tr>
        <td>{props.fullName}</td>
        <td>{props.email}</td>
        <td>{props.mobileNumber}</td>
        <td>{props.courseName}</td>
        <td>
          <Link to={`/editStudent/${props._id}`}>
            <button className="edit">Edit</button>
          </Link>
          <button className="delete" onClick={()=>{
            handleDelete(props._id);
          }}>Delete</button>
        </td>
      </tr>
    </>
  );
}

export default TableRow;