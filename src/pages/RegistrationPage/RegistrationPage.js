import { useNavigate } from 'react-router'

import registrationPageStyle from './RegisterPage.module.css'

import { SubmitButton } from '../../components/Form'
import RegistrationForm from '../../components/RegistrationForm'
import PageHeader from '../../components/PageHeader'


function RegistrationPage(){
    const navigate = useNavigate()
    const goToDropOutPage = () => navigate('/Desistentes')

    return(
        <section className={ registrationPageStyle.RegistrationPage }>
            <PageHeader title='Registro de desistentes' />
            <RegistrationForm />
            <SubmitButton id="bt2" description="Lista de desistentes" onClick={ goToDropOutPage } />
        </section>    
    )
}

export default RegistrationPage
