import { useNavigate } from "react-router";
import styles from "../components/DropOut.module.css"
import { SubmitButton } from "../../components/Form";
import PageHeader from "../../components/PageHeader";

function DropOutPage(){
    const navigate = useNavigate();
    const goToRegisterPage = () => {
        navigate('/');
    }

    return(
        <div className={styles.MainBody}>
            <PageHeader title="Lista de desistentes" />
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