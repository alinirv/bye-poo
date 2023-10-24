import './App.css';

function App() {
  return (
    <div className="App">
      <h3>Informe os dados do desistente</h3>
        <label for="txtName">Nome:
            <input type="text" name="txtName" placeholder="Nome Completo"/>
        </label>
    
        <label for="id">Identificação
            <input type="text" placeholder="SC0000000" id="id"/>
        </label>
    
        <label for="txtReason">Razão: 
            <input type="text" name="txtReason" placeholder="Razão da desistência"/>
        </label>

        <input type="submit" value="Arregou" id="bt1"/>
    </div>
  );
}

export default App;
