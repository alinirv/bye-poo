import { useNavigate } from 'react-router'

import InputField from '../../components/InputField'

import registrationPageStyle from './RegisterPage.module.css'


function RegistrationPage(){
    const navigate = useNavigate()
    const goToDropOutPage = () => navigate('/Desistentes')

    return(
        <div className={ registrationPageStyle.RegistrationPage }>
            <h3>Informe os dados do desistente</h3>
            
            <InputField id="txtName" label="Nome: " type="text" placeholder="Nome completo" />
            <InputField id="txtId" label="Identificação: " type="text" placeholder="SC0000000" />
            <InputField id="txtReason" type="text" label="Razão" placeholder="Razão da desistência" />
            
            <InputField id="bt1" type="submit" value="Arregou" />
            <br/>
            <br/>
            <InputField id="bt2" type="submit" value="Lista de desistentes" onClick={ goToDropOutPage } />
        </div>
    )
}

export default RegistrationPage
