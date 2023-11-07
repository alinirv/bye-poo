import studentRowStyle from './StudentRow.module.css'
import { deleteStudent, putStudent } from '../../../api/fetchStudents';
import { AiFillEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import { useContext } from 'react';
import { AppContext } from '../../../context/AppContext';
import Notification from '../../Notification';
import { useNavigate } from 'react-router';

function StudentRow({ student, className }) {
    const { errorMessage, setErrorMessage, setEditingStudent } = useContext(AppContext)
    const navigate = useNavigate();
    
    const handleDeleteStudent = async (event) => {
        try{
            const resposne = await deleteStudent(student.id);
            return resposne;
        }catch(error){
            return error;
        }
    }

    const handleEditStudent = async (event) => {
        try{            
            setEditingStudent(student); 
            navigate('/');
        }catch(error){
            return error;
        }
    }

    return (
        <>
            <tr className={ `${studentRowStyle.StudentRow} ${className || ''}` }>
                <td>{ student.id }</td>
                <td>{ student.name }</td>
                <td>{ student.reason.reason }</td>
                <td>
                    <AiFillEdit onClick={() => handleEditStudent(student)}></AiFillEdit>
                    <AiOutlineDelete onClick={() => handleDeleteStudent(student.id)}></AiOutlineDelete>
                </td>
            </tr>
            { errorMessage && <Notification>{ errorMessage }</Notification> }
        </>
    )
}

export default StudentRow
