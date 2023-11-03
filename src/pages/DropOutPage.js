import { useNavigate } from "react-router";
import styles from "../components/DropOut.module.css"
import InputField from "../components/InputField";

function DropOutPage(){
    const navigate = useNavigate();
    const goToRegisterPage = () => {
        navigate('/');
    }

    return(
        <div className={styles.MainBody}>
            <h1>Lista de desistentes</h1>
            <p>...</p>
            <p>...</p>
            <p>...</p>
            <p>...</p>
            <p>...</p>
            <p>...</p>
            <InputField type="submit" value="Registrar desistente" id="bt2" onClick={goToRegisterPage}/>
        </div>
    )
}

export default DropOutPage;