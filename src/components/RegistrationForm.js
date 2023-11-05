import { useEffect, useState } from 'react'

import Form, { InputField, SelectionField, FormControl } from './Form'
import Dialog from './Dialog'
import { fetchAnswerToReason, fetchOneStudent, fetchReasons, postStudent, putStudent } from '../api/fetchStudents'

function RegistrationForm() {
    const [ nameField, setNameField ] = useState('')
    const [ idField, setIdField ] = useState('')
    const [ reasonField, setReasonField ] = useState('')
    const [ customReason, setCustomReason ] = useState('')
    const [ showDialog, setShowDialog ] = useState(false)
    const [ dialogMessage, setDialogMessage ] = useState('')
    const [ reasons, setReasons ] = useState([])

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

        if (fetchOneStudent(student.id) !== null)
            putStudent(student)
        else
            postStudent(student)
        
        setShowDialog(true)
        setDialogMessage(fetchAnswerToReason(student.reason))
    }

    useEffect(() => {
        const fetchedReasons = fetchReasons()
        fetchedReasons.push({ value: 'other', description: 'Outra' })
        setReasons(fetchedReasons)
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
                } onChange={ handleReasonChange } required={ true }/>

                { 
                    hasCustomReason() && 
                        <InputField id='customReason' type='text' placeholder='Outra razão' value={ customReason } 
                            onChange={ handleCustomReasonChange } required={ hasCustomReason() }/> 
                }
            </Form>
            <FormControl formId='registrationForm' buttonDescription='Arregou' onSubmit={ handleSubmit } />
            <Dialog isActive={ showDialog } setIsActive={ setShowDialog } >{ dialogMessage }</Dialog>
        </>
    )
}

export default RegistrationForm
