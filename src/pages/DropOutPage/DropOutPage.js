import { useNavigate } from 'react-router'

import styles from './DropOut.module.css'

import { SubmitButton } from '../../components/Form'
import PageHeader from '../../components/PageHeader'
import { useState } from 'react'
import StudentsPlaceholder from '../../components/StudentsPlaceholder'

function DropOutPage(){
    const [ students, setStudents ] = useState([])

    const navigate = useNavigate();
    
    const goToRegistrationPage = () => navigate('/')

    const hasStudents = () => students.length > 0

    return(
        <div className={ `${styles.DropOutPage} ${hasStudents() ? styles.FilledDropOutPage : styles.EmptyDropOutPage}` }>
            <div className={ styles.DropOutPageBox }>
                <nav className={ styles.ToRegistrationPageNav }>
                    <SubmitButton id='bt2' description='Registrar desistente' onClick={ goToRegistrationPage }/>
                </nav>
                
                <PageHeader title="Lista de desistentes" /> 

                {
                    !hasStudents() && <StudentsPlaceholder placeholder='Não há desistentes cadastrados ainda!' />
                }
            </div>
        </div>
    )
}

export default DropOutPage