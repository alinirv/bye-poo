import { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext({})

function AppContextProvider({ children }) {
    const [ editingStudent, setEditingStudent ] = useState()
    const [ errorMessage, setErrorMessage ] = useState('')

    return (
        <AppContext.Provider value={{ editingStudent, setEditingStudent, errorMessage, setErrorMessage }} >
            { children }
        </AppContext.Provider>
    )
}

export default AppContextProvider
