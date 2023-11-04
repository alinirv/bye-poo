import { useNavigate } from 'react-router'

import registrationPageStyle from './RegisterPage.module.css'

import Form, { FormControl, InputField, SelectionField, SubmitButton } from '../../components/Form'
import PageHeader from '../../components/PageHeader'


function RegistrationPage(){
    const navigate = useNavigate()
    const goToDropOutPage = () => navigate('/Desistentes')

    return(
        <section className={ registrationPageStyle.RegistrationPage }>
            <PageHeader title='Registro de desistentes' />

            <Form id='registrationForm'>    
                <InputField id="txtName" label="Nome: " type="text" placeholder="Nome completo" />
                <InputField id="txtId" label="Identificação: " type="text" placeholder="SC0000000" />
                <SelectionField id="txtReason" label="Razão" placeholder="Razão da desistência" />
            </Form>
            <FormControl formId='registrationForm' buttonDescription='Arregou' />
            
            <SubmitButton id="bt2" description="Lista de desistentes" onClick={ goToDropOutPage } />
        </section>
    )
}

export default RegistrationPage
