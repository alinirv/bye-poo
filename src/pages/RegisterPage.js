import { useNavigate } from 'react-router'
import '../App/App.css'
import InputField from "../components/InputField"


function RegisterPage(){
    const navigate = useNavigate();
    const goToDropOutPage = () => {
        navigate('/Desistentes');
    }

    return(
        <div className="Body">
        <h3>Informe os dados do desistente</h3>
            <InputField id="txtName" type="text" placeholder="Nome completo" label="Nome: " />
            <InputField id="txtId" type="text" placeholder="SC0000000" label="Identificação: " />
            <InputField id="txtReason" type="text" placeholder="Razão da desistência" label="Razão" />
            <InputField type="submit" value="Arregou" id="bt1"/><br/> <br/>
            <InputField type="submit" value="Lista de desistentes" id="bt2" onClick={goToDropOutPage}/>
        </div>
    )
}
export default RegisterPage;