import { useNavigate } from 'react-router'

import styles from './DropOut.module.css'

import { SubmitButton } from '../../components/Form'
import PageHeader from '../../components/PageHeader'
import { useState } from 'react'
import StudentsPlaceholder from '../../components/StudentsPlaceholder'

function DropOutPage(){
    const [ students, setStudents ] = useState([])

    const navigate = useNavigate();
    
    const goToRegisterPage = () => navigate('/')

    return(
        <div className={styles.MainBody}>
            <PageHeader title="Lista de desistentes" />

            {
                students.length == 0 && <StudentsPlaceholder placeholder='Não há desistentes cadastrados ainda!' />
            }

            <SubmitButton id='bt2' description='Registrar desistente' onClick={ goToRegisterPage }/>
        </div>
    )
}

export default DropOutPage