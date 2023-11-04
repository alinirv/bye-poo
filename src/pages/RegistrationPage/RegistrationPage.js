import { useNavigate } from 'react-router'

import registrationPageStyle from './RegisterPage.module.css'

import InputField from '../../components/InputField'
import SubmitButton from '../../components/SubmitButton/SubmitButton'


function RegistrationPage(){
    const navigate = useNavigate()
    const goToDropOutPage = () => navigate('/Desistentes')

    return(
        <section className={ registrationPageStyle.RegistrationPage }>
            <header>
                <h3>Informe os dados do desistente</h3>
            </header>
            
            <InputField id="txtName" label="Nome: " type="text" placeholder="Nome completo" />
            <InputField id="txtId" label="Identificação: " type="text" placeholder="SC0000000" />
            <InputField id="txtReason" type="text" label="Razão" placeholder="Razão da desistência" />
            
            <SubmitButton id="bt1" description="Arregou" />
            <br/>
            <br/>
            <SubmitButton id="bt2" description="Lista de desistentes" onClick={ goToDropOutPage } />
        </section>
    )
}

export default RegistrationPage
