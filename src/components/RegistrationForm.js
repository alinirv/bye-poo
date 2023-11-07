import { useContext, useEffect, useState } from 'react'

import Form, { InputField, SelectionField, FormControl } from './Form'
import Dialog from './Dialog'
import { fetchAnswerToReason, fetchOneStudent, fetchReasons, postStudent, putStudent } from '../api/fetchStudents'
import { AppContext } from '../context/AppContext'
import Notification from './Notification'
import Message from './Message'

function RegistrationForm() {
    const [ nameField, setNameField ] = useState('')
    const [ idField, setIdField ] = useState('')
    const [ reasonField, setReasonField ] = useState('')
    const [ customReason, setCustomReason ] = useState('')
    const [ showDialog, setShowDialog ] = useState(false)
    const [ dialogMessage, setDialogMessage ] = useState('')
    const [ reasons, setReasons ] = useState([])
    const { editingStudent, errorMessage, setErrorMessage } = useContext(AppContext)

    const handleNameChange = (event) => setNameField(event.target.value)

    const handleIdChange = (event) => setIdField(event.target.value)

    const handleReasonChange = (event) => setReasonField(event.target.value)

    const handleCustomReasonChange = (event) => setCustomReason(event.target.value)

    const hasCustomReason = () => reasonField === 'other'

    const handleSubmit = () => {
        const reason = hasCustomReason() ? customReason : reasonField

        if (idField === '' || idField === '' || reason === '')
            return

        const student = { id: idField, name: nameField, reason: reason }
        

        const getAnswer = async () => {
            const response = await fetchAnswerToReason(reason)

            if (response.status >= 400) {
                setErrorMessage(response.cause)
                return
            }

            setDialogMessage(response.data)
            setShowDialog(true)
        }

        const postOrPutStudent = async () => {
            let response

            if (editingStudent)
                response = await putStudent(student)
            else 
                response = await postStudent(student)

            if (response.status < 400) {
                setErrorMessage('')
                getAnswer()
                return
            }

            setErrorMessage(response.cause)
        }
        postOrPutStudent()
    }

    useEffect(() => {
        const getReasons = async () => {
            try {
                const response = await fetchReasons()

                if (response.status >= 400) {
                    setErrorMessage(response.cause)
                    return
                }

                response.data.push({ id: 0, reason: 'Outra', answer: { 
                    type: "text", 
                    message: "Seja lá qual for o motivo, saiba que você é fod@! Nem mesmo POO pode te parar!" 
                }})
                setReasons(response.data)
            }
            catch (error) {
                setErrorMessage('Esqueceram de ligar o servidor!')
            }
        }
        getReasons()

        if (!editingStudent)
            return

        const { id, name, reason } = editingStudent

        setIdField(id)
        setNameField(name)
        setReasonField(reason)
    }, [])

    return (
        <>
            <Form id='registrationForm'>    
                <InputField id='txtName' label='Nome:' type='text' placeholder='Nome completo' value={ nameField }
                    onChange={ handleNameChange } required={ true }/>

                <InputField id='txtId' label='Identificação:' type='text' placeholder='SC0000000' value={ idField }
                    onChange={ handleIdChange } required={ true } />

                <SelectionField id='txtReason' label='Razão:' placeholder='Razão da desistência' options={
                    reasons
                } onChange={ handleReasonChange } required={ true } selected={ reasonField }/>

                { 
                    hasCustomReason() && 
                        <InputField id='customReason' type='text' placeholder='Outra razão' value={ customReason } 
                            onChange={ handleCustomReasonChange } required={ hasCustomReason() }/> 
                }
            </Form>
            <FormControl formId='registrationForm' buttonDescription='Arregou' onSubmit={ handleSubmit } />
            <Dialog isActive={ showDialog } setIsActive={ setShowDialog } >
                <Message message={ dialogMessage } />
            </Dialog>
            { errorMessage && <Notification>{ errorMessage }</Notification> }
        </>
    )
}

export default RegistrationForm
