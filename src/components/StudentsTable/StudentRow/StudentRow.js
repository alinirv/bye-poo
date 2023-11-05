import studentRowStyle from './StudentRow.module.css'

function StudentRow({ student, className }) {
    return (
        <tr className={ `${studentRowStyle.StudentRow} ${className || ''}` }>
            <td>{ student.id }</td>
            <td>{ student.name }</td>
            <td>{ student.reason }</td>
            <td>
                <button>Editar</button>
                <button>Excluir</button>
            </td>
        </tr>
    )
}

export default StudentRow
