export const fetchOneStudent = async (id) => {
    return { status: 200, data: { id: 'SC0000001', nome: 'Fulano', reason: 'Algum motivo' }}
}

export const fetchAllStudents = async () => {
    const students = []

    for (let i = 1; i <= 10; i++) students.push(
        { id: `SC${ i.toString().padStart(7, '0') }`, nome: `Aluno ${i}`, reason: 'Algum motivo'}
    )

    return { status: 200, data: students }
}

export const fetchReasons = async () => {
    return { status: 200, data: [
        { value: 'Arreguei', description: 'Arreguei'},
        { value: 'Não estava muito bem', description: 'Não estava muito bem'},
        { value: 'Ansiedade', description: '"When our momma sang us to sleep, but now we\'re stressed out"'},
        { value: 'Prefiro não responder', description: 'Prefino não responder'},
        { value: 'O que é i++?', description: 'O que é i++?'},
        { value: 'O Prof. Lucas não vai pro céu', description: 'O Prof. Lucas não vai pro céu'},
    ]}
}

export const fetchAnswerToReason = async (reason) => {
    let answer

    switch (reason) {
        case 'Arreguei':
            answer = { type: 'text', message: 'Arregou' }
            break
        
        case 'O Prof. Lucas não vai pro céu':
            answer = { type: 'text', message: 'Espera para ver DOO!' }
            break

        case 'O que é i++?':
            answer = { type: 'image', message: '*Colocar a url para a figurinha do senhor incrível*' }
            break

        case 'Não estava muito bem':
        case 'Ansiedade':
            answer = { type: 'text', message: 'Pois saiba que você é fod@! Não há nada que possa te parar, nem mesmo POO!' }
            break
        case 'Prefiro não responder':
        default:
            answer = {
                type: 'text',
                message: 'Seja lá qual foi o motivo, saiba que você é fod@! Não há nada que possa te parar, nem mesmo POO!'
            }
            break
    }

    return { status: 200, data: answer }
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
    return { status: 200 }
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

export const existsStudent = (id) => {
    return false
}
