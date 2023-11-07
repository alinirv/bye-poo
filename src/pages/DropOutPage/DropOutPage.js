import { useNavigate } from 'react-router'

import styles from './DropOut.module.css'

import { SubmitButton } from '../../components/Form'
import PageHeader from '../../components/PageHeader'
import { useContext, useEffect, useState } from 'react'
import StudentsPlaceholder from '../../components/StudentsPlaceholder'
import StudentsTable from '../../components/StudentsTable'
import { fetchAllStudents } from '../../api/fetchStudents'
import Notification from '../../components/Notification'
import { AppContext } from '../../context/AppContext'

function DropOutPage(){
    const [ students, setStudents ] = useState([])
    const { errorMessage, setErrorMessage } = useContext(AppContext)

    const navigate = useNavigate();
    
    const goToRegistrationPage = () => navigate('/')

    const hasStudents = () => students.length > 0

    useEffect(() => {
        const getStudents = async () => {
            try {
                const response = await fetchAllStudents()

                if (200 > response.status || response.status >= 400) {
                    setErrorMessage(response.cause)
                    return
                }

                setStudents(response.data)
            }
            catch {
                setErrorMessage('Esqueceram de ligar o servidor!')
            }
        }
        getStudents()
    }, [])

    return(
        <div className={ `${styles.DropOutPage} ${hasStudents() ? styles.FilledDropOutPage : styles.EmptyDropOutPage}` }>
            <div className={ styles.DropOutPageBox }>
                <nav className={ styles.ToRegistrationPageNav }>
                    <SubmitButton id='bt2' description='Registrar desistente' onClick={ goToRegistrationPage }/>
                </nav>
                
                <PageHeader title="Lista de desistentes" /> 

                {
                    !hasStudents() ? <StudentsPlaceholder placeholder='Não há desistentes cadastrados ainda!' /> :
                        <StudentsTable students={ students } />
                }
            </div>
            { errorMessage && <Notification>{ errorMessage }</Notification> }
        </div>
    )
}

export default DropOutPage