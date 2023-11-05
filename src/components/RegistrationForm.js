import { useState } from 'react'
import Form, { InputField, SelectionField, FormControl } from './Form'

function RegistrationForm() {
    const [ nameField, setNameField ] = useState('')
    const [ idField, setIdField ] = useState('')
    const [ reasonField, setReasonField ] = useState('')
    const [ customReason, setCustomReason ] = useState('')

    const handleNameChange = (event) => setNameField(event.target.value)

    const handleIdChange = (event) => setIdField(event.target.value)

    const handleReasonChange = (event) => setReasonField(event.target.value)

    const handleCustomReasonChange = (event) => setCustomReason(event.target.value)

    const hasCustomReason = () => reasonField === 'other'

    return (
        <>
            <Form id='registrationForm'>    
                <InputField id="txtName" label="Nome: " type="text" placeholder="Nome completo" value={ nameField }
                    onChange={ handleNameChange } required={ true }/>

                <InputField id="txtId" label="Identificação: " type="text" placeholder="SC0000000" value={ idField }
                    onChange={ handleIdChange } required={true} />

                <SelectionField id="txtReason" label="Razão:" placeholder="Razão da desistência" options={[
                    { value: 'other', description: 'Outra' }
                ]} onChange={ handleReasonChange } required={ true }/>

                { 
                    hasCustomReason() && 
                        <InputField id='customReason' type='text' placeholder='Outra razão' value={ customReason } 
                            onChange={ handleCustomReasonChange } required={ hasCustomReason() }/> 
                }
            </Form>
            <FormControl formId='registrationForm' buttonDescription='Arregou' />
        </>
    )
}

export default RegistrationForm
