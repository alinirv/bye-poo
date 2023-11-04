import { useNavigate } from 'react-router'

import InputField from '../../components/InputField'

import registrationPageStyle from './RegisterPage.module.css'


function RegistrationPage(){
    const navigate = useNavigate()
    const goToDropOutPage = () => {
        navigate('/Desistentes')
    }

    return(
        <div className={ registrationPageStyle.RegistrationPage }>
        <h3>Informe os dados do desistente</h3>
            <InputField id="txtName" type="text" placeholder="Nome completo" label="Nome: " />
            <InputField id="txtId" type="text" placeholder="SC0000000" label="Identificação: " />
            <InputField id="txtReason" type="text" placeholder="Razão da desistência" label="Razão" />
            <InputField type="submit" value="Arregou" id="bt1"/><br/> <br/>
            <InputField type="submit" value="Lista de desistentes" id="bt2" onClick={ goToDropOutPage }/>
        </div>
    )
}

export default RegistrationPage
