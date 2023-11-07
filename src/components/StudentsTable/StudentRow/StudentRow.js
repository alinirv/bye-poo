import studentRowStyle from './StudentRow.module.css'
import { deleteStudent } from '../../../api/fetchStudents';
import { AiFillEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import { useContext } from 'react';
import { AppContext } from '../../../context/AppContext';
import Notification from '../../Notification';

function StudentRow({ student, className }) {
    const { errorMessage, setErrorMessage } = useContext(AppContext)
    
    const handleDeleteStudent = async (event) => {
        try{
            const resposne = await deleteStudent(student.id);
            return resposne;
        }catch(error){
            return error;
        }
    }

    return (
        <>
            <tr className={ `${studentRowStyle.StudentRow} ${className || ''}` }>
                <td>{ student.id }</td>
                <td>{ student.name }</td>
                <td>{ student.reason }</td>
                <td>
                    <AiFillEdit></AiFillEdit>
                    <AiOutlineDelete onClick={() => handleDeleteStudent(student.id)}></AiOutlineDelete>
                </td>
            </tr>
            { errorMessage && <Notification>{ errorMessage }</Notification> }
        </>
    )
}

export default StudentRow
