import { useNavigate } from "react-router";
import styles from "../components/DropOut.module.css"
import InputField from "../components/InputField";
import SubmitButton from "../components/SubmitButton/SubmitButton";

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
            <SubmitButton id="bt2" description="Registrar desistente" onClick={ goToRegisterPage }/>
        </div>
    )
}

export default DropOutPage;