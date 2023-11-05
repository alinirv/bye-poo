import { useState } from 'react'
import Form, { InputField, SelectionField, FormControl } from './Form'

function RegistrationForm() {
    const [ nameField, setNameField ] = useState('')
    const [ idField, setIdField ] = useState('')
    const [ reasonFiel, setReasonField ] = useState('')

    return (
        <>
            <Form id='registrationForm'>    
                <InputField id="txtName" label="Nome: " type="text" placeholder="Nome completo" />
                <InputField id="txtId" label="Identificação: " type="text" placeholder="SC0000000" />
                <SelectionField id="txtReason" label="Razão" placeholder="Razão da desistência" options={[
                    { value: 'other', description: 'Outra' }
                ]} />
            </Form>
            <FormControl formId='registrationForm' buttonDescription='Arregou' />
        </>
    )
}

export default RegistrationForm
