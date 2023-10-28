import './App.css';
import InputField from './components/InputField';

function App() {
  return (
    <div className="App">
      <h3>Informe os dados do desistente</h3>
      <form onSubmit={ (e) => e.preventDefault() }>
        <InputField id="txtName" type="text" placeholder="Nome completo" label="Nome: " />
        <InputField id="txtId" type="text" placeholder="SC0000000" label="Identificação: " />
        <InputField id="txtReason" type="text" placeholder="Razão da desistência" label="Razão" />
        <InputField type="submit" value="Arregou" id="bt1"/>
      </form>
    </div>
  );
}

export default App;
