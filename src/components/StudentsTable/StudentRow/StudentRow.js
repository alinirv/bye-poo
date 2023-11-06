import studentRowStyle from './StudentRow.module.css'
import { deleteStudent } from '../../../api/fetchStudents';
import { AiFillEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";

function StudentRow({ student, className }) {
    return (
        <tr className={ `${studentRowStyle.StudentRow} ${className || ''}` }>
            <td>{ student.id }</td>
            <td>{ student.name }</td>
            <td>{ student.reason }</td>
            <td>
                <AiFillEdit></AiFillEdit>
                <AiOutlineDelete></AiOutlineDelete>
            </td>
        </tr>
    )
}

export default StudentRow
