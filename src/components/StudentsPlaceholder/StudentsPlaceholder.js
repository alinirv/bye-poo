import studentsPlaceholderStyle from './StudentsPlaceholder.module.css'

function StudentsPlaceholder({ placeholder }) {
    return (
        <div className={ studentsPlaceholderStyle.StudentsPlaceholder }>
            <p>{ placeholder }</p>
        </div>
    )
}

export default StudentsPlaceholder
