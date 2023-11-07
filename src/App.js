import { BrowserRouter, Route, Routes } from 'react-router-dom'

import RegisterPage from './pages/RegistrationPage'
import DropOutPage from './pages/DropOutPage' 
import AppContextProvider from './context/AppContext'


function App() {
    return(
        <AppContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={ <RegisterPage/> }/>
                    <Route path='/Desistentes' element={ <DropOutPage/> }/>
                </Routes>
            </BrowserRouter>
        </AppContextProvider>
    );
}

export default App