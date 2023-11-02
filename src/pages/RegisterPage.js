import '../App.css'
import InputField from "../components/InputField"

function RegisterPage(){
    return(
        <div className="Body">
        <h3>Informe os dados do desistente</h3>
            <InputField id="txtName" type="text" placeholder="Nome completo" label="Nome: " />
            <InputField id="txtId" type="text" placeholder="SC0000000" label="Identificação: " />
            <InputField id="txtReason" type="text" placeholder="Razão da desistência" label="Razão" />
            <InputField type="submit" value="Arregou" id="bt1"/><br/> <br/>
            <InputField type="submit" value="Lista de desistentes" id="bt2"/>
        </div>
    )
}
export default RegisterPage;