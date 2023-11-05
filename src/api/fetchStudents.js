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

export const fetchReasons = () => {
    return [
        { value: 'Arreguei', description: 'Arreguei'},
        { value: 'Não estava muito bem', description: 'Não estava muito bem'},
        { value: 'Ansiedade', description: '"When our momma sang us to sleep, but now we\'re stressed out"'},
        { value: 'Prefiro não responder', description: 'Prefino não responder'},
        { value: 'O que é i++?', description: 'O que é i++?'},
        { value: 'O Prof. Lucas não vai pro céu', description: 'O Prof. Lucas não vai pro céu'},
    ]
}

export const fetchAnswerToReason = (reason) => {
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

    return answer
}

export const postStudent = (student) => {

}

export const putStudent = (student) => {

}
