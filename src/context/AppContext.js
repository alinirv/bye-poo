import { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext({})

function AppContextProvider({ children }) {
    const [ editingStudent, setEditingStudent ] = useState()

    return (
        <AppContext.Provider value={{ editingStudent, setEditingStudent }} >
            { children }
        </AppContext.Provider>
    )
}

export default AppContextProvider
