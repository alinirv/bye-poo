import { createContext, useState } from 'react'

export const RegistrationContext = createContext({})

function RegistrationContextProvider({ children }) {
    const [ nameField, setNameField ] = useState('')
    const [ idField, setIdField ] = useState('')
    const [ reasonField, setReasonField ] = useState('')

    return (
        <RegistrationContext.Provider value={{ 
            nameField, 
            setNameField, 
            idField, 
            setIdField,
            reasonField,
            setReasonField,
        }} >
            { children }
        </RegistrationContext.Provider>
    )
}

export default RegistrationContextProvider
