export const fetchOneStudent = (id) => {
    return { id: 'SC0000001', nome: 'Fulano', reason: 'Algum motivo' }
}

export const fetchAllStudents = () => {
    const students = []

    for (let i = 1; i <= 10; i++) students.push(
        { id: `SC${ i.toString().padStart(7, '0') }`, nome: `Aluno ${i}`, reason: 'Algum motivo'}
    )

    return students
}
