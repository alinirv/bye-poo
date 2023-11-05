import studentsTableStyle from './StudentsTable.module.css'

import TableHead from './TableHead'
import StudentRow from './StudentRow'

function StudentsTable({ students }) {
    return (
        <table className={ studentsTableStyle.StudentsTable } >
            <TableHead className={ studentsTableStyle.ColoredRow } />

            <tbody>{
                students.map((student, index) => ( 
                    <StudentRow 
                        key={ student.id } 
                        className={ index % 2 == 1 ? studentsTableStyle.ColoredRow : '' } 
                        student={ student } 
                    /> 
                ))
            }</tbody>
        </table>
    )
}

export default StudentsTable
