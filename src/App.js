import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import DropOutPage from "./pages/DropOutPage"


function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <RegisterPage/> }/>
                <Route path='/Desistentes' element={ <DropOutPage/> }/>
            </Routes>
        </BrowserRouter>
    );
}

export default App