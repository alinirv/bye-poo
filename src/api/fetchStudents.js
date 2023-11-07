export const fetchOneStudent = async (id) => {
    return { status: 200, data: { id: 'SC0000001', name: 'Fulano', reason: 'Algum motivo' }}
}

export const fetchAllStudents = async () => {
    const students = []

    for (let i = 1; i <= 10; i++) students.push(
        { id: `SC${ i.toString().padStart(7, '0') }`, name: `Aluno ${i}`, reason: 'Algum motivo'}
    )

    return { status: 200, data: students }
}

export const fetchReasons = async () => {
    try {
        const response = await fetch('http://localhost:3500/reason')
        const reasons = await response.json()
        return { status: 200, data: reasons }
    }
    catch (error) {
        return { status: 500, cause: 'Esqueceram de ligar o servidor!' }
    }
}

export const fetchAnswerToReason = async (reason) => {
    if (!existsReason(reason))
        return { status: 200, data: { type: "text", message: "Pois saiba que voce fod@! Nada pode te parar, nem mesmo POO! Forças!" } }

    try {
        const response = await fetchReasons()
        
        if (response.status >= 400)
            return response

        const answer = response.data.filter(r => r.reason === reason)[0].answer

        return { status: 200, data:  answer }
    }
    catch (error) {
        return { status: 500, cause: 'Esqueceram de ligar o servidor!' }
    }
}

export const postStudent = async (student) => {
    const notification = validateStudent(student)

    if (existsStudent(student.id))
        return { status: 400, cause: `Já existe um desistente com o id ${student.id}` }
    if (notification)
        return { status: 400, cause: notification }

    try {
        const response = await fetch('http://localhost:3500/student', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(student)
        })
        return { status: 201 }
    }
    catch (error) {
        return { status: 500, cause: 'Esqueceram de ligar o servidor.' }
    }
}

export const putStudent = async (student) => {
    if (!existsStudent(student.id))
        return { status: 404, cause: `Não existe um desistente com id ${student.id}` }
    
    const notification = validateStudent(student)

    if (notification)
        return { status: 400, cause: notification }

    try {
        await fetch(`http://localhost:3500/student/${student.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(student)
        })
        return { status: 200 }
    }
    catch (error) {
        return { status: 500, cause: 'Esqueceram de ligar o servidor!' }
    }
}

export const deleteStudent = async (id) => {
    return { status: 200 }
}

const validateStudent = (student) => {
    let notification = ''

    if (!student.name)
        notification += 'O nome do estudante deve ser fornecido. '
    if (!student.id)
        notification += 'O id do estudante deve ser fornecido. '
    if (!student.reason)
        notification += 'O motivo da desistencia deve ser fornecido.'

    return notification
}

export const existsStudent = (reason) => {
    return false
}

export const existsReason = (id) => {
    return true
}
