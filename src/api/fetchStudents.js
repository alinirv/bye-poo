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

const handleDeleteStudent = async (event) => {
    try {
        const response = await deleteStudent(id)
        
    }
    catch (error) {
        return error;
    }
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
    return { status: 201 }
}

export const putStudent = (student) => {
    return { status: 200 }
}

export const deleteStudent = async (id) => {
    return { status: 200 }
}